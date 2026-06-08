# MCP, Plugins & the .claude Folder

Two more ways to extend Claude Code — connecting **external tools** (MCP) and installing **bundles** (plugins) — plus a map of the whole `.claude/` folder so you know where everything lives.

## MCP: connect external tools

**MCP (Model Context Protocol)** is the open standard that lets Claude talk to outside tools and data — GitHub, your database, Notion, Figma, Sentry, monitoring, etc. Add one with:

```bash
claude mcp add notion -- npx -y @notionhq/notion-mcp-server
```

Once connected, you can ask Claude to *"implement the feature described in Notion ticket X,"* *"query the staging DB for users created today,"* or *"pull this Figma frame and build the component."* Manage servers with **`/mcp`**. Config lives in `.mcp.json` (project, committable) or `~/.claude.json` (user).

:::tip CLI tools are often simpler than MCP
For many services, a **CLI** is the most context-efficient integration. Install `gh` and Claude uses it natively for issues/PRs; same for `aws`, `gcloud`, `sentry-cli`. Try: *"Use `foo --help` to learn the tool, then do X."* Reach for MCP when there's no good CLI or you need structured, typed access.
:::

## Plugins: install a whole setup

A **plugin** bundles skills, subagents, hooks, and MCP servers into one installable unit. Instead of wiring each piece, install a plugin and get a ready-made toolkit. Browse and install with:

```bash
/plugin
```

This opens the marketplace (Anthropic-built and community). Example: a **code-intelligence** plugin for your language gives Claude precise symbol navigation and automatic error detection after edits. A plugin is just files — `.claude-plugin/plugin.json` plus the usual `commands/`, `agents/`, `skills/`, `hooks/`, `.mcp.json`.

## The .claude/ folder & settings hierarchy

Here's where everything you've learned this module lives:

```text
your-project/
├── CLAUDE.md                    # always-loaded project memory
├── CLAUDE.local.md              # personal, gitignored
└── .claude/
    ├── settings.json            # permissions, hooks, env (commit it)
    ├── settings.local.json      # personal overrides (gitignored)
    ├── commands/                # /slash commands
    ├── skills/<name>/SKILL.md   # skills (auto + /invoke)
    ├── agents/                  # subagents
    └── hooks/                   # hook scripts
```

Settings merge across four layers, highest priority last:

| Layer | File | Scope |
|---|---|---|
| User | `~/.claude/settings.json` | all your projects |
| Project | `.claude/settings.json` | the team (committed) |
| Local | `.claude/settings.local.json` | you, this project (gitignored) |
| Managed | `managed-settings.json` | org policy (wins over all) |

## Which mechanism do I use? (the decision table)

You now have five ways to customize. Pick by **what you need**:

| Need | Use |
|---|---|
| Instructions loaded **every session** | **CLAUDE.md** |
| A reusable **workflow you invoke by name** | **Skill / command** |
| **Context isolation** for a side task (research, review) | **Subagent** |
| Something that must happen at a **fixed lifecycle event** (pre-commit, post-edit) | **Hook** |
| Access to an **external tool or data source** | **MCP server** (or a CLI) |
| To **bundle & share** several of the above | **Plugin** |

:::concept The mental shortcut
**CLAUDE.md** = always-on knowledge · **Skill** = on-demand know-how · **Subagent** = a separate worker · **Hook** = a guarantee · **MCP** = a connection · **Plugin** = a package of all of them.
:::

```quiz
Q: You want Claude to read tickets from your issue tracker and query your database. What connects it to those?
+ MCP servers (claude mcp add …) — or a CLI if one exists
- A hook
- CLAUDE.md
- A subagent
> MCP (and CLIs like gh) connect Claude to external tools and data. Hooks/subagents/CLAUDE.md don't reach outside services.

Q: Something must happen at a fixed lifecycle moment (e.g., format after every edit). Which mechanism?
+ A hook
- A skill
- An MCP server
- A plugin
> Hooks = deterministic lifecycle automation. Skills are on-demand; MCP is connectivity; plugins bundle things.

Q: A teammate built a toolkit of skills + subagents + a hook + an MCP server and wants to share it as one install. That's a…
+ Plugin
- Connector
- CLAUDE.md
- Worktree
> A plugin bundles multiple capabilities into a single installable unit (browse with /plugin).
```

:::try Next
Time to build. The lab: create a custom command, a reviewer subagent, and a format-on-edit hook — then watch them work together.
:::
