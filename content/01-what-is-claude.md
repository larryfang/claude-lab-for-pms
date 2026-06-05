# Meet Claude (No Jargon)

Before we start pushing buttons, let's get a clean mental model. Five minutes here saves you hours of confusion later.

## What Claude actually is

**Claude is an AI assistant made by Anthropic.** Under the hood it's a *large language model* (LLM) — but you don't need the physics to drive the car. Here's the only mental model you need:

:::concept The "brilliant new teammate" model
Imagine a teammate who:

- has read an enormous amount of the internet, so they know a little about almost everything
- is a fantastic writer, summarizer, analyst, and explainer
- works at superhuman speed and never gets tired
- is *eager but literal* — they do exactly what you ask, so clarity matters
- starts every conversation with **no memory** of your company, your goals, or yesterday's chat — unless you tell them (or connect them to your tools)

Everything in this lab is about giving that teammate the right **context** and the right **tools**.
:::

That last point is the secret to the whole course. A new teammate is only as good as the briefing you give them. Claude on its own is a genius generalist. Claude *plus your context, your tools, and your instructions* becomes a specialist for **your** job. That's what Connectors, Skills, and Plugins do — and we'll get there.

## What it's genuinely great at (for PMs)

- **Turning mess into structure** — voice notes → PRDs, transcripts → action items, 40 tickets → one summary
- **First drafts of everything** — specs, user stories, stakeholder updates, release notes, FAQs
- **Thinking partner** — "poke holes in this plan," "what am I missing?", "argue the other side"
- **Analysis** — reading long docs, comparing options, spotting themes in feedback
- **Doing the work** (with Cowork) — not just advising, but producing the finished file

## What "vibe coding" means

You'll hear this phrase a lot. **Vibe coding** is building software (or tools, or automations) by *describing what you want in plain language* and letting the AI write the actual code. You bring the **vibe** — the intent, the taste, the judgment about whether it's right. The AI brings the syntax.

:::note Why this matters for PMs
You don't need to become an engineer. But "vibe coding" means you can now build a quick prototype, a throwaway script, a data cleanup, or a working mock — **yourself, in minutes** — to test an idea before you ask a team to build it for real. That's a superpower for a PM.
:::

You'll try real vibe coding in **Module 7 (Claude Code 101)**. For now, just know the term means: *you describe, Claude builds, you steer.*

## One thing to unlearn

Claude is **not a search engine** and **not a database of facts about you**. If you ask "what's the status of Project Atlas?" out of nowhere, it can't know — it has no access to your Jira until you connect it. When it doesn't have information, a well-prompted Claude will tell you, but it can also occasionally *guess confidently and be wrong* (this is called a "hallucination").

:::tip The fix is context
90% of "the AI gave me a bad answer" moments are really "I didn't give it enough context" moments. The rest of this lab is essentially a toolkit for feeding Claude the right context — by pasting it, uploading it, or **connecting** it.
:::

## Knowledge check

```quiz
Q: Which statement best describes how to think about Claude?
- A search engine that always returns current facts about your company
+ A brilliant, fast teammate that's only as good as the context and tools you give it
- A database that remembers everything about you across all chats forever
- A tool only software engineers can use
> Claude is a general-purpose assistant. Its usefulness for *your* work comes from the context (pasted, uploaded, or connected) and tools you provide. The rest of this lab is about exactly that.

Q: What does "vibe coding" mean?
- Writing code in a relaxed, casual mood
+ Describing what you want in plain language and letting AI write the actual code while you steer
- A type of programming language
- Coding without testing anything
> You bring the intent and judgment ("the vibe"); the AI handles the syntax. It lets non-engineers build quick prototypes and tools themselves.

Q: You ask Claude "what's blocking the payments epic?" in a brand-new chat and it makes something up. What's the most likely cause?
- Claude is broken
- You need a more expensive plan
+ Claude has no access to your Jira yet, so it lacked the context to answer
- You should never ask Claude about work
> With no connection to your tools and nothing pasted in, Claude can't know your epic status. Connect it (Module 5) or paste the context, and the answer gets real.
```

:::try Next up
Now you know *what* Claude is. Next, let's figure out *where* to use it — because there are four front doors, and picking the right one is half the battle.
:::
