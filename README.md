<div align="center">

# ✦ Claude Lab

### A fun, interactive, hands-on lab that teaches Claude Desktop, Cowork, Connectors, Skills, Plugins, MCP — and a gentle Claude Code 101 — to non-technical people (especially product managers).

**No coding background required.** Learn by *doing*, in your own Claude app.

[Quick start](#-quick-start) · [Customize it](#-make-it-your-own) · [Contribute](CONTRIBUTING.md)

<sub>📍 Live at <strong>https://larryfang.github.io/claude-lab-for-pms/</strong> once GitHub Pages is enabled (Settings → Pages).</sub>

</div>

---

## What is this?

Claude Lab is a self-contained, **zero-dependency** static website that runs a full hands-on course. Learners progress through eight short modules plus a reference section, doing real exercises in Claude Desktop along the way — with progress tracking, badges, knowledge-check quizzes, copyable prompts, and interactive checklists baked in.

It's built to be **forked**: swap in your company's examples, project keys, and connectors to make an internal onboarding workshop in minutes.

> Designed for product managers and curious knowledge workers who are new to Claude and "vibe coding."

## ✨ Features

- **26 lessons across 8 modules** + a reference section (glossary, prompt library, troubleshooting)
- **Hands-on labs** for Desktop, Cowork, Atlassian connectors, building a Skill, and Claude Code
- **Interactive everything** — auto-saving checklists, instant-feedback quizzes, copy-to-clipboard prompt cards
- **Progress & badges** with a little confetti 🎉 (saved in your browser, no account needed)
- **Beautiful, responsive UI** with light/dark mode and full keyboard navigation (`/` to search, `←`/`→` to move)
- **No build step, no framework, no CDN** — pure HTML/CSS/JS. Content is plain Markdown.
- **Easy to author** — lessons are Markdown files with friendly custom blocks (callouts, labs, quizzes)

## 🧭 What it covers

| Module | You'll learn / build |
|---|---|
| 🚀 Start Here | The mental model, which tool to use, your first real chat |
| 🖥️ Desktop Basics | Projects, files, artifacts, and prompting (C.R.A.F.T.) — *Lab: brain-dump → PRD* |
| 🧩 Core Concepts | MCP, Connectors, Skills, Plugins, Subagents, the Directory |
| 🤝 Cowork | Agentic, outcome-based work — *Lab: hand Cowork a real multi-step job* |
| 🔌 Connect (Atlassian) | How connectors work safely — *Labs: connect Jira/Confluence + real PM workflows* |
| 🛠️ Build a Skill | Anatomy of `SKILL.md` — *Lab: build a reusable Skill* — then bundle it into a Plugin |
| ⌨️ Claude Code 101 | What it is, setup & terminal fear-buster — *Lab: vibe-code a working tool* |
| 🏁 Capstone | Combine a connector + a skill + Cowork into one end-to-end workflow |

## 🚀 Quick start

### Option A — Just view it (recommended for learners)
Deploy to GitHub Pages (see below) and share the URL. Learners only need a browser.

### Option B — Run locally
Because lessons load as separate Markdown files, you need a tiny local web server (opening `index.html` directly via `file://` won't load lessons).

```bash
# from the project folder — pick whichever you have:
python3 -m http.server 8080
#   …or
npx serve .
```

Then open **http://localhost:8080** (or the URL the tool prints).

> macOS shortcut: `./start.command` (double-click it in Finder) starts the server and opens your browser.

## 🌐 Deploy to GitHub Pages (free hosting)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, and Save.
4. Wait ~1 minute; your lab is live at `https://<your-username>.github.io/<repo-name>/`.

A ready-to-use GitHub Actions workflow is included at `.github/workflows/pages.yml` if you prefer Actions-based deployment (enable **Source: GitHub Actions** in Settings → Pages).

> The in-app **GitHub** link reads the `repo` field in `assets/js/content.js`. After your first push, enable **Settings → Pages** and the included Actions workflow publishes the lab automatically. (Forking? Swap that `repo` URL for your own.)

## 🎨 Make it your own

This is the whole point — fork it and tailor it for your team:

- **Swap examples** — edit any file in `content/` to use your real project keys (e.g. replace `[YOUR-PROJECT-KEY]`), tools, and brand voice.
- **Rebrand** — change colors and fonts in `assets/css/styles.css` (CSS variables at the top), and the title/tagline in `assets/js/content.js`.
- **Add/remove lessons** — see [CONTRIBUTING.md](CONTRIBUTING.md). It's two steps: add a Markdown file, register it in `content.js`.
- **Internal edition** — point connectors at *your* stack, add company-specific labs, and host it on internal Pages.

## 📁 Project structure

```text
.
├── index.html              # App shell
├── assets/
│   ├── css/styles.css      # Design system (edit CSS variables to rebrand)
│   └── js/
│       ├── markdown.js     # Tiny self-contained Markdown engine + custom blocks
│       ├── content.js      # Course manifest: modules, lessons, badges  ← edit to add lessons
│       └── app.js          # Router, progress, quizzes, search, confetti
├── content/                # All lessons as Markdown (.md)  ← edit to change content
│   ├── 00-welcome.md ... 92-troubleshooting.md
├── start.command           # macOS: double-click to preview locally
├── .nojekyll               # Tell GitHub Pages to serve files as-is
├── CONTRIBUTING.md         # How to author lessons + the custom block cheat-sheet
└── LICENSE
```

## ♿ Accessibility & UX

- Keyboard-first: `/` search, `←`/`→` lesson nav, `Esc` to close, focus-visible styles, skip link.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`.
- Responsive from phone to desktop; high-contrast, readable typography.

## ⚠️ A note on accuracy

Claude's products evolve quickly. This lab teaches **stable mental models** and frames UI steps resiliently, but a button may move or a feature may grow more capable over time. For current specifics, the [official docs](https://claude.com/docs) and [Help Center](https://support.claude.com) are the source of truth. PRs that keep the lab current are very welcome.

## 🤝 Contributing

Issues and PRs welcome — typo fixes, new labs, better examples, translations. See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📜 License

[MIT](LICENSE) — free to use, fork, remix, and run as a workshop. Attribution appreciated but not required.

---

<div align="center">
<sub>Built to be remixed. Not affiliated with Anthropic — just a fan-made teaching resource. ✦</sub>
</div>
