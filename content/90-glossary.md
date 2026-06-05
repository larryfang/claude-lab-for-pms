# Glossary

Every term in this lab, defined in one sentence. Skim it, bookmark it, win your next meeting.

## The big five

**MCP (Model Context Protocol)** — the open "USB-C for AI" standard that lets any AI app connect to any tool or data source.

**Connector** — a link (built on MCP) that lets Claude read your data and take actions in an external app like Jira, Drive, or Slack, after you authorize it.

**Skill** — a folder with a `SKILL.md` file that teaches Claude to do a specific task *your way*; it loads only when relevant.

**Plugin** — a shareable bundle that packages skills, connectors, slash commands, and subagents into a one-click setup for a role or team.

**Subagent** — a helper agent Claude spins up to work on part of a big job in parallel (mostly in Cowork and Claude Code).

## Products & places

**Claude** — Anthropic's AI assistant (a large language model) and the brain behind everything here.

**Claude.ai / Claude on the web** — Claude in your browser; great for quick use on any device.

**Claude Desktop** — the Claude app for macOS/Windows; your home base, and where Cowork, Connectors, Skills, and Plugins live.

**Cowork** — an agentic workspace inside Claude Desktop that takes on whole multi-step jobs on your files and returns finished deliverables — no terminal needed.

**Claude Code** — the agentic coding tool for building and editing software/tools (usually run from the terminal, but also available as a desktop app, IDE extension, and on the web); the same engine Cowork wraps in a friendly UI.

**Directory** — Anthropic's unified catalog (claude.ai/directory) with tabs for Connectors, Skills, and Plugins.

**Marketplace** — a catalog of plugins you can add (Anthropic-built, community, or your company's private one).

## Concepts you'll hear

**LLM (Large Language Model)** — the type of AI Claude is: trained on huge amounts of text to understand and generate language.

**Vibe coding** — building software by describing what you want in plain language and letting AI write the code while you steer.

**Prompt** — your message/instruction to Claude.

**Context** — the background information Claude has for a task (pasted, uploaded, connected, or remembered).

**Project** — a workspace that bundles shared context, files, and instructions across related chats (Cowork has its own version too).

**Artifact** — a substantial, editable deliverable (a doc, table, or app) shown beside the chat instead of buried in messages.

**Hallucination** — when Claude states something confidently that's actually wrong, usually due to missing context.

**Model: Opus / Sonnet / Haiku** — the same Claude at three tiers: Opus (most capable), Sonnet (balanced everyday), Haiku (fastest).

**Progressive disclosure** — how Claude keeps skills efficient: it sees only names/descriptions until a skill is relevant, then loads the details.

## Technical-ish (nice to know)

**Host** — the AI app that connects to MCP servers (Claude Desktop and Claude Code are hosts).

**(MCP) Server** — a program that exposes tools/data over MCP (e.g., the Atlassian server exposes Jira & Confluence).

**Local vs. remote server** — local runs on your computer (e.g., a filesystem server); remote runs on the provider's servers (e.g., Atlassian) and is set up via login.

**OAuth** — the secure "log in and approve access" flow used to authorize connectors without sharing your password.

**Tool** — a specific action an MCP server offers Claude (e.g., "search Jira issues", "create a page").

**Slash command** — an explicit, user-triggered shortcut (typed with `/`) that runs a defined workflow; often bundled in plugins.

**Hook** — automation that runs on an event (e.g., auto-formatting output); takes effect in agentic tools (Cowork/Code).

**SKILL.md** — the single required file in a Skill: YAML frontmatter (`name`, `description`) plus Markdown instructions.

**Rovo MCP server** — Atlassian's official MCP server that securely connects Jira & Confluence to Claude.

:::tip Can't find a term?
Press `/` to search the whole lab, or check the lesson where you first met the word — concepts are introduced with their full analogy in Module 3.
:::
