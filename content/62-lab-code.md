# Lab: Your First Code Task

Let's vibe-code a **real, usable tool**: a feature-prioritization (RICE) calculator that runs in your browser. You'll describe it; Claude Code will build it. No coding knowledge needed — just steering.

:::note Where to work
Use the `claude-code-lab` folder from the last lesson. In your terminal, make sure you're inside it (`cd claude-code-lab`) and start Claude with `claude` if it isn't already running.
:::

## What we're building

A single web page where you enter features and their **R**each, **I**mpact, **C**onfidence, and **E**ffort, and it computes and ranks the RICE score. Genuinely handy for real prioritization meetings.

## Step 1 — Describe the tool (vibe coding!)

:::lab Ask Claude Code to build it
Paste this into Claude Code and press Enter:

```prompt
Build a single self-contained file called index.html (all HTML, CSS, and JavaScript inline — no external dependencies) that is a RICE prioritization calculator for product managers.

Requirements:
- A table where I can add rows for features. Columns: Feature name, Reach, Impact, Confidence (%), Effort (person-weeks), and an auto-calculated RICE score = (Reach × Impact × Confidence%) / Effort.
- An "Add feature" button to add rows, and a delete button per row.
- Automatically sort features by RICE score (highest first) and show rank.
- Clean, modern, friendly design. Mobile-friendly.
- Start with 3 example rows pre-filled so I can see how it works.

After creating it, tell me how to open it.
```

- [ ] Claude planned and **created `index.html`** (it asked permission to write — I approved)
- [ ] It told me how to open the file
:::

## Step 2 — Open your creation

:::lab See it run
- [ ] Open the `claude-code-lab` folder in your file explorer (Finder/Explorer)
- [ ] **Double-click `index.html`** — it opens in your browser
- [ ] Try it: change some numbers, add a feature, delete a row, watch the ranking update
:::

:::tip Pause and appreciate this
You just *built working software* by describing it in English. No framework, no copying Stack Overflow, no ticket. That's the vibe-coding superpower — and exactly how you can prototype an idea before asking a team to build the real thing.
:::

## Step 3 — Steer it (the usual loop)

Don't stop at v1. Back in Claude Code, try a few of these (one at a time):

```prompt
Make it look more polished: add a header with a title and short instructions, use nicer colors, and make the highest-ranked row visually stand out.
```

```prompt
Add a button that exports the current table to a CSV file I can open in Excel.
```

```prompt
Add a "notes" column for each feature, and let me save my data so it's still there when I reload the page.
```

- [ ] I asked for at least **two** changes and reopened/refreshed to see them
- [ ] Something I requested is now in my tool

## Step 4 — Understand what happened (optional)

:::lab Ask Claude to explain its own work
```prompt
In plain English for a non-technical PM, explain how this index.html works in 5 bullet points. What is the HTML doing vs the CSS vs the JavaScript?
```

- [ ] I got a beginner-friendly explanation of my own tool
:::

## Reflect

In ~20 minutes you installed a developer tool, built a working app by describing it, and iterated on it like a PM — all in plain English. The loop was *identical* to everything else in this lab:

:::concept The same loop, everywhere
> **Describe what you want → review → steer → repeat.**

Chat, Cowork, Claude Code — same muscle. The only thing that changed is how much Claude can *do* on your behalf. You now have the full range.
:::

:::tip Where to take this
- Prototype a quick UI mock to align stakeholders before a build.
- Make a tiny internal tool (a calculator, a checklist generator, a data cleaner).
- Pair with an engineer in a real repo to make small fixes yourself.
- Build & package the **plugin** you designed in Module 6.
:::

```quiz
Q: What did "building" the RICE tool actually require from you?
+ Describing what you wanted clearly and steering the result — no coding knowledge
- Memorizing JavaScript
- A computer science degree
- Writing the HTML yourself
> That's vibe coding: you bring intent and judgment; Claude writes the code. You steer to "right."

Q: The core loop in Claude Code is…
+ The same as everywhere: describe → review → steer → repeat
- Completely different from chat and Cowork
- Only for fixing bugs
- Memorizing commands
> Same muscle across all three tools — only the amount Claude can do for you changes.
```

:::try Module complete!
You vibe-coded a working tool and survived the terminal. Mark it done for your **⌨️ Code Curious** badge. One module left — the **Capstone**, where you combine everything into a single, real workflow.
:::
