# Lab: Brain-dump → PRD

The classic PM chore: you have a head full of half-formed ideas and need a structured PRD. Let's turn ~15 minutes of mess into a clean draft. Work in your **Claude Lab Sandbox** project if you made one.

:::lab Turn chaos into a PRD
**Outcome:** a structured product requirements doc you'd actually share, built from a messy brain-dump.

### Step 1 — Grab a brain-dump
Use your own messy notes about any feature, **or** copy this sample to practice with:

```prompt
brain dump for new thing — basically users keep losing their cart when they switch from phone to laptop. super annoying. we want carts to follow you across devices when logged in. maybe guests too? not sure. needs to be fast, no one waits. legal asked about data retention idk. mobile team is busy so maybe web first. success = fewer abandoned carts + people complaining less. oh and it should handle when the same item is added on two devices, don't double it. launch-ish next quarter, EU first because of the GDPR thing.
```

- [ ] I have a brain-dump ready (mine or the sample)

### Step 2 — Let Claude interview you first
This is the magic move. Paste your brain-dump after this prompt:

```prompt
Act as a senior PM helping me turn a messy brain-dump into a PRD. Before writing anything, read my notes and ask me up to 5 sharp clarifying questions to fill the biggest gaps. Then wait for my answers. Here are my notes: [paste brain-dump]
```

- [ ] Claude asked me clarifying questions (not just dumped a doc)
- [ ] I answered them in the same chat (make up reasonable answers for the sample)

:::tip Why this step matters
A PRD built on guesses is worthless. By forcing the interview first, you get a doc grounded in *your* reality — and you often discover gaps in your own thinking.
:::

### Step 3 — Generate the PRD
Now ask for the structured doc:

```prompt
Great. Now write a PRD using these sections: 
1) Problem & context 
2) Goals and non-goals 
3) Target users 
4) Success metrics 
5) Requirements (must-have vs nice-to-have) 
6) Key edge cases 
7) Open questions & risks 
8) Rollout approach. 
Keep it concise and skimmable. Mark anything you inferred with "(assumption)".
```

- [ ] I got a full PRD with all eight sections
- [ ] Inferred items are clearly marked as assumptions

### Step 4 — Steer it (the real skill)
Don't accept v1. Try a couple of these follow-ups:

```prompt
Tighten the success metrics so each one is specific and measurable (include a target and a timeframe). Then add an acceptance criteria list for the top 3 must-have requirements.
```

- [ ] Metrics are now measurable (numbers + timeframe)
- [ ] Top requirements have acceptance criteria

### Step 5 — Pressure-test it
Borrow the "critical reviewer" trick from the prompting lesson:

```prompt
Now switch hats: act as a skeptical engineering lead and a privacy counsel. List the 5 riskiest assumptions in this PRD and the questions you'd raise in review.
```

- [ ] I got sharp pushback I can take into my next real meeting

### Step 6 — Keep the deliverable
- [ ] If the PRD appeared as an **artifact**, edit one line directly to feel how that works
- [ ] **Copy or export** the final PRD somewhere you'll find it
:::

## Reflect

Look at what just happened: a paragraph of mush became a structured, pressure-tested PRD with measurable metrics and a risk list — in about 15 minutes. The two moves that did the heavy lifting:

1. **Interview before drafting** (clarifying questions)
2. **Iterate relentlessly** (steer the draft)

:::concept This pattern generalizes
"Mess in → interview → structured draft → iterate → pressure-test" works for *so much* PM work: strategy docs, OKRs, launch plans, postmortems, stakeholder updates. You just learned a reusable workflow, not a one-off trick.
:::

```quiz
Q: Why ask Claude to interview you before it writes the PRD?
- It's a polite formality
+ It grounds the doc in your real context and surfaces gaps, instead of building on guesses
- It makes Claude respond faster
- It's required by the app
> Garbage in, garbage out. The clarifying-questions step is what makes the output trustworthy.

Q: Claude's first PRD draft is "fine." What's the move?
- Ship it as-is
+ Steer it: tighten metrics, add acceptance criteria, pressure-test with a skeptical-reviewer prompt
- Start a brand new chat
- Switch tools
> Iteration is the skill. A few targeted follow-ups turn "fine" into "shareable."
```

:::try Module complete!
That's Module 2. Mark it complete to lock in your **🖥️ Desktop Driver** badge. Next up, the concepts that unlock the *really* powerful stuff: MCP, Connectors, Skills, and Plugins.
:::
