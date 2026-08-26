import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warn = [];
const fail = (message) => errors.push(message);

for (const file of ["assets/js/markdown.js", "assets/js/content.js", "assets/js/app.js"]) {
  const check = spawnSync(process.execPath, ["--check", path.join(root, file)], { encoding: "utf8" });
  if (check.status !== 0) fail(`${file}: JavaScript syntax error\n${check.stderr.trim()}`);
}

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "assets/js/content.js"), "utf8"), sandbox, { filename: "content.js" });
const courses = sandbox.window.COURSES || [];
const registered = new Set();
const ids = new Set();
let lessonCount = 0;

for (const course of courses) {
  const courseIds = new Set();
  for (const module of course.modules || []) {
    if (!module.id || !module.title || !Array.isArray(module.lessons)) fail(`${course.id}: malformed module`);
    for (const lesson of module.lessons || []) {
      lessonCount++;
      if (ids.has(lesson.id)) fail(`duplicate lesson id: ${lesson.id}`);
      ids.add(lesson.id); courseIds.add(lesson.id); registered.add(lesson.file);
      const full = path.join(root, "content", lesson.file);
      if (!fs.existsSync(full)) { fail(`${lesson.id}: missing content/${lesson.file}`); continue; }
      const md = fs.readFileSync(full, "utf8");
      const outsideFences = md.replace(/```[\s\S]*?```/g, "");
      const h1s = outsideFences.match(/^#\s+.+$/gm) || [];
      if (h1s.length !== 1) fail(`${lesson.file}: expected exactly one H1, found ${h1s.length}`);
      const opens = (outsideFences.match(/^:::(?:tip|note|warning|concept|try|lab|details|faq)(?:\s|$)/gm) || []).length;
      const closes = (outsideFences.match(/^:::\s*$/gm) || []).length;
      if (opens !== closes) fail(`${lesson.file}: custom block imbalance (${opens} opens, ${closes} closes)`);
      for (const block of md.matchAll(/```quiz\s*\n([\s\S]*?)```/g)) {
        const questions = block[1].split(/^Q:\s*/m).slice(1);
        if (!questions.length) fail(`${lesson.file}: empty quiz block`);
        questions.forEach((q, i) => {
          const correct = (q.match(/^\+\s+/gm) || []).length;
          const wrong = (q.match(/^-\s+/gm) || []).length;
          if (correct !== 1 || wrong < 1) fail(`${lesson.file}: quiz question ${i + 1} needs one correct answer and at least one distractor`);
        });
      }
    }
  }
  for (const route of course.fastPaths || []) {
    if (!route.id || !route.title || !route.audience || !route.desc || !route.lessons?.length) fail(`${course.id}: malformed fast path`);
    const seen = new Set();
    for (const id of route.lessons || []) {
      if (!courseIds.has(id)) fail(`${course.id}/${route.id}: unknown lesson ${id}`);
      if (seen.has(id)) fail(`${course.id}/${route.id}: duplicate lesson ${id}`);
      seen.add(id);
    }
  }
  for (const [id, meta] of Object.entries(course.freshness || {})) {
    if (!courseIds.has(id)) fail(`${course.id}: freshness metadata references unknown lesson ${id}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.verifiedDate || "")) fail(`${course.id}/${id}: invalid verifiedDate`);
    if (!/^https:\/\//.test(meta.sourceUrl || "") || !meta.sourceLabel) fail(`${course.id}/${id}: freshness source must have an HTTPS URL and label`);
  }
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
for (const file of walk(path.join(root, "content")).filter((f) => f.endsWith(".md"))) {
  const rel = path.relative(path.join(root, "content"), file).split(path.sep).join("/");
  if (!registered.has(rel)) fail(`orphan lesson file: content/${rel}`);
  const md = fs.readFileSync(file, "utf8");
  for (const match of md.matchAll(/\]\(#\/([^\s)]+)\)/g)) {
    const bits = match[1].split("/").filter(Boolean);
    const id = bits[0] === "lesson" ? bits.slice(1).join("/") : bits.slice(1).join("/");
    if (id && id !== "path" && !ids.has(id)) fail(`${rel}: broken internal lesson link #/${match[1]}`);
  }
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const versions = [...html.matchAll(/(?:styles|markdown|content|app)\.(?:css|js)\?v=([^"']+)/g)].map((m) => m[1]);
if (versions.length !== 4 || new Set(versions).size !== 1) fail(`index.html: all four asset versions must match (found ${versions.join(", ")})`);
if (courses.length !== 2) warn.push(`expected 2 courses, found ${courses.length}`);

if (errors.length) {
  console.error(`Course verification failed with ${errors.length} issue(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`Course verification passed: ${courses.length} courses, ${lessonCount} lessons, ${registered.size} registered files, ${ids.size} unique routes.`);
warn.forEach((message) => console.warn(`Warning: ${message}`));
