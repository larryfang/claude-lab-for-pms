# Permissions & Staying Safe

Claude Code can edit files and run commands — that's the power, and the responsibility. This lesson is how to stay safe **without** clicking "approve" a hundred times a day.

## The default: ask before acting

Out of the box, Claude asks permission before anything that could modify your system — file writes, Bash commands, MCP tool calls. Safe, but tedious: after the tenth approval you're not reviewing, you're just clicking. There are three ways to cut the noise.

## Three ways to reduce interruptions

| Approach | What it is | Best when |
|---|---|---|
| **Auto mode** | A separate classifier reviews each command and blocks only risky things (scope escalation, unknown infra, hostile-content-driven actions) | You trust the task's direction but don't want to babysit each step |
| **Permission allowlists** | Pre-approve specific safe tools/commands with `/permissions` or in `settings.json` | Repetitive safe commands like `npm run lint`, `git commit` |
| **Sandboxing** | OS-level isolation (`/sandbox`) restricting filesystem/network access | Letting Claude work freely inside hard boundaries |

Run auto mode non-interactively like this:

```bash
claude --permission-mode auto -p "fix all lint errors"
```

## Allow and deny rules

You can codify permissions in `.claude/settings.json` (commit it to share team rules). Allow the safe stuff; **deny the dangerous stuff** outright:

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run test:*)",
      "Bash(npm run lint)",
      "Bash(git add:*)",
      "Bash(git commit:*)",
      "Read"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./secrets/**)",
      "Bash(rm -rf:*)",
      "Bash(git push:*)"
    ]
  }
}
```

:::concept allow / deny / ask
- **allow** — pre-approved, runs without a prompt
- **deny** — blocked entirely, even if Claude asks (great for secrets and destructive commands)
- everything else → falls through to the normal **ask** prompt

Pre-approve a handful of read-only/test commands; deny secrets and destructive operations; let the rest prompt. That's the sweet spot.
:::

## The YOLO flag (handle with care)

You'll hear about `--dangerously-skip-permissions` (a.k.a. "YOLO mode"), which skips all prompts.

:::warning When (and when not) to skip permissions
**Legit uses:** a throwaway sandbox, a disposable container/VM, or CI where the environment is isolated and the repo is trusted.

**Never** use it on **untrusted code or content.** Claude can be steered by **prompt injection** — malicious instructions hidden in a file, dependency, issue, or web page it reads — into running harmful commands. With permissions off and real filesystem access, that's a genuine risk. On any repo you don't fully trust, keep permissions on (or sandbox).
:::

## A sane default setup

For most day-to-day work on **your own** repo:

1. Run in **normal mode**, or **auto mode** when you trust a longer task.
2. Allowlist your common safe commands (test, lint, build, `git add`/`commit`).
3. **Deny** reads of `.env`/secrets and destructive commands (`rm -rf`, `git push`, force operations).
4. Reach for **sandboxing** when working with anything unfamiliar.

```quiz
Q: You're tired of approving `npm test` every time. Best fix?
+ Allowlist it via /permissions (or settings.json) so it runs without prompting
- Use --dangerously-skip-permissions globally
- Approve it forever, one click at a time
- Turn off your firewall
> Allowlist specific safe commands. That removes the noise without giving up control over everything else.

Q: When is --dangerously-skip-permissions reasonable?
+ In an isolated sandbox/container or trusted CI — never on untrusted code or content
- Always, to save time
- On any repo you find online
- When reviewing a stranger's PR locally with full access
> Skipping permissions is fine in isolation with trusted code. Untrusted code/content + no permissions = prompt-injection risk.

Q: What's the point of a `deny` rule like `Read(./.env)`?
+ It blocks Claude from ever reading secrets, even if it would otherwise ask
- It speeds up reads
- It encrypts the file
- It's only decorative
> deny is a hard block — perfect for secrets and destructive commands. allow pre-approves; everything else prompts.
```

:::try Next
You can plan, verify, and stay safe. Time to put the whole workflow together in a lab: ship a real feature with plan mode and TDD.
:::
