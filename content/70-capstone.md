# Capstone: Backlog → Board Update

This is the boss level. You'll combine **a connector + a skill + Cowork** to take live Jira data all the way to a polished, multi-audience stakeholder update — the kind of thing that used to eat half a morning. ~30 minutes. Let's make you dangerous.

:::concept What you're proving
That you can chain Claude's powers together: **pull real data → apply your house style → produce a finished deliverable → (optionally) schedule it.** This is the workflow that makes colleagues ask "wait, how did you do that so fast?"
:::

## Pre-flight check

:::lab You'll get the most from this if you have…
- [ ] The **Atlassian connector** working (Module 5) — *or* some sample Jira-like notes to paste
- [ ] Your **`weekly-status-update` skill** installed (Module 6)
- [ ] **Cowork** available (Module 4), and an empty **output folder** (e.g. `Capstone-Output`)
:::

:::note No Atlassian? You can still do this.
Anywhere a step says "pull from Jira," instead paste this sample data:

```text
Project PAY — Sprint 24 (this week)
DONE: PAY-101 1-tap reorder shipped; PAY-104 fix duplicate-cart bug; PAY-110 add Apple Pay (beta)
IN PROGRESS: PAY-112 Android payments stability (owner: Sam, ETA Thu); PAY-118 search v1 (owner: Mei)
BLOCKED: PAY-120 vendor rate limits — waiting on vendor (owner: Mei)
NEXT: PAY-118 search v1; PAY-125 saved addresses; tech debt cleanup
Metrics: cart abandonment 18% → 14%; checkout p95 latency 2.1s → 1.6s
```
:::

## Part 1 — Pull the live data (connector)

:::lab Get the raw picture
In a chat, ask Claude to gather the sprint reality (or paste the sample above):

```prompt
Using my Atlassian connection, pull the current sprint for project [YOUR-PROJECT-KEY]: issues by status with owners, anything blocked, and any sprint metrics you can find. Give me the raw facts in a tidy list — no formatting polish yet.
```

- [ ] I have the raw sprint facts (from Jira or the sample)
:::

## Part 2 — Apply your Skill (house style)

:::lab Turn facts into your update
```prompt
Now use my weekly-status-update skill to turn those facts into our leadership status update. If anything important is missing, ask me first.
```

- [ ] The output matches **my skill's template and style**
- [ ] It asked about anything genuinely missing
:::

## Part 3 — Tailor for two audiences

Great PMs right-size the message. Ask for variants:

:::lab One message, three shapes
```prompt
From that update, create three versions:
1) An EXEC version: 5 bullets, outcomes and risks only, no jargon.
2) A TEAM version: a friendly Slack message celebrating wins and flagging blockers with owners.
3) A ONE-LINER for a status channel.
```

- [ ] I got exec, team, and one-liner versions
:::

## Part 4 — Produce a real deliverable (Cowork)

Now hand it to **Cowork** to create finished files in your output folder.

:::lab Ship the artifacts
Point Cowork at your `Capstone-Output` folder and give it this:

```prompt
Act as my comms assistant. In this folder, create:
1) "stakeholder-update.md" — the full leadership status update (formatted, with headings).
2) "exec-summary.md" — the 5-bullet exec version.
3) "slack-post.txt" — the friendly team message.
Then create "README.md" that explains what each file is and when I'd use it. Show me your plan first.
```

- [ ] Cowork showed a plan, then created the files
- [ ] I opened `stakeholder-update.md` and it's genuinely shareable
:::

:::note No Cowork? Do it by hand
No paid plan or no Cowork yet? Ask Claude in a normal chat to produce each document's contents, then paste them into files yourself. Same deliverables — just with a copy-paste step instead of the agent writing them for you.
:::

:::tip Push it further (optional)
- Ask Cowork to also produce a **slide outline** (or a simple `.pptx`) for the sprint review.
- If you have the **Google Drive** connector, ask it to drop the update into a Drive doc.
- Ask Claude to draft the **Confluence page** (the write-action workflow from Module 5).
:::

## Part 5 — Automate it (optional)

:::lab Make it recurring
- [ ] Create a **scheduled Cowork task**: *"Every Friday 3pm, regenerate this week's stakeholder update from Jira using my weekly-status-update skill, and save the files in Capstone-Output."*
- [ ] Confirm it's scheduled (then delete it if you don't want it running)
:::

## Success criteria

You've completed the capstone if you can say yes to these:

- [ ] I pulled **real (or realistic) data** without manual copy-paste drudgery
- [ ] My **Skill** shaped it into our house style automatically
- [ ] I produced **multiple audience-tailored** outputs from one source
- [ ] **Cowork** created **finished files** in a folder
- [ ] I understand how to **schedule** this to run itself

:::concept Look what you just did
You connected a tool, taught Claude your style, and directed an agent to produce real deliverables — chaining four modules into one workflow. That's not "using a chatbot." That's **building leverage.** Most people never get here. You did.
:::

```quiz
Q: The capstone chained which capabilities together?
+ A connector (data) + a skill (your style) + Cowork (finished deliverables), optionally scheduled
- Just one long chat message
- Only Claude Code
- Only the prompt library
> Pull → shape with your skill → produce deliverables → optionally automate. That's the whole leverage stack.

Q: What's the strategic point of making audience-tailored versions from one source?
+ One set of facts, right-sized for execs, team, and channels — fast, consistent messaging
- To make more work for yourself
- Because Claude can't summarize
- It's required by Jira
> Retargeting one truth for multiple audiences is core PM communication — and now it's a 30-second step.
```

:::try Bring it home
Mark this complete for your **🏆 Capstone Champion** badge (and, if you've finished everything, the **💯 Completionist** badge — confetti incoming). One short lesson left: making this stick.
:::
