# Managing Context Live

`CLAUDE.md` is your *baseline* context. This lesson is about steering context **mid-session** — the moves that keep a long workday with Claude fast and sharp.

## /clear — the reset button

Between **unrelated** tasks, run `/clear`. It wipes the conversation so the next task starts fresh.

:::warning The "kitchen sink" trap
Working on task A, you ask about unrelated thing B, then go back to A. Now A's context is polluted with B. Quality drops. **Fix:** `/clear` between unrelated tasks. It's the most common rookie mistake — and the easiest fix.
:::

## /compact — summarize without losing the thread

When you're **deep in one task** but the window is filling, don't clear (you'd lose useful history). Instead **compact**:

```bash
/compact
/compact focus on the API changes and the failing test
```

`/compact` summarizes the conversation, preserving key code, file states, and decisions while freeing space. Claude also **auto-compacts** when you approach the limit. You can guide it from `CLAUDE.md` too, e.g. *"When compacting, always preserve the list of modified files and test commands."*

## /rewind — checkpoints, not chaos

Every prompt you send creates a **checkpoint**. Claude snapshots files before each change, so you can roll back.

- **`Esc` `Esc`** (double-tap) or `/rewind` → open the rewind menu
- Restore **conversation only**, **code only**, **both**, or **summarize from here**

:::concept Be bold, then rewind
Because rewinding is cheap, you can tell Claude to **try something risky**. If it goes sideways, rewind and try another angle. Checkpoints persist across sessions. *(They track Claude's changes only — not a replacement for git.)*
:::

## Subagents — investigate without polluting

When a task needs Claude to **read a lot** (explore a subsystem, hunt for a pattern), delegate it:

```prompt
Use subagents to investigate how our auth system handles token refresh, and whether we already have OAuth utilities I should reuse. Report back a summary with file references.
```

The subagent explores in its **own context window** and returns just a **summary** — so your main session stays clean and focused on building. (Deep dive in the Customize module.)

## Feed context efficiently

- **`@file`** — `@src/auth.ts` pulls a specific file in (beats "read the whole repo").
- **Paste/drag images** — screenshots, mockups, error dialogs, design comps.
- **Pipe data in** — `cat error.log | claude` sends file contents directly.
- **Give URLs** — and `/permissions` to allowlist docs domains you use often.
- **`/btw`** — ask a quick aside that *doesn't* enter the conversation history (no context cost).

## Course-correct early

Tight feedback loops beat long ones:

- **`Esc`** — interrupt the moment Claude drifts (context is preserved; just redirect).
- **"undo that"** — have Claude revert its last change.
- Corrected the same thing **twice**? Stop. `/clear` and write a sharper prompt that bakes in what you learned. A clean restart beats fighting a polluted session.

## Feel it

```claude-sim
# You've been deep in a refactor; the window is getting full.
> /compact focus on the rate limiter changes and the failing concurrency test
Compacted. Kept: 4 modified files (middleware/rateLimiter.ts, …), the failing
test concurrency.test.ts, and the decision to use a token-bucket algorithm.
Freed ~38k tokens. Ready to continue.
> now use a subagent to check if any other middleware already does rate limiting
Delegating to a subagent (separate context)…
Subagent report:
  • No existing rate limiter. middleware/throttle.ts is unrelated (per-IP request log only).
  • Reuse candidates: utils/redis.ts (shared client), config/limits.ts (defaults).
Your main context stayed clean — only this summary was added.
> good. implement using utils/redis.ts and the defaults in config/limits.ts
```

```quiz
Q: You're 40 messages deep on ONE feature and the window is filling, but the history is still useful. Best move?
- /clear (start over)
+ /compact — summarize to reclaim space while keeping key code and decisions
- Keep going until it breaks
- Restart Claude
> /clear is for *unrelated* task switches. When you're deep in one task, /compact preserves the thread while freeing space.

Q: Why delegate a big investigation to a subagent?
+ It explores in a separate context and returns only a summary, keeping your main window clean
- It's faster to type
- Subagents are free
- It edits files for you automatically
> Investigation reads lots of files = lots of tokens. Subagents quarantine that cost and report back a distilled summary.

Q: You've corrected Claude on the same issue twice and it's still wrong. Do what?
+ /clear and restart with a sharper prompt incorporating what you learned
- Correct it a third, fourth, fifth time
- Give up on Claude Code
- Switch to a bigger model and keep going
> After two failed corrections the context is polluted with dead ends. A clean session + better prompt wins.
```

:::try Next
Theory locked in. Time for a lab: run `/init` and tune a real `CLAUDE.md` until Claude's behavior visibly shifts.
:::
