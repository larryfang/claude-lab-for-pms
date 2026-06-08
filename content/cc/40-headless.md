# Headless Mode & CI

Everything so far assumed one human, one Claude, one conversation. But Claude Code also runs **without a session** — as a command you can pipe, script, and drop into CI. That's where it stops being a tool you use and becomes infrastructure.

## `claude -p` — non-interactive mode

Pass a prompt with `-p` and Claude runs it once, prints the result, and exits — no interactive session:

```bash
# One-off query
claude -p "Explain what this project does"

# Structured output you can parse
claude -p "List all API endpoints" --output-format json

# Streaming output for real-time processing
claude -p "Analyze this log file" --output-format stream-json --verbose
```

This is the building block for **pre-commit hooks, CI pipelines, and any automated workflow.** Output formats: plain text, `json`, or `stream-json`.

## Pipe data in and out

Claude Code is a good Unix citizen:

```bash
# Pipe a file IN
cat error.log | claude -p "What's the root cause of these errors? Be concise."

# Pipe Claude's JSON OUT to another tool
claude -p "List risky TODOs in this repo" --output-format json | jq '.result'
```

## Run unattended, safely

For automated runs you won't be watching, scope what Claude may do and let the classifier guard the rest:

```bash
# auto mode: a classifier blocks risky actions; aborts if it keeps blocking (no human to ask)
claude --permission-mode auto -p "fix all lint errors"

# scope tools explicitly for batch jobs
claude -p "Add a license header to this file" --allowedTools "Edit,Bash(git add *)"
```

:::warning Unattended = scope tightly
With no human in the loop, `--allowedTools` and `--permission-mode` are your safety rails. Allow only what the job needs. Use `--verbose` while developing the prompt, then turn it off in production.
:::

## In CI: GitHub Actions

You can run Claude Code in CI to review PRs or even implement fixes. The common setup: install the **Claude Code GitHub app / action**, then **mention `@claude`** in an issue or PR comment to trigger it (review, implement, answer). A minimal workflow looks like:

```yaml
# .github/workflows/claude.yml
name: Claude
on:
  issue_comment:
    types: [created]
jobs:
  claude:
    if: contains(github.event.comment.body, '@claude')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

Now commenting *"@claude please add tests for the auth module and open a PR"* on an issue kicks off a real run. (Check the action's current docs for exact inputs — they evolve.)

## A pre-commit gate example

Use headless Claude as a lightweight reviewer before code lands:

```bash
# .git/hooks/pre-commit (simplified)
git diff --cached | claude -p "Review this staged diff. If you find a likely bug or a leaked secret, print BLOCK and why. Otherwise print OK." | grep -q BLOCK && {
  echo "Claude flagged an issue — commit blocked."; exit 1;
}
```

```quiz
Q: How do you run Claude Code without an interactive session, for use in a script?
+ claude -p "your prompt" (optionally with --output-format json)
- You can't; it's interactive only
- /headless
- claude --gui
> `claude -p` is non-interactive (headless) mode — the basis for CI, pre-commit hooks, and pipelines.

Q: For an unattended batch job, what keeps it safe?
+ Scope it with --allowedTools and use --permission-mode auto (classifier guards risky actions)
- Nothing; it's automatically safe
- Run it as root
- --dangerously-skip-permissions on a production repo
> No human to approve = scope tightly. Allow only needed tools; auto mode blocks risky actions and aborts if it keeps blocking.

Q: How do you trigger Claude Code from a GitHub issue or PR?
+ Install the Claude Code GitHub action/app and mention @claude in a comment
- Email Anthropic
- It's not possible
- Paste code into the issue
> The GitHub action lets you mention @claude to review or implement, opening PRs from CI.
```

:::try Next
One Claude is great. Several Claudes working in parallel — without stepping on each other — is a force multiplier. Enter git worktrees.
:::
