# Context Is the Whole Game

If you remember one thing from this course, make it this lesson. **Managing context is *the* skill** of working with Claude Code. Every other technique — CLAUDE.md, plan mode, subagents — exists to serve it.

## The constraint, restated

Claude's **context window** holds the entire session: your messages, every file it reads, every command's output. It's large, but it **fills fast** — a single debugging spree can burn tens of thousands of tokens. And here's the catch:

:::warning Performance degrades as context fills
As the window gets full, Claude starts **"forgetting" earlier instructions** and making more mistakes — sometimes called *context rot*. A bloated context doesn't just cost tokens; it makes Claude **dumber** for the rest of the session.
:::

## What eats your context

- **Reading files** — especially "read the whole `src/` folder" sprawl
- **Command output** — a noisy test run or a giant log dumped into the chat
- **Long meandering conversations** — ten tangents in one session
- **An over-stuffed CLAUDE.md** loaded on every turn (next lesson)

## The prime directive

> **Keep the working context small and relevant.** Give Claude exactly what the current task needs — no more.

Counterintuitive but true: a **fresh session with a sharp prompt** almost always beats a long session full of accumulated detours.

## Your context toolkit (preview)

You'll learn each of these in the next lessons; here's the map so the pieces connect:

| Tactic | What it does |
|---|---|
| **Precise prompts + `@file`** | Pull in *specific* files, not the whole repo |
| **A tight `CLAUDE.md`** | Persistent, broadly-useful context — kept short |
| **Subagents for investigation** | Research in a *separate* window; only a summary returns |
| **`/clear`** | Wipe context between unrelated tasks |
| **`/compact`** | Summarize a long session to reclaim space |
| **`/rewind`** | Roll back to a clean checkpoint |

:::tip See it filling
Run `/context` to see what's currently occupying the window, and consider a status line that tracks token usage continuously. You can't manage what you can't see — and once you *watch* a session fill up, this all becomes second nature.
:::

```quiz
Q: Why is a long, multi-topic session a problem?
+ As context fills, Claude forgets earlier instructions and makes more mistakes — quality degrades
- It costs slightly more money but works the same
- Long sessions are actually always better
- The terminal runs out of space
> "Context rot": a full window degrades reasoning. Keep context small and relevant; clear between unrelated tasks.

Q: Which is usually the better move?
- Keep one giant session running all day across many tasks
+ Use fresh, focused sessions with sharp prompts; clear or compact when the window fills
- Never read any files
- Paste your entire codebase up front
> A clean session with a good prompt beats a polluted one. Feed only what the task needs.

Q: What's the single highest-leverage idea behind nearly every Claude Code best practice?
+ Manage the context window — it's the fundamental constraint
- Use the most expensive model
- Type faster
- Disable permissions
> Everything — CLAUDE.md, plan mode, subagents — is in service of keeping context focused.
```

:::try Next
The number-one tool for giving Claude *persistent, broadly-useful* context — without bloating every turn — is `CLAUDE.md`. Let's master it.
:::
