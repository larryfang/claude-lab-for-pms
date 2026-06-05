# How Connectors Work (Safely)

Connectors are where Claude stops being a clever stranger and starts working with *your* actual data. Because that's powerful, let's understand exactly how it works — and how it stays safe — before we connect anything.

## What a connector really is

Remember from Module 3: a **connector** is a link between Claude and an external service, built on **MCP**. Most useful ones are **remote MCP servers** run by the provider themselves (Atlassian runs the Atlassian one, Google runs Drive, etc.).

When connected, Claude can:

- **Read** your data ("find issues assigned to me", "get this Confluence page")
- **Take actions** ("create a ticket", "add a comment", "draft a page")

…but only the specific things that service exposes, and only what **your account is allowed to do**.

## The trust model (the important bit)

:::concept Connectors respect *your* existing permissions
A connector doesn't give Claude god-mode. It acts **as you**, through your authenticated account. If you can't see a private Jira project, neither can Claude. Your existing permissions and access controls still apply — the connector works *within* them.
:::

How authorization happens, step by step:

1. You add the connector and click **Connect**.
2. A secure **OAuth** login opens in your browser — you log into the service (e.g. Atlassian) as yourself.
3. You **review and approve** the access being requested.
4. Claude gets a scoped token to act on your behalf. **No passwords are stored in Claude.**

```text
   You ──login (OAuth)──▶ Service (Atlassian/Google/…)
     ▲                          │
     │   "approve access?"      │ issues a scoped token
     └──────────────────────────┘
   Claude then uses that token to act AS YOU, within your permissions.
```

## What Claude can and can't do

| ✅ Can | ❌ Can't |
|---|---|
| See data your account can already see | See data you don't have access to |
| Take actions you're allowed to take | Bypass your org's permissions |
| Be disconnected/revoked any time | Keep access after you revoke it |
| Ask before destructive actions (good practice) | Secretly store your password |

:::warning Healthy caution
- **Review permissions** when you connect — know what you're granting.
- **Watch write actions.** Reading is low-risk; *creating/editing/deleting* changes real systems. Read the action before approving, especially early on.
- **Company data = company rules.** For work tools, check your org's policy. Some connectors must be **enabled by an admin** first (you may see a "not enabled" / permission error — e.g. 401 or 403 — if not).
- **You can revoke** access anytime — in Claude's connector settings and/or in the service's "connected apps" settings.
:::

## Local vs. remote, one more time

- **Remote connectors** (Atlassian, Drive, Slack…) — provider-hosted, set up via **OAuth login**. This is what you'll use 95% of the time. Click, log in, approve.
- **Local/custom MCP servers** — run on your machine (e.g. a filesystem server). More setup, more control; usually for advanced/technical needs.

:::tip You're ready
That's the whole safety story: connectors act **as you**, **within your permissions**, via a **login you approve**, and you can **revoke** anytime. Now let's connect Atlassian for real.
:::

```quiz
Q: A connector lets Claude see a private Jira project you personally don't have access to. True or false?
- True — connectors grant full access
+ False — connectors act as you, within your existing permissions
- True, but only on weekends
- Connectors don't touch Jira
> Connectors respect your existing access controls. If you can't see it, neither can Claude.

Q: How do you authorize a typical remote connector?
- Type your password into Claude
+ Through a secure OAuth login in your browser, where you review and approve access
- You can't; an engineer must do it
- By emailing the provider
> OAuth means you log in to the service directly and approve scoped access — no password is stored in Claude.

Q: Which action deserves the most caution?
- Reading a Confluence page
- Searching issues
+ Write actions that create, edit, or delete things in your real systems
- Listing your projects
> Reads are low-risk; writes change real data. Review write actions before approving, especially while learning.
```

:::try Let's connect
Enough theory — next lesson you'll actually plug Claude into Jira & Confluence, two ways: the easy click-to-connect path and the power-user path.
:::
