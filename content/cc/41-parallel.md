# Parallel Sessions & Worktrees

Once you're effective with one Claude, you can multiply your output by running several at once — on independent tasks, isolated experiments, or a writer/reviewer split. The trick is keeping them from stepping on each other.

## The collision problem

Two Claude sessions editing the **same working directory** will clobber each other's changes. The clean fix is **git worktrees**: multiple checkouts of the same repo in separate folders, each on its own branch.

```bash
# Create isolated checkouts, each on its own branch
git worktree add ../proj-oauth   -b feature/oauth
git worktree add ../proj-billing -b feature/billing

# Run a Claude in each — no collisions
cd ../proj-oauth   && claude    # terminal 1
cd ../proj-billing && claude    # terminal 2
```

Each session has its own files, its own branch, its own context. Merge the branches when done. (The **Claude Code desktop app** manages multiple sessions visually, each in its own worktree; **Claude Code on the web** runs them in isolated cloud VMs.)

## The Writer/Reviewer pattern

Parallel sessions aren't just about speed — they unlock **quality**. A *fresh* context reviews better because it isn't biased toward code it just wrote:

| Session A (Writer) | Session B (Reviewer) |
|---|---|
| "Implement a rate limiter for our API." | |
| | "Review `@src/middleware/rateLimiter.ts` for edge cases, race conditions, and consistency with our middleware." |
| "Here's the review: [paste B's output]. Address these." | |

Same idea works for tests: one Claude writes the tests, another writes code to pass them.

## Fan-out across many files

For big migrations or audits, loop `claude -p` over a list, scoping tools for safety:

```bash
# 1) have Claude list the files needing work → files.txt
# 2) fan out
for file in $(cat files.txt); do
  claude -p "Migrate $file from React class component to hooks. Return OK or FAIL." \
    --allowedTools "Edit,Bash(git commit *)"
done
```

:::tip Test on 2–3 first
Refine your prompt on the **first few files**, see what goes wrong, *then* run the whole set. A prompt that's 90% right across 500 files creates 50 messes. Validate small, then scale.
:::

## Agent teams (automated coordination)

When you want the coordination handled *for* you, **agent teams** run multiple sessions with a shared task list, inter-agent messaging, and a team lead — useful for large, multi-part work where you'd otherwise babysit several terminals. Orchestration patterns worth knowing: **fan-out/fan-in** (parallel work → synthesize), **validation chains** (builder → reviewer), and **specialist routing** (dispatch by domain).

:::concept Pick your coordination level
- **Worktrees** — you coordinate; max control, simplest mental model.
- **Desktop/web sessions** — visual management of several at once.
- **Agent teams / workflows** — automated coordination for jobs too big for one conversation.

Start with worktrees. Reach for teams/workflows only when the task genuinely needs more agents than you can hand-coordinate.
:::

```quiz
Q: Why use git worktrees to run parallel Claude sessions?
+ Each session gets an isolated checkout + branch, so their edits don't collide
- It makes Claude faster
- It's required to run Claude at all
- It disables permissions
> Two sessions in the same folder clobber each other. Worktrees give each its own files and branch.

Q: Why is a separate Reviewer session often better than asking the Writer to review its own work?
+ A fresh context isn't biased toward the code it just wrote, so it catches more
- It's cheaper
- The Writer can't read code
- Reviews must always be a different model
> Fresh-context review (separate session or subagent) evaluates the result on its own terms and finds more real issues.

Q: Before running a fan-out migration across 500 files, you should…
+ Test and refine the prompt on the first 2–3 files
- Run all 500 immediately
- Skip testing to save time
- Disable git
> Validate small, then scale. A slightly-wrong prompt multiplied by 500 is 500 problems.
```

:::try Next
Let's make it concrete — a lab where you run a headless one-liner and set up a parallel worktree workflow.
:::
