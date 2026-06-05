# What Is Claude Code?

Welcome to the bonus track. **Claude Code** is the developer-focused, agentic version of Claude. It's best known as a **terminal** tool — that's what we'll use here, because it works the same on every machine — but it also runs as a **desktop app**, inside **VS Code / JetBrains**, and on the **web** at claude.ai/code. And yes, it's genuinely useful for PMs too. If the word "terminal" makes you flinch, breathe: by the end of this module you'll have run it and built something real.

:::note Optional but worth it
This track is marked **Advanced**, but "advanced" here means *you'll touch a terminal*, not *you need to code*. It's still vibe coding — you describe, Claude builds.
:::

## The one-paragraph definition

**Claude Code is an AI agent that can read, write, and run files in a project — most often driven from your terminal.** You talk to it in plain English; it edits real code, builds tools, runs commands, and fixes things — checking with you along the way. It's the agentic developer tool that **Cowork** is built on and wraps in a friendly UI.

## "Wait — isn't that just Cowork?"

Close! They share the same agentic brain. The difference:

| | Cowork | Claude Code |
|---|---|---|
| Interface | Friendly app UI in Claude Desktop | The terminal (text commands) |
| Audience | Everyone, esp. non-technical | Developers (and brave PMs) |
| Sweet spot | Knowledge work on files | Building & editing software/tools |
| Vibe | "Do this job for me" | "Build/change this code with me" |

:::concept The simple way to remember it
**Cowork is Claude Code with the terminal hidden.** If you loved Cowork, Claude Code is the same power with the training wheels off — more control, a bit more raw, and the best place to build tools and plugins.
:::

## Why would a *PM* use it?

You won't live here like an engineer would, but it's a real superpower for specific moments:

- **Prototype an idea yourself.** Build a quick working mock or tool to test a concept *before* asking a team to build it. Show, don't tell.
- **One-off data jobs.** "Clean this CSV, dedupe it, and chart the top 10." Done in minutes.
- **Build Skills & Plugins.** Authoring and packaging plugins (Module 6) is most natural here.
- **Work *in* a real repo with engineers.** Make a tiny doc fix, tweak a config, or understand a codebase — without filing a ticket for everything.
- **Lose the fear.** Understanding the tool your engineers rave about makes you a sharper partner.

:::tip "Vibe coding" lives here
This is *the* place people mean when they say vibe coding. You'll literally describe a tool and watch Claude write the files, run them, and fix errors — while you steer with plain English. It feels like magic the first time. You're about to do it.
:::

## What about the terminal?

The terminal is just a **text-based way to talk to your computer** — type a command, press Enter, see a response. That's it. It looks intimidating because it's plain, not because it's hard. You'll use it for exactly one thing here: starting Claude Code and then *typing English to Claude.* Claude does the scary-looking parts.

:::warning Healthy boundaries
Claude Code can run commands and change files, so:
- Work in a **dedicated practice folder** while learning (we will).
- It **asks permission** before doing things — read the request, then approve.
- Don't paste commands you don't understand from random internet strangers. (Ours are safe and explained.)
:::

```quiz
Q: What's the clearest way to describe Claude Code vs Cowork?
+ Same agentic engine; Claude Code is in the terminal (more control, dev-focused), Cowork hides the terminal for everyone
- They're unrelated products
- Claude Code is only for writing emails
- Cowork is more powerful in every way
> Cowork = Claude Code with the terminal hidden. Code gives more control and is the best place to build tools/plugins.

Q: Which is a realistic PM reason to use Claude Code?
+ Quickly prototype a working tool yourself to test an idea before asking a team to build it
- To replace your entire engineering team
- Because chat doesn't work
- It's required for all Claude use
> Self-serve prototypes, one-off data jobs, and building plugins are great PM use cases.

Q: The terminal is best described as…
- A dangerous hacker tool
+ A text-based way to give your computer commands — plain, not hard
- A type of AI model
- Only for system administrators
> It's just type-a-command-press-enter. Here you'll mainly use it to start Claude Code and then type English.
```

:::try Let's install it
Next: a gentle, click-by-click setup and your first three commands. Nothing will explode. Promise.
:::
