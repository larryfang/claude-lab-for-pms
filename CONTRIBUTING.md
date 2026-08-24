# Contributing to Claude Lab

Thanks for helping make this better! Whether it's a typo, a fresh example, a new lab, or a translation — contributions are welcome. No build tools required; if you can edit a text file, you can contribute.

## Ways to help

- 🐛 Fix typos, broken steps, or outdated UI instructions
- ✨ Add a new lesson or lab
- 🌍 Translate the lab into another language (fork into a `lang/` variant)
- 🎨 Improve the design, accessibility, or interactions
- 🏢 Share useful real-world examples (sanitized!) for the prompt library

## Local preview

Lessons load as separate Markdown files, so use a tiny local server (don't open `index.html` via `file://`):

```bash
python3 -m http.server 8080   # then open http://localhost:8080
# or: npx serve .
```

macOS: double-click `start.command`.

## Editing existing content

All lesson text lives in `content/*.md`. **Just edit the Markdown** — no other step needed. Keep the friendly, hands-on, "do the thing" tone, and prefer concrete examples over abstract description.

## Adding a new lesson (2 steps)

This repo hosts **multiple courses** in `window.COURSES` (in `assets/js/content.js`): the Cowork course (`COWORK_COURSE`, files in `content/`) and the Claude Code course (`CC_COURSE`, files in `content/cc/`).

1. **Create the file** under the right course folder, e.g. `content/cc/15-my-lesson.md`.
2. **Register it** in `assets/js/content.js` by adding an entry to the right course's module `lessons` array:

```js
{
  id: "my-lesson",            // unique; used in the URL (#/lesson/my-lesson)
  file: "15-my-lesson.md",    // matches the file you created
  title: "My Lesson",
  minutes: 8,                  // or null for reference pages
  level: "Beginner",          // Beginner | Core | Advanced | Reference
  summary: "One-line description shown on cards and search.",
  keywords: ["search", "terms", "here"]
}
```

That's it — the sidebar, search, progress, and routing all update automatically.

To add a whole **module**, add a new object to the `modules` array (give it an `id`, `emoji`, `title`, `desc`, and `lessons`). To add a **badge**, append to the `badges` array.

## Markdown + custom blocks cheat-sheet

Standard Markdown works (headings, **bold**, *italic*, `code`, lists, tables, links, images, blockquotes, code fences). Plus these custom blocks:

### Callouts
```text
:::tip Optional title
Helpful aside.
:::
```
Types: `tip` 💡, `note` 📝, `warning` ⚠️, `concept` 🧠, `try` 🎯.

### Lab box
```text
:::lab Name of the lab
Steps and checklists go here.
:::
```

### Accordion (collapsible)
```text
:::details Click to expand
Hidden content.
:::
```
(`:::faq` is an accepted alias for `:::details`.)

### Interactive checklist
Use task-list syntax — these auto-save per learner:
```text
- [ ] First step
- [ ] Second step
```

### Copyable prompt card
Use a fenced block with the `prompt` language:
````text
```prompt
Paste-ready prompt text for the learner to copy.
```
````

### Knowledge-check quiz
Use a fenced block with the `quiz` language. Start each question with `Q:`; `+` marks the correct option (exactly one per question); `-` marks distractors; `>` is the explanation. (A blank line between questions is conventional, but it's the `Q:` line that actually begins a new question.)
````text
```quiz
Q: What is MCP?
+ An open standard for connecting AI to tools and data
- A subscription tier
> MCP is the "USB-C for AI" — the universal connection standard.
```
````

### Terminal simulator (Claude Code course)

Use a fenced block with the `claude-sim` (or `terminal`) language. It renders an in-browser terminal the learner types into.

- `# text` → intro line(s) shown at the top (before the first step)
- `> command` → a step the learner types at Claude's `❯` prompt
- `$ command` → a step shown at a shell `$` prompt
- Any line after a step (not starting with `>`/`$`/`#`) → that step's simulated **response** (preserves newlines)

````text
```claude-sim
# A small project is open.
> /init
Created CLAUDE.md (commands, conventions, gotchas).
$ npm test
 PASS  all tests ✓
```
````

> Author responses so they **don't start a line with `>` or `$`** (those would be parsed as new steps). Indent or reword if needed.

> 💡 **Line-length gotcha:** `prompt` blocks render with `white-space: pre-wrap`, so long lines wrap and you can write briefs as normal paragraphs. Plain fences (no language, or `text`) use `overflow-x: auto` instead — keep those lines under ~88 characters or the learner has to scroll sideways. Quiz options are rendered as HTML and wrap too.

> ⚠️ **Authoring gotcha:** the Markdown engine is intentionally tiny. Avoid nesting triple-backtick code fences *inside* another fence. To show example `SKILL.md` or config, use a single fenced block (the content inside can contain `---`, headings, etc., just not another set of ```` ``` ````).

## Shipping a JS or CSS change

`index.html` loads `styles.css` and the three JS files with a `?v=` query. Browsers cache
those files hard, so **bump every `?v=` together** when you change any of them, or returning
learners keep the old copy:

```bash
# from the repo root — replace the old date with today's
sed -i '' 's/?v=2026-08-24/?v=2026-09-15/g' index.html
```

All four URLs deliberately carry the identical string, so one find-and-replace does it. Lesson
Markdown needs no version — `app.js` fetches `content/` with `cache: "no-cache"`, so edits to
a `.md` file go live on the next page load.

## Style guide

- Audience for the Cowork course is **non-technical revenue and product people** — AEs, PMM/growth, PMs. Explain jargon the first time; use analogies.
- Keep lessons **short and active**. Every concept lesson should end with a quiz; every "lab" lesson should have real, do-it-now steps with checklists.
- Cowork labs come in **three role lanes** (Sales / GTM / Product). Where a lab differs by lane, put each variant in its own `:::details` block so learners only open theirs.
- Every Cowork brief in a lab should follow **B.R.I.E.F.** (Background, Result, Inputs, Edges, Flag) and ask for **two artefacts** — a data file and a narrative file — so the output is verifiable.
- Use `[BRACKETS]` for things learners replace (project keys, names).
- Frame UI steps **resiliently** ("In Settings → Connectors; the exact label may vary") since the product evolves.

## Pull requests

- Keep PRs focused (one lesson/topic where possible).
- Preview locally and click through your change.
- Describe *what* changed and *why* in the PR body.

Thank you! ✦
