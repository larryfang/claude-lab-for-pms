# Prompting That Gets Results

A "prompt" is just your message to Claude. Better prompts → dramatically better output. The good news: there's a simple, memorable recipe, and you already used pieces of it in your first lab.

## The C.R.A.F.T. recipe

For anything beyond a trivial question, include these five ingredients. Not every prompt needs all five, but the more important the task, the more you'll want.

| Letter | Ingredient | Example |
|---|---|---|
| **C** | **Context** — the background & why | "We're a B2B SaaS launching in the EU next quarter…" |
| **R** | **Role** — who Claude should be | "Act as a skeptical security reviewer…" |
| **A** | **Ask** — the specific task (use a verb) | "Draft…", "Compare…", "Summarize…", "Critique…" |
| **F** | **Format** — how the output should look | "As a table with columns X, Y, Z" / "5 bullets, under 150 words" |
| **T** | **Tone & Target** — voice + audience | "Plain English for execs; confident, not salesy" |

:::concept The secret sixth ingredient
**Iteration.** The first answer is a *draft*, not a verdict. The pros get great output by steering: *"shorter,"* *"more skeptical,"* *"add a risks section,"* *"now turn it into a Slack message."* You learned this loop in Module 1 — it's worth repeating because it's the whole game.
:::

## From "meh" to magic

Watch the same request improve as we add C.R.A.F.T.:

:::note ❌ Vague
> "write something about our new feature"

You'll get generic filler — Claude has no idea what the feature is, who it's for, or what you need.
:::

:::tip ✅ Crafted
```prompt
Context: We're shipping "1-tap reorder" for our food-delivery app next month — users can save a past order as a favorite and reorder in one tap. Audience is busy commuters.

Role: Act as a senior product marketer.

Ask: Write release-note copy announcing this feature.

Format: A punchy 1-sentence headline + 3 short benefit bullets + a 1-line CTA.

Tone: Friendly, energetic, no jargon.
```
This gives you something you could almost ship.
:::

You don't need to literally label "Context / Role / Ask" every time (though it's a great habit for important prompts). Once it's muscle memory, you'll just naturally include the ingredients.

## Three power-ups for hard tasks

:::concept Level-up techniques
1. **Show an example (a.k.a. "few-shot").** Paste one example of the output you want. "Here's a user story I like: […]. Write 5 more in that exact style." Examples are worth a thousand adjectives.
2. **Ask Claude to ask *you* questions.** End with: *"Before you answer, ask me up to 3 questions if anything is unclear."* This catches wrong assumptions before they cost you.
3. **Invite reasoning for complex problems.** *"Think through the trade-offs step by step before giving your recommendation."* For genuinely hard analysis, this noticeably improves quality.
:::

## Four PM recipes to steal

```prompt
Act as a critical product reviewer. Here is my feature one-pager: [paste]. Poke holes in it: list the 5 weakest assumptions, what could cause it to fail, and 3 questions a skeptical exec would ask. Be direct.
```

```prompt
Turn the following raw meeting transcript into: (1) a 4-bullet summary, (2) a table of decisions, (3) action items with owners and due dates if mentioned. Transcript: [paste]
```

```prompt
I have 30 pieces of customer feedback below. Cluster them into themes, count how many fall in each theme, and surface 3 surprising or contradictory signals. Then suggest the single highest-impact thing to fix. Feedback: [paste]
```

```prompt
Act as my exec-comms editor. Rewrite this update for our VP: cut it by half, lead with the outcome, flag risks clearly, and keep it confident but honest. Original: [paste]
```

:::tip Save the ones you love
When a prompt works beautifully and you'll reuse it, that's a signal it should become a **Skill** (Module 6). Hold that thought — you'll turn one of these into a reusable Skill later.
:::

```quiz
Q: A teammate's prompt is "make this better." What's the highest-impact fix?
- Switch to a more expensive model
+ Add C.R.A.F.T. ingredients — especially Context, the Ask (what "better" means), and Format
- Send it twice
- Use Claude Code instead
> "Better" is undefined. Tell Claude the context, the specific change you want, and the format. Specificity is the lever.

Q: Which technique best prevents Claude from running off with a wrong assumption?
- Using all caps
+ Asking it to ask you clarifying questions before answering
- Making the prompt as short as possible
- Starting a new chat
> "Ask me up to 3 questions first" surfaces ambiguity before it becomes a bad answer.

Q: You got a decent first draft. What do the pros do next?
+ Iterate — steer it with follow-ups like "shorter," "add risks," "more skeptical"
- Accept it as final
- Delete the chat and start over
- Paste it into a doc unchanged
> The first answer is a draft. Iteration in the same chat is where great output comes from.
```

:::try Put it all together
You've got the recipe. Time for a proper lab: turn a messy brain-dump into a polished PRD. This is the kind of thing that used to take an afternoon.
:::
