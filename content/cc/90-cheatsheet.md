# Command & Shortcut Cheat-Sheet

Everything you'll reach for, on one page. Bookmark it.

## Launch & flags (your shell)

| Command | Does |
|---|---|
| `claude` | Start an interactive session in the current dir |
| `claude --continue` | Resume the most recent session |
| `claude --resume` | Pick a past session from a list |
| `claude -p "prompt"` | **Headless** — run once, print, exit |
| `claude -p "…" --output-format json` | Structured output (also `text`, `stream-json`) |
| `claude --permission-mode auto -p "…"` | Unattended with a safety classifier |
| `claude -p "…" --allowedTools "Edit,Bash(git commit *)"` | Scope tools for batch/unattended runs |
| `claude --dangerously-skip-permissions` | Skip all prompts — **only** in isolated/trusted envs |
| `cat file | claude -p "…"` | Pipe data in |

## In-session keys

| Key | Does |
|---|---|
| `Shift+Tab` | Cycle mode: normal → auto-accept → **plan** |
| `Esc` | Interrupt Claude (context preserved) |
| `Esc` `Esc` | Open the rewind/checkpoint menu |
| `Ctrl+G` | Open the current plan in your editor (plan mode) |
| `Ctrl+C` | Cancel / exit |
| `@path` | Add a file to context (`@src/auth.ts`) |
| `#text` | Save a one-liner to memory (CLAUDE.md) |
| paste / drag | Add an image (screenshot, mockup) |

## Slash commands (in session)

| Command | Does |
|---|---|
| `/help` | List commands & shortcuts |
| `/init` | Generate a starter CLAUDE.md |
| `/clear` | Reset context (between unrelated tasks) |
| `/compact [focus]` | Summarize to reclaim context |
| `/rewind` | Restore a checkpoint (conversation/code/both) |
| `/model [name]` | Switch model (e.g. `opusplan`) |
| `/permissions` | Allow/deny tools & commands |
| `/sandbox` | OS-level isolation |
| `/agents` | Create/manage subagents |
| `/hooks` | Browse configured hooks |
| `/mcp` | Manage MCP servers |
| `/plugin` | Browse/install plugins |
| `/code-review` | Fresh-context review of the current diff |
| `/cost`, `/context` | Token spend / what's in your context |
| `/rename` | Name the session |
| `/btw` | Quick aside that doesn't enter history |

## The .claude/ folder

| Path | What |
|---|---|
| `CLAUDE.md` | Always-loaded project memory (keep < ~200 lines) |
| `CLAUDE.local.md` | Personal, gitignored |
| `~/.claude/CLAUDE.md` | Global (all your projects) |
| `.claude/settings.json` | Permissions, hooks, env (committed) |
| `.claude/settings.local.json` | Personal overrides (gitignored) |
| `.claude/commands/*.md` | `/slash` commands |
| `.claude/skills/<name>/SKILL.md` | Skills (auto + `/invoke`) |
| `.claude/agents/*.md` | Subagents |
| `.mcp.json` | Project MCP servers |

## The loop, in four words

> **Explore · Plan · Code · Commit** — and always give Claude a way to **verify**.

:::tip Print it
This page works great as a printed desk reference or a pinned tab. Fork the repo and add your team's own commands and conventions to it.
:::
