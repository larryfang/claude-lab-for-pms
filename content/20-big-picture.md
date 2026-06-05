# The Big Picture

You're about to meet four buzzwords — **MCP, Connectors, Skills, Plugins** — plus **Subagents**. People mix these up *constantly*. This lesson gives you one mental model so they never confuse you again.

## The "new employee" model (this is the whole thing)

Picture Claude as a brilliant new hire on day one. Genius generalist, zero knowledge of *your* company. To make them effective, you do four things — and each maps perfectly to a Claude concept:

| You do this for a new hire… | …which in Claude is a | What it gives Claude |
|---|---|---|
| Give them a **building badge & system logins** | **Connector** | Access to your apps & data (Jira, Drive, Slack…) |
| Hand them a **playbook / SOP** for a task | **Skill** | Know-how: *how you* do a specific task |
| Give a **role-ready onboarding kit** (badges + playbooks bundled) | **Plugin** | A whole pre-packaged setup for a job |
| Let them **delegate to assistants** on a big project | **Subagents** | Parallel helpers for multi-step work |

And the thing that makes the badges and logins *physically plug in*? A universal standard called **MCP** — the "USB-C for AI." More on that next lesson.

:::concept One sentence to remember each
- **MCP** = the universal *plug standard* that lets Claude connect to outside tools.
- **Connector** = a specific *thing plugged in* (your Jira, your Google Drive) via that standard.
- **Skill** = a *written playbook* that teaches Claude how to do a task your way.
- **Plugin** = a *bundle* of skills + connectors + commands, packaged to share.
- **Subagent** = a *helper* Claude spins up to work on part of a job in parallel.
:::

## How it fits together

```text
                 ┌─────────────────────────────┐
                 │           CLAUDE            │
                 │   (the brilliant teammate)  │
                 └──────────────┬──────────────┘
                                │
        ┌───────────────┬───────┴────────┬─────────────────┐
        │               │                │                 │
   CONTEXT          SKILLS           CONNECTORS         SUBAGENTS
 (what you give   (playbooks for    (your tools &     (parallel helpers
  it: files,       doing tasks       data, plugged     for big jobs —
  instructions)    your way)         in via MCP)       mostly in Cowork)
        │               │                │
        └───────────────┴────────┬───────┘
                                  │
                            ┌─────┴─────┐
                            │  PLUGIN   │  ← bundles skills + connectors +
                            │ (a kit)   │     commands into one install
                            └───────────┘

         MCP = the universal standard underneath the Connectors layer
```

## Where you use them

Here's the reassuring part: **you use the same upgrades across Chat and Cowork.** Set up the Atlassian connector once, and it works whether you're chatting or handing Cowork a job. Build a Skill once, and it's available everywhere.

| Capability | Works in Chat | Works in Cowork | Works in Claude Code |
|---|---|---|---|
| **Skills** | ✅ | ✅ | ✅ |
| **Connectors** | ✅ | ✅ | ✅ |
| **Plugins** (the bundle) | ✅ skills/connectors | ✅ full (incl. subagents) | ✅ full |
| **Subagents & hooks** | — | ✅ | ✅ |

:::note Don't memorize the grid
The takeaway is just: **build/connect once, use everywhere.** A few advanced bits (subagents, hooks) only run in the agentic tools (Cowork & Code), which makes sense — they're for autonomous, multi-step work.
:::

## Why this matters for you

This is the leap from "Claude is a smart chatbot" to "Claude is plugged into my actual work." Connectors let it *see* your data. Skills make it do tasks *your way*. Plugins let your whole team get the setup in one click. That's the difference between a toy and a teammate.

```quiz
Q: Your teammate says "I added the Jira connector — now Claude knows how we write our sprint reports, right?"
- Yes, connectors teach Claude how you do tasks
+ Not quite — a connector gives access to the data; teaching Claude *how you do a task* is a Skill
- Connectors and skills are the same thing
- You need Claude Code for that
> Connector = access (the badge/login). Skill = know-how (the playbook). They pair beautifully, but they're different jobs.

Q: In the "new employee" model, what is a Plugin?
- The employee's badge only
+ A role-ready onboarding kit that bundles skills + connectors + commands so you get everything at once
- A faster version of Claude
- A type of file
> A Plugin packages multiple capabilities into one installable unit — perfect for giving a whole team a consistent setup.

Q: What's the role of MCP in this picture?
+ The universal "plug standard" that lets Claude connect to outside tools and data
- A subscription tier
- A specific app like Jira
- A writing style
> MCP is the standard underneath connectors — the USB-C port that any compatible tool can plug into.
```

:::try Go deeper
That's the map. Now let's zoom into the foundation everything rests on — **MCP** — because once you get it, the whole ecosystem makes sense.
:::
