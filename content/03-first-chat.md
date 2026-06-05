# Lab: Your First Real Chat

Time to drive. This lab takes ~10 minutes and proves, hands-on, what Claude can do. Keep Claude Desktop open beside this window.

:::warning Do this for real
Don't just read the prompts — actually paste them into Claude Desktop and watch what happens. Tick the boxes as you go; they save automatically.
:::

:::lab Warm-up: three prompts that show what's possible
**Goal:** get comfortable typing to Claude and see three different *modes* — explain, create, and refine.

### Step 1 — Open a fresh chat
- [ ] Open **Claude Desktop**
- [ ] Start a **new chat** (look for "New chat" or a `＋` near the top of the sidebar)
- [ ] Notice the message box at the bottom — that's your command line for words

### Step 2 — The "explain it to me" prompt
Paste this and send it:

```prompt
Explain the difference between a product "output" and an "outcome" to me like I'm a brand-new PM. Use one concrete example from a food delivery app. Keep it under 120 words.
```

- [ ] I got a short, clear explanation with an example

Notice three things you asked for and *got*: a **role** ("brand-new PM"), a **constraint** ("under 120 words"), and a **concrete example**. That specificity is why the answer was good.

### Step 3 — The "make me something" prompt
Now let's create. Paste this:

```prompt
I'm a PM. Draft 5 user stories for a feature that lets users save a delivery order as a "favorite" so they can reorder in one tap. Use the format: "As a [user], I want [goal], so that [benefit]." Then add 2 edge cases I should consider.
```

- [ ] I got 5 formatted user stories plus 2 edge cases

### Step 4 — The "now refine it" prompt (the real skill)
Here's the most important habit in this whole lab: **you don't accept the first answer — you steer.** Reply in the *same chat*:

```prompt
Good start. Rewrite story #1 to be more measurable, make the tone less formal, and add an acceptance criterion for each story.
```

- [ ] The output changed based on my feedback, in the same conversation
:::

:::concept The loop you just learned
Every great Claude session is a **loop**, not a single shot:

> **Ask → read → steer → repeat.**

Claude remembers everything *within a single chat*, so each message builds on the last. Treat it like a conversation with a teammate, not a vending machine.
:::

:::lab Bonus: feed it a file
If you have any work doc handy (a PRD, a transcript, a spreadsheet, a PDF), try this:

- [ ] Click the **attach / paperclip** icon (or drag a file into the chat)
- [ ] Attach one document
- [ ] Send this prompt:

```prompt
Summarize the attached document in 5 bullet points, then list any open questions or risks you noticed. Flag anything that looks contradictory.
```

- [ ] Claude summarized my actual file
:::

:::tip If you don't have a file
No worries — paste a few paragraphs of any text directly into the chat and ask the same thing. Pasting *is* giving context.
:::

## Reflect for 30 seconds

You just did three of the four things Claude is best at — explain, create, refine — plus analysis if you tried the file. Notice how much of the quality came from **how you asked**. That's the entire skill of "prompting," and we'll level it up properly in Module 2.

```quiz
Q: What's the single most important habit from this lab?
- Accept the first answer to save time
+ Treat it as a loop: ask, read, steer, repeat — within one chat
- Always start a new chat for each message
- Only use Claude for writing emails
> Claude remembers context within a chat. Steering across turns is where the real quality comes from.
```

:::try You're rolling
You've had a real conversation with Claude and made it produce useful work. Mark this lesson complete (button below) to earn your **🐣 First Steps** badge, then head into Module 2 to make the Desktop app feel like home.
:::
