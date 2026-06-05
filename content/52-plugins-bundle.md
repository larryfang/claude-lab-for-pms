# Bundle It Into a Plugin

You built a Skill for yourself. Now imagine giving your **whole team** that Skill — plus the Atlassian connector, plus a handy `/sprint-report` command — in a **single click**. That's a **Plugin**.

## What a plugin bundles

A plugin is a shareable package that can contain any mix of:

| Component | What it adds | Your example |
|---|---|---|
| **Skills** | Task playbooks | your `weekly-status-update` skill |
| **Connectors (MCP)** | Access to tools/data | the Atlassian connector, pre-wired |
| **Slash commands** | Explicit shortcuts | `/sprint-report` to run a workflow |
| **Subagents** | Parallel helpers (agentic) | a "competitive research" helper |
| **Hooks** | Automation on events (agentic) | auto-format outputs to house style |

Install one plugin → your team gets a **consistent, role-ready setup** from their first message. No "did everyone set up the connector?" chasing.

:::concept Why bundling is the endgame
Skills and connectors are great individually. But teams need **consistency**: everyone using the same playbooks, connected to the same tools, with the same shortcuts. A plugin is how you ship a *standard way of working* — like an internal app for your function.
:::

## How plugins are shared: marketplaces

Plugins are distributed through **marketplaces** (you met these in Module 3):

- Anthropic's built-in ones (e.g. **Knowledge Work**, added by default)
- A **GitHub repository** your team controls (a private/internal marketplace)
- The official catalog at `github.com/anthropics/claude-plugins-official`

To use one: **add the marketplace**, then **install the plugin** from it. On Team/Enterprise plans, an org owner can **distribute approved plugins org-wide** through marketplaces (some can even be auto-installed).

## Hands-on (pick your depth)

:::lab Path A — Design your dream plugin (everyone)
You don't have to build the package to think like a bundler. Sketch a plugin for your role:

- [ ] Name it (e.g. `pm-toolkit`)
- [ ] List the **skills** it would include (start with your `weekly-status-update`)
- [ ] List the **connectors** (Atlassian? Drive? Slack?)
- [ ] List 1–2 **slash commands** (e.g. `/sprint-report`, `/standup-prep`)
- [ ] Ask Claude to help:

```prompt
I want to design a Claude plugin called "pm-toolkit" for product managers. It should bundle: my weekly-status-update skill, the Atlassian connector, and a /sprint-report command. Explain what files/structure this plugin would need, what each part does, and how my team would install it from a GitHub marketplace. Keep it beginner-friendly.
```

- [ ] I understand what my plugin would contain and how a teammate installs it
:::

:::lab Path B — Peek at the real structure (optional, technical)
Plugins are just **files in a folder** — here's the shape:

```text
pm-toolkit/
├── .claude-plugin/
│   └── plugin.json          # name, version, description (the manifest)
├── skills/
│   └── weekly-status-update/
│       └── SKILL.md         # the skill you built!
├── commands/
│   └── sprint-report.md     # defines the /sprint-report command
└── .mcp.json                # declares bundled connectors (e.g. Atlassian)
```

> Note: only `plugin.json` goes inside `.claude-plugin/`. Everything else — `skills/`, `commands/`, `.mcp.json` — sits at the **plugin root**.

A minimal `plugin.json` is tiny:

```json
{
  "name": "pm-toolkit",
  "version": "0.1.0",
  "description": "PM workflows: status updates, sprint reports, Atlassian access.",
  "author": { "name": "Your Name" }
}
```

To share it, you publish the folder to a **GitHub repo** that lists it in a **`.claude-plugin/marketplace.json`** at the repo root, then teammates **add the marketplace** and **install**.

- [ ] I looked at the structure and recognize my Skill living inside it
- [ ] (Optional) I asked Claude to scaffold a starter `pm-toolkit` plugin for me
:::

:::tip Claude can build the plugin for you
Just like Skills, Claude understands the plugin format. Ask: *"Scaffold a plugin called pm-toolkit that includes this SKILL.md and a /sprint-report command."* It'll generate the files; you review and publish. (Building/publishing plugins is most natural in **Claude Code** — which is conveniently the next module.)
:::

## The full arc you just learned

:::concept From prompt to product
> A great **prompt** → saved as a **Skill** → combined with a **connector** and a **command** → packaged as a **Plugin** → shared via a **marketplace** → adopted by your **whole team**.

That progression — personal trick to team standard — is the most valuable thing in this entire lab.
:::

```quiz
Q: What's the main reason to package skills + connectors into a plugin?
+ Consistency & distribution — your whole team gets the same setup in one click
- Plugins make Claude smarter than skills do
- It's the only way to use a connector
- To reduce your subscription cost
> A plugin ships a standard way of working to a team, so everyone is set up identically.

Q: How does a team typically share an internal plugin?
+ Via a marketplace — often a GitHub repository they add, then install the plugin from
- By emailing screenshots
- It's impossible to share plugins
- Only Anthropic can distribute any plugin
> Marketplaces (including private GitHub-based ones) are the distribution mechanism; admins can push them org-wide.

Q: Which components only take full effect in agentic tools (Cowork/Code)?
- Skills and connectors
+ Subagents and hooks
- Slash commands
- The plugin.json file
> Skills/connectors work everywhere; subagents and hooks are for autonomous, multi-step work in Cowork and Claude Code.
```

:::try Module complete!
You can now go from a one-off prompt all the way to a team-wide plugin. Mark it done for your **🛠️ Skill Smith** badge. Next is the optional power-user track: **Claude Code 101** — where building plugins and tools really sings.
:::
