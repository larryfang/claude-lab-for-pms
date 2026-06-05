# PM Prompt Library

Copy-paste starting points for the work PMs actually do. Hit **Copy**, paste into Claude, and swap the `[brackets]` for your details. Then steer.

:::tip How to use these
These are *scaffolds*, not magic spells. The real quality comes from adding your **context** and **iterating** (Module 2). Treat every prompt as draft v1.
:::

## ✍️ Writing & communication

```prompt
Act as my exec-comms editor. Rewrite the text below for [audience, e.g. our VP of Product]: cut it by ~40%, lead with the outcome, make risks explicit, keep it confident but honest. Then give me a 1-line TL;DR. Text: [paste]
```

```prompt
Draft release notes for this feature: [describe]. Give me (1) a punchy headline, (2) 3 benefit-led bullets, (3) a one-line CTA. Tone: friendly, no jargon. Audience: [end users / customers].
```

```prompt
Turn these rough thoughts into a clear, well-structured email to [recipient] with a clear ask and next step. Keep it under 150 words. Thoughts: [paste]
```

## 🔎 Analysis & synthesis

```prompt
Here is [customer feedback / survey responses / support tickets] below. Cluster into themes, count each theme, surface 3 surprising or contradictory signals, and recommend the single highest-impact thing to address. Data: [paste]
```

```prompt
Summarize the attached document in 5 bullets, list the key decisions, the open questions, and anything that looks contradictory or risky. [attach file]
```

```prompt
Compare these options across criteria that matter for [goal]. Build a table (options as rows, criteria as columns), then give a recommendation with the top reason and the biggest risk. Options: [paste]
```

## 🧭 Planning & strategy

```prompt
Act as a senior PM. Help me turn this messy brain-dump into a structured PRD with: problem & context, goals/non-goals, target users, success metrics, requirements (must vs nice-to-have), edge cases, risks, and rollout. Ask me up to 5 clarifying questions first. Notes: [paste]
```

```prompt
Draft OKRs for [team/quarter]. Objective should be inspiring and qualitative; 3 key results should be measurable with targets. Then flag any KR that's an output rather than an outcome. Context: [paste]
```

```prompt
I'm deciding between [option A] and [option B] for [decision]. Argue both sides honestly, list the key trade-offs, name what would change my mind, and give a recommendation. Context: [paste]
```

## 🗣️ Meetings & stand-ups

```prompt
Turn this raw meeting transcript into: (1) a 4-bullet summary, (2) a table of decisions, (3) action items with owners and due dates where mentioned, (4) open questions. Transcript: [paste]
```

```prompt
Prep me for [meeting] with [who]. Given the context below, give me: the 3 outcomes I should aim for, likely objections and my responses, and 3 sharp questions to ask. Context: [paste]
```

## 🔌 Jira / Confluence (connector)

```prompt
Using my Atlassian connection, summarize the active sprint for [PROJECT-KEY]: a one-paragraph status, a table of issues by status with assignee, anything blocked, and 3 talking points for sprint review.
```

```prompt
Using Jira, give a health check on epic [EPIC-KEY]: % complete, what's left, oldest unresolved item, blockers, a RAG status with justification, and a 3-sentence stakeholder blurb.
```

```prompt
Using Jira, list my In-Progress issues in [PROJECT-KEY] updated in the last 3 days and draft my stand-up talking points, ending with blockers to raise.
```

## 🧪 Critique & red-teaming

```prompt
Act as a skeptical [engineering lead / security reviewer / privacy counsel]. Read my plan below and list the 5 weakest assumptions, what could make it fail, and the toughest questions you'd ask in review. Be direct. Plan: [paste]
```

```prompt
Pre-mortem this launch: it's 6 months later and it failed. Give the 6 most likely reasons, ranked, and one mitigation for each. Launch: [describe]
```

## 🤖 Cowork jobs (describe the outcome)

```prompt
Organize this folder into sensible subfolders, then create FOLDER-SUMMARY.md with an overview, a file-by-file table, the top themes you found, and 3 recommended actions. Show me your plan first.
```

```prompt
Read every file in this folder of [interviews/reports], then produce a synthesized insights report (Word doc) with themes, supporting quotes, and recommendations. Coordinate subagents if it's faster.
```

```prompt
Build a spreadsheet that tracks the items in [source] with columns for status, owner, priority, and next step, then write a 4-sentence Slack summary of the current state.
```

## 📚 Learning & understanding

```prompt
Explain [concept] to me like I'm a new PM, with one concrete example from [my industry]. Then give me 3 questions I could ask to sound informed in a meeting about it.
```

```prompt
I'm about to talk to engineers about [technical topic]. Give me a 5-minute primer: what it is, why it matters for the product, the 3 terms I must know, and the 2 questions I should ask.
```

:::tip The meta move
When you find a prompt here you use again and again, that's your cue: turn it into a **Skill** (Module 6) so you never have to paste it again.
:::
