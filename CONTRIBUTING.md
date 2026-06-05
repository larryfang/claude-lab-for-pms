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

1. **Create the file** in `content/`, e.g. `content/15-my-lesson.md`.
2. **Register it** in `assets/js/content.js` by adding an entry to the right module's `lessons` array:

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

> ⚠️ **Authoring gotcha:** the Markdown engine is intentionally tiny. Avoid nesting triple-backtick code fences *inside* another fence. To show example `SKILL.md` or config, use a single fenced block (the content inside can contain `---`, headings, etc., just not another set of ```` ``` ````).

## Style guide

- Audience is **non-technical PMs**. Explain jargon the first time; use analogies.
- Keep lessons **short and active**. Every concept lesson should end with a quiz; every "lab" lesson should have real, do-it-now steps with checklists.
- Use `[BRACKETS]` for things learners replace (project keys, names).
- Frame UI steps **resiliently** ("In Settings → Connectors; the exact label may vary") since the product evolves.

## Pull requests

- Keep PRs focused (one lesson/topic where possible).
- Preview locally and click through your change.
- Describe *what* changed and *why* in the PR body.

Thank you! ✦
