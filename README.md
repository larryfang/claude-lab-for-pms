<div align="center">

# ✦ Claude Lab

### Hands-on, interactive, open-source courses for getting genuinely good at Claude — for **Sales, GTM & Product** *and* **developers**.

Learn by *doing*: auto-saving checklists, instant-feedback quizzes, copy-paste prompts, and an **in-browser Claude Code terminal you can actually type into**.

[**▶ Live demo**](https://larryfang.github.io/claude-lab-for-pms/) · [Quick start](#-quick-start) · [Add a course](#-add-a-course-or-lesson) · [Contribute](CONTRIBUTING.md)

</div>

---

## What is this?

Claude Lab is a self-contained, **zero-dependency** static website that hosts a multi-course, hands-on curriculum. Learners pick a track, work through short lessons with real exercises, and track progress with badges — all saved in the browser, no account needed.

It's built to be **forked**: swap in your company's examples, project keys, and connectors to make an internal onboarding workshop in minutes.

## 📚 The two courses

| Course | For | What you'll do |
|---|---|---|
| 🤝 **Claude Cowork for Sales, GTM & Product** | AEs, PMM/growth, product managers | Write **briefs** that work first time, connect **CRM/Jira/mail/docs**, ship real **deliverables** (decks, live-formula spreadsheets, docs), three **role lanes** of labs, build a **Skill**, put it on a **schedule**, verify before you send — *no code required* |
| ⌨️ **Claude Code for Developers** | Engineers, new to Claude Code | Agentic mental model, **context engineering & CLAUDE.md**, Explore→Plan→Code→Commit, TDD, **subagents, hooks, MCP**, headless/CI, worktrees — with a **terminal simulator** |

~60 lessons across both tracks, grounded in current Anthropic docs and community best practices.

## ✨ Features

- **Multi-course hub** with per-course progress, badges, and a course switcher
- **Three role lanes** in the Cowork course — Sales, GTM and Product — so learners practise on the work they actually do
- **Interactive terminal simulator** — a guided, in-browser Claude Code session learners type into (with copy-paste commands for their real terminal too)
- **Hands-on labs** in every module, with auto-saving checklists
- **Instant-feedback quizzes** and **copy-to-clipboard prompt/command cards**
- **Progress & badges** with a little confetti 🎉 (saved locally, no account)
- **Beautiful, responsive UI**, light/dark mode, full keyboard nav (`/` search, `←`/`→` lessons)
- **No build step, no framework, no CDN** — pure HTML/CSS/JS; content is plain Markdown

## 🚀 Quick start

### Just view it (recommended for learners)
Deploy to GitHub Pages (below) and share the URL — learners only need a browser.

### Run locally
Lessons load as separate Markdown files, so use a tiny local web server (opening `index.html` via `file://` won't load lessons):

```bash
python3 -m http.server 8080    # then open http://localhost:8080
# or: npx serve .
```

> macOS: double-click `start.command`.

## 🌐 Deploy to GitHub Pages

1. Push to GitHub.
2. **Settings → Pages → Build and deployment** → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)`. Save.
3. ~1 minute later it's live at `https://<user>.github.io/<repo>/`.

A GitHub Actions workflow is included at `.github/workflows/pages.yml` if you prefer Actions-based deploys (set Source: *GitHub Actions*). After deploying, update `repo` in `assets/js/content.js` (`window.SITE.repo`).

## 🧩 Add a course or lesson

Everything is driven by `assets/js/content.js`.

- **Add a lesson:** drop a Markdown file in `content/` (Cowork) or `content/cc/` (Claude Code), then register it in the right module's `lessons` array.
- **Add a course:** push a new course object to `window.COURSES` (give it an `id`, `emoji`, `title`, `tagline`, `modules`, `badges`) and create its lesson files. The hub, routing, progress, and badges all wire up automatically.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the Markdown + custom-block cheat-sheet (callouts, labs, quizzes, prompt cards, and the **terminal simulator** block).

## 📁 Project structure

```text
.
├── index.html              # App shell
├── assets/
│   ├── css/styles.css      # Design system (CSS variables to rebrand)
│   └── js/
│       ├── markdown.js     # Tiny Markdown engine + custom blocks (incl. terminal sim)
│       ├── content.js      # Multi-course manifest: COURSES, modules, badges  ← edit here
│       └── app.js          # Hub + routing, per-course progress, quizzes, search, confetti, sim
├── content/                # Cowork course lessons (*.md)
│   └── cc/                 # Claude Code course lessons (*.md)
├── start.command           # macOS: double-click to preview locally
├── .nojekyll · .github/workflows/pages.yml
└── CONTRIBUTING.md · LICENSE
```

## 🎨 Make it your own

- **Swap examples** — edit any file in `content/` to use your real project keys, tools, and brand voice.
- **Rebrand** — CSS variables at the top of `assets/css/styles.css`; site title/tagline in `window.SITE` (content.js).
- **Internal edition** — point connectors/examples at your stack, add company-specific labs, host on internal Pages.

## ⚠️ A note on accuracy

Claude's products and Claude Code evolve quickly. This lab teaches **stable mental models** and frames steps resiliently, but a flag or menu may shift over time. For current specifics, the [Claude docs](https://claude.com/docs) and [Claude Code docs](https://code.claude.com/docs) are the source of truth. PRs that keep the lab current are very welcome.

## 📜 License

[MIT](LICENSE). Free to use, fork, remix, and run as a workshop. Not affiliated with Anthropic — a community-made teaching resource.

---

<div align="center"><sub>Built to be remixed. ✦</sub></div>
