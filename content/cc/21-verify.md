# Give Claude a Way to Verify

Here's the difference between a session you have to babysit and one you can walk away from: **a check Claude can run itself.**

## Why this is the whole ballgame

Claude stops when the work **looks done**. Without a check it can run, "looks done" is the only signal — and *you* become the verification loop, catching every mistake by hand. Give Claude something that returns **pass/fail**, and the loop closes on its own: Claude does the work, runs the check, reads the result, and **iterates until it passes**.

:::concept A "check" is anything that returns a signal
- a **test suite** (the gold standard)
- a **build** exit code
- a **linter / type-checker**
- a script that **diffs output** against a fixture
- a **screenshot** compared to a design
:::

## Put the check in your prompt

The simplest version: ask for the work *and* the verification in one breath.

| ❌ Vague | ✅ With a verification loop |
|---|---|
| "implement a function that validates emails" | "write `validateEmail`. Test cases: `user@example.com` → true, `invalid` → false, `user@.com` → false. **Run the tests after implementing** and fix failures." |
| "make the dashboard look better" | "[paste screenshot] implement this design. **Take a screenshot of the result, compare to the original, list differences, and fix them.**" |
| "the build is failing" | "the build fails with [error]. Fix it and **verify the build succeeds. Address the root cause — don't suppress the error.**" |

## TDD pairs beautifully with agents

Tests are the perfect check because they're unambiguous. A reliable recipe:

```prompt
Let's do this test-first. Write failing tests for [behavior], including edge cases [list]. Don't write the implementation yet — show me the tests and run them so I can see them fail (red). Then implement until they pass (green), and show the passing output.
```

Red → green, with Claude reading the test output each loop. You get correctness *and* a safety net for the next change.

## Gate harder when you walk away

The longer Claude runs unattended, the harder you want the stop gated:

| Gate | How |
|---|---|
| **Per-prompt** | "run the check and iterate in this same message" |
| **Across a session** | set a `/goal` condition — an evaluator re-checks after every turn until it holds |
| **Deterministic** | a **Stop hook** runs your check as a script and blocks the turn from ending until it passes |
| **Second opinion** | a **verification subagent** or `/code-review` re-checks the diff in a fresh context |

## Demand evidence, not assertions

:::warning "It works" is not evidence
Have Claude **show the proof**: the test output, the command it ran and what it returned, the screenshot. Reviewing evidence is faster than re-running checks yourself — and it's the only way to trust a session you weren't watching. If you can't verify it, don't ship it.
:::

## See TDD in the loop

```claude-sim
# Add a "slugify" helper, test-first.
> write failing tests for a slugify(str) util: "Hello World" → "hello-world", "  A & B  " → "a-b", "" → "". don't implement yet. run them so I see red.
✎ created __tests__/slugify.test.js (3 cases)
  $ npm test -- slugify
 FAIL  __tests__/slugify.test.js
   ✕ slugify("Hello World")  (slugify is not defined)
3 failing — as expected (red). Ready to implement?
> yes, implement until green, then show the passing output
✎ created src/slugify.js
  $ npm test -- slugify
 PASS  __tests__/slugify.test.js
   ✓ "Hello World" → "hello-world"
   ✓ "  A & B  " → "a-b"
   ✓ "" → ""
Green — 3/3 passing. Evidence above. Commit?
```

```quiz
Q: Why is "give Claude a way to verify" the difference between watching and walking away?
+ With a runnable check, Claude closes its own loop — does the work, runs the check, and iterates until it passes
- It makes Claude type faster
- It removes the need for prompts
- It disables permissions
> Without a check, "looks done" is the only signal and you become the QA. A pass/fail check lets the agent self-correct.

Q: Which prompt is most likely to produce correct code?
- "implement an email validator"
+ "write validateEmail with these test cases [...], run the tests, and fix failures"
- "make it good"
- "trust me, just ship it"
> Bundling explicit test cases + "run and fix" gives Claude an unambiguous target and a self-check.

Q: Claude says "Done, it works!" What should you insist on?
+ Evidence — the actual test output, command results, or a screenshot
- Nothing, take its word
- A longer explanation
- A new session
> Evidence beats assertion. Reviewing the proof is faster than re-verifying yourself and is essential for unattended runs.
```

:::try Next
You can plan and verify. Before you let Claude run more freely, let's set up permissions so it's both safe *and* not asking you to approve every keystroke.
:::
