# Connectors · Skills · Plugins · Subagents

These four words appear everywhere and trip up everyone. After this lesson you'll explain them better than most people on the internet. We'll give each a one-word analogy, then compare them side by side.

## 🔌 Connectors — "the badge & logins"

**What:** a link between Claude and an external app or data source (built on MCP). It lets Claude **read your data** and **take actions** in that service — after you authorize it.

**Examples:** Atlassian (Jira/Confluence), Google Drive, Gmail, Slack, GitHub, Notion, your CRM.

**Use it when:** you want Claude to work with *your actual stuff*. "Summarize my open Jira tickets." "Find the contract in Drive and pull the renewal date."

> Mental model: a connector is the building **badge and system login** you give the new hire. It's about **access**.

## 🛠️ Skills — "the playbook"

**What:** a reusable set of instructions that teaches Claude how to do a **specific task your way**. Technically, a Skill is just a folder with a `SKILL.md` file (plain text!). Claude reads it *only when relevant*, so you can have many without slowing things down.

**Examples:** a "brand-voice" skill for external comms; a "sprint-report" skill that formats updates exactly how your team likes; a "PRD template" skill.

**Use it when:** you do a task **repeatedly** and want consistent, on-brand results without re-explaining every time.

> Mental model: a skill is the **standard operating procedure (SOP)** you hand the new hire. It's about **know-how**.

## 📦 Plugins — "the onboarding kit"

**What:** a **bundle** that packages multiple Skills, Connectors, slash-commands, and (for agentic use) subagents into one installable unit. Install one plugin and get a whole role-ready setup.

**Examples:** a "Sales" plugin (CRM connector + prospecting skills + `/prospect-research` command); a "Knowledge Work" plugin set that Anthropic ships by default.

**Use it when:** you want a **complete, shareable setup** for a role or team — so everyone gets consistent capabilities in one click.

> Mental model: a plugin is the **pre-packed onboarding kit** — badges *and* playbooks *and* shortcuts, bundled. It's about **distribution**.

## 👥 Subagents — "the assistants"

**What:** helper agents that Claude spins up to tackle **parts of a big job in parallel**. While one drafts a report, another can be doing competitive research. They mostly appear in the **agentic** tools — **Cowork** and **Claude Code** — not in plain chat.

**Examples:** during a Cowork task, one subagent organizes files while another writes the summary; in a research job, several subagents investigate different sources at once.

**Use it when:** (mostly automatic) you give Cowork a large multi-step task and it decides to divide and conquer.

> Mental model: subagents are the **junior assistants** your new hire delegates to on a big project. It's about **parallelism**.

## Side by side

| | 🔌 Connector | 🛠️ Skill | 📦 Plugin | 👥 Subagent |
|---|---|---|---|---|
| **In one word** | Access | Know-how | Bundle | Delegation |
| **Gives Claude…** | Your data & actions | How to do a task | A whole setup | Parallel helpers |
| **You make it by…** | Authorizing (log in) | Writing a `SKILL.md` | Packaging skills+connectors | (Claude does it) |
| **Built on MCP?** | Yes | No (it's instructions) | Can bundle MCP connectors | No |
| **Where it runs** | Chat, Cowork, Code | Chat, Cowork, Code | Everywhere (full power in Cowork/Code) | Cowork, Code |
| **Analogy** | Badge & logins | SOP / playbook | Onboarding kit | Junior assistants |

## The confusions to retire

:::warning Three myths to bust
1. **"Connector = Skill."** No. A connector gives **access**; a skill gives **know-how**. The Atlassian *connector* lets Claude read Jira; a *skill* tells Claude how *your team* writes a sprint report from it.
2. **"A plugin is one feature."** No — a plugin is a **bundle**. It can contain several skills *and* connectors *and* commands at once.
3. **"Subagents are something I configure for every chat."** No — they're for **autonomous, multi-step** work in Cowork/Code, and largely happen on their own.
:::

:::tip How they team up (the dream combo)
The Atlassian **connector** gives access to Jira → a **skill** tells Claude exactly how you format a sprint report → wrap both (plus a `/sprint-report` command) into a **plugin** → share it so your whole team runs the same workflow in one click. That's the arc of Modules 5 and 6.
:::

```quiz
Q: You want Claude to read your team's Jira issues. You need a…
+ Connector
- Skill
- Subagent
- New model
> Reading external data = access = a connector (the Atlassian one). A skill would then teach Claude *how* to use that data your way.

Q: You keep re-explaining your exact format for release notes. The fix is to…
- Add a connector
+ Create a Skill that captures your release-notes format once
- Buy a plugin from another company
- Use a faster model
> A repeated "do it *this* way" task = a Skill. Write the playbook once; Claude follows it every time.

Q: Which is the bundle that can contain skills, connectors, and commands together?
- A subagent
- A connector
+ A plugin
- An artifact
> A plugin packages multiple capabilities so a whole team gets a consistent, one-click setup.

Q: Subagents mainly show up in…
- Plain web chat
+ The agentic tools — Cowork and Claude Code — for parallel, multi-step work
- The Settings menu
- Email
> Subagents are about dividing big autonomous jobs. That's Cowork/Code territory, not turn-by-turn chat.
```

:::try Almost there
You can now out-explain the internet. Last concept stop: **where you actually find and install** all of this — the Directory and marketplaces.
:::
