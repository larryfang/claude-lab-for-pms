# Troubleshooting & FAQ

When Claude Code misbehaves, start here. Expand the section that matches.

## Quality & behavior

:::details Claude keeps making mistakes / "forgetting" instructions
Your **context is probably full**. As the window fills, performance degrades. Fixes: `/clear` between unrelated tasks, `/compact` mid-task, delegate research to **subagents**, and keep `CLAUDE.md` short. A fresh session with a sharp prompt beats a long, polluted one.
:::

:::details Claude ignores a rule in my CLAUDE.md
Two likely causes: (1) the file is **too long**, so the rule got buried — prune it; (2) the rule is **ambiguous** — reword it, add `IMPORTANT:`/`YOU MUST`. For must-happen rules, convert them to a **hook** (deterministic).
:::

:::details It solved the wrong problem
You probably skipped exploration. Use **plan mode** (Shift+Tab) to have Claude explore and propose a plan *before* coding, and review/edit the plan (Ctrl+G) first.
:::

:::details It says "done" but the code is wrong
Give it a **way to verify** (tests, build, screenshot) and ask it to **show the evidence**. "If you can't verify it, don't ship it." Add a fresh-context review (`/code-review` or a subagent).
:::

## Permissions & safety

:::details I'm approving the same command over and over
**Allowlist** it: `/permissions` or add it to `.claude/settings.json` `permissions.allow`. Use **auto mode** for longer trusted tasks.
:::

:::details Should I use --dangerously-skip-permissions?
Only in an **isolated sandbox/container or trusted CI**. Never on untrusted code or content — prompt injection (malicious instructions hidden in files, deps, issues, or web pages) can steer Claude into harmful commands when permissions are off. Add `deny` rules for secrets and destructive commands regardless.
:::

## Plan mode, subagents, hooks

:::details Plan mode won't let Claude edit anything
That's correct — plan mode is **read-only by design**. Press **Shift+Tab** to cycle out of it (to normal or auto-accept) when you're ready to implement.
:::

:::details My subagent ignores project rules
Subagents **don't inherit CLAUDE.md** — they start with only their own system prompt. **Embed** any rules they must follow directly in the subagent's prompt.
:::

:::details Plan mode broke after I added a subagent
Did you name a subagent `Explore` or `Plan`? Those **shadow the built-ins** and break plan mode's research step. Rename your custom agent.
:::

:::details My hook isn't firing
Check `/hooks` to confirm it's registered. Verify the **event** (PreToolUse vs PostToolUse) and the **matcher** (e.g. `Edit|Write`). Settings reload live, but if in doubt, restart the session. A PreToolUse hook must `exit` non-zero to *block* an action.
:::

## MCP & tools

:::details An MCP server won't connect
Run `/mcp` to see status. Common causes: the server command/args are wrong, a required env var/token is missing, or the package failed to fetch. For many services a **CLI** (e.g. `gh`) is simpler and more context-efficient than MCP — try that first.
:::

## Setup & CLI

:::details `claude: command not found`
**Close and reopen** your terminal (a freshly installed command needs a new session). If it persists, your PATH may not include the install location — reinstall via the official method or check the docs.
:::

:::details Headless runs in CI fail with auth errors
Headless/CI needs credentials in the environment (e.g. `ANTHROPIC_API_KEY` as a secret), not an interactive login. Set it in your CI secrets and pass it to the step/action.
:::

## Cost & speed

:::details It's using a lot of tokens / feels slow
Token use tracks context size. Keep sessions focused, `/clear` often, `/compact` long ones, use subagents for big reads, and keep `CLAUDE.md` lean. Use `/cost` and `/context` to see where it's going. Reserve the biggest models (and high reasoning effort) for genuinely hard tasks.
:::

## Worktrees & parallel

:::details Two Claude sessions clobbered each other's changes
Don't run parallel sessions in the **same** folder. Use **git worktrees** (`git worktree add ../copy -b branch`) so each session has an isolated checkout and branch; merge when done.
:::

:::tip The source of truth
Claude Code evolves fast. For the latest specifics, the official docs at **code.claude.com/docs** (and `/help` in-session) are authoritative — the concepts in this course stay stable even as flags and menus shift.
:::
