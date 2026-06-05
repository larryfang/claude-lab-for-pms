# What Is MCP?

**MCP** stands for **Model Context Protocol**. It's the single most important piece of plumbing in modern AI — and the most over-complicated in most explanations. Let's fix that.

## The problem MCP solves

Imagine every electronic device needing a *different* charger. Phone, laptop, headphones, camera — all different plugs. Chaos. Then **USB-C** arrived: one standard port, and suddenly everything connects to everything.

AI had the same chaos. Every AI app needed a *custom-built* integration for every tool — one for Slack, another for Jira, another for Google Drive, times every AI product. An `N × M` nightmare nobody could maintain.

:::concept MCP in one line
**MCP is "USB-C for AI" — one open standard so any AI app can connect to any tool or data source without custom glue code.**
:::

Anthropic introduced MCP as an **open standard**, and the industry adopted it fast. Today a huge ecosystem of tools "speak MCP," which is why you can connect Claude to Jira, GitHub, your database, or hundreds of other services with a click instead of a software project.

## The three pieces (you only need the gist)

MCP has a simple shape. Don't worry — you won't be quizzed on the protocol; you just need the vocabulary so the rest of the lab clicks.

- **Host** — the AI app you're using. *Claude Desktop and Claude Code are MCP hosts.*
- **Server** — the thing that exposes a tool or data. *An "Atlassian MCP server" exposes Jira & Confluence. A "filesystem server" exposes files.*
- **Client** — the connector inside the host that talks to one server. (The host quietly creates one per server. You'll never think about this again.)

```text
   ┌──────────────────────┐        speaks MCP        ┌─────────────────────┐
   │   HOST (Claude)      │ ───────────────────────▶ │   SERVER (Jira)     │
   │  Claude Desktop /    │ ◀─────────────────────── │  exposes tools &    │
   │  Claude Code         │     "here are my tools"   │  data over MCP      │
   └──────────────────────┘                           └─────────────────────┘
```

## Local vs. remote servers

Two flavors, and the difference is intuitive:

| Type | Runs where | Example | You set it up by… |
|---|---|---|---|
| **Local** | On your own computer | A "filesystem" server that reads your folders | Pointing Claude at a small program |
| **Remote** | On the provider's servers | The Atlassian server, run by Atlassian | Authorizing with a login (OAuth) |

:::tip This is the good news for non-techies
**Most MCP servers you'll care about are *remote* and dressed up as "Connectors."** That means setup is usually just: click "Add," log in, approve. No code, no config files. MCP is the engine; **a Connector is the friendly steering wheel.** You'll do exactly this in Module 5 with Atlassian.

(Heads-up: connecting to remote services needs a **paid Claude plan**; free accounts get just a single custom connector.)
:::

## What a server can offer

When Claude connects to an MCP server, the server advertises what it can do. Mostly that's **tools** (actions Claude can take, like "search Jira issues" or "create a Confluence page") and **resources** (data it can read) — and sometimes **prompts** (ready-made templates). You don't configure these — Claude discovers them automatically and uses the right one when relevant.

## Why you should care

- **Reach:** Claude stops being a closed box and can act on *your* real systems.
- **Choice:** because MCP is an open standard, you're not locked in — thousands of servers exist, and the same connector often works across different AI apps.
- **Safety by design:** connections are explicit and permissioned. Claude can only touch what you authorize (much more on this in Module 5).

:::note You will rarely "do MCP" by hand
As a PM, you'll almost always interact with MCP through **Connectors** and **Plugins** — the polished, click-to-install layer on top. Knowing the word "MCP" mostly helps you *understand what's happening* and talk to your engineers. The one time you might touch it directly is an "advanced" connector setup, which we'll show (optionally) in the Atlassian lab.
:::

```quiz
Q: What's the best one-line description of MCP?
- A subscription plan for Claude
+ An open standard — "USB-C for AI" — that lets any AI app connect to any tool or data source
- A programming language for AI
- A type of Claude model
> MCP is the universal connection standard. It's why connecting Claude to your tools is a click instead of a custom software project.

Q: In MCP terms, Claude Desktop and an "Atlassian server" are, respectively, the…
+ host and the server
- server and the host
- client and the plugin
- skill and the connector
> The host (Claude) connects to servers (which expose tools/data). The Atlassian server exposes Jira & Confluence.

Q: As a non-technical PM, how will you usually set up an MCP connection?
- By writing code
+ Through a "Connector" — click Add, log in, approve. MCP is the engine; the Connector is the steering wheel
- You can't; only engineers can
- By emailing Anthropic
> Remote servers show up as friendly Connectors. Setup is typically a login + approval, no code required.
```

:::try Next
You've got the foundation. Now let's nail the four words people mix up the most — Connectors, Skills, Plugins, and Subagents — with a clean analogy for each.
:::
