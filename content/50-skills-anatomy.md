# Anatomy of a Skill

A Skill is how you teach Claude to do a task **your way, every time** — no re-explaining. The best part: a Skill is just a **folder with a text file**. If you can write a good doc, you can write a Skill.

## What a Skill is, precisely

> A **Skill** is a folder containing (at minimum) one file called **`SKILL.md`** — plain Markdown with a little structured header. That's the whole requirement.

It's an **open standard**: the same `SKILL.md` format works across Claude (chat, Cowork, Claude Code) and even other AI tools that adopted it. Write once, use widely — though for now you install it on each surface separately (they don't auto-sync).

## The two parts of SKILL.md

Every `SKILL.md` has (1) a **frontmatter** header and (2) a **Markdown body**.

```markdown
---
name: weekly-status-update
description: Formats a weekly product status update from raw notes or Jira data. Use when the user asks for a "status update", "weekly update", "sprint summary", or "stakeholder update".
---

# Weekly Status Update

## When to use this
Use when the user wants a recurring product/sprint status written in our team's house style.

## Steps
1. Gather the inputs (pasted notes, or pull from Jira if connected).
2. If key info is missing (sprint name, dates, audience), ask up to 3 questions first.
3. Produce the update using the template below.

## Output template
**Headline:** one sentence on overall status (RAG: 🟢/🟡/🔴)
**Shipped this week:** 3–5 bullets, each starting with a verb
**In progress:** bullets with owner + expected date
**Risks & blockers:** what's at risk and the ask
**Next week:** top 3 priorities

## Style rules
- Lead with the outcome, not the activity.
- Plain English; no internal jargon for exec audiences.
- Keep it under 250 words unless asked otherwise.

## Example
Input: "shipped 1-tap reorder, payments flaky on Android, starting search next."
Output: (a filled-in version of the template above)
```

### Part 1 — Frontmatter (between the `---` lines)

Two fields are required, and the rules are simple:

| Field | Rules | Why it matters |
|---|---|---|
| **`name`** | lowercase letters, numbers, hyphens (kebab-case); ≤ 64 chars; **can't** contain "anthropic" or "claude". By convention it matches the folder name (required for ZIP upload to claude.ai; in Claude Code the folder name is what counts) | The skill's ID |
| **`description`** | ≤ 1024 chars; says **what it does** *and* **when to use it**, ideally with trigger phrases | **The single most important line** — it's how Claude decides to use the skill |

:::warning The description makes or breaks your Skill
Claude relies on the **description** to know *when* to reach for your Skill. A vague description = a Skill that never fires. Include the words a user would actually say:

❌ "A skill for updates."
✅ "Formats a weekly product status update from notes or Jira. Use when the user asks for a 'status update', 'weekly update', 'sprint summary', or 'stakeholder update'."
:::

### Part 2 — The Markdown body

Below the frontmatter, write the **instructions**: steps, an output template, style rules, examples, and edge cases. Treat it like onboarding a sharp new hire — be specific about *how you* want the task done. Concrete examples are gold.

## The clever bit: progressive disclosure

You might wonder, "if I have 20 skills, won't that overwhelm Claude?" No — because of **progressive disclosure**:

:::concept How Claude loads skills (efficiently)
1. At rest, Claude only sees each skill's **name + description** (tiny).
2. When your request matches a description, Claude loads that skill's **full `SKILL.md`**.
3. Only if needed does it open extra **reference files** or run **scripts**.

So you can have *many* skills without slowing Claude down. It pulls in the details just-in-time.
:::

## Growing beyond one file (optional)

For bigger skills, add subfolders next to `SKILL.md`:

- **`references/`** — extra docs Claude reads only when needed (e.g. a detailed style guide)
- **`assets/`** — templates, images, lookup tables, schemas
- **`scripts/`** — runnable code (Python/JS/Bash) for deterministic steps

Keep `SKILL.md` itself focused (the official guidance is **under ~500 lines**) and let it *point to* the heavier stuff. Like a good table of contents.

## How you'll add one to Claude

You'll do this hands-on next lesson, but the gist:

- **In Claude (web / Desktop):** go to **Customize → Skills → ＋ → Create skill → Upload a skill**, and select a **ZIP** of your skill folder.
- **In Cowork / Claude Code:** drop the skill folder where skills live (e.g. `~/.claude/skills/`) and it's picked up automatically.

:::tip Let Claude write your Skill
Claude understands the Skill format **natively** — you can literally ask it: *"Help me write a SKILL.md for X."* You'll do exactly that in the lab. Meta, and it works great.
:::

```quiz
Q: What is the minimum a Skill requires?
+ A folder containing one `SKILL.md` file (Markdown with name + description frontmatter)
- A trained model and a GPU
- A paid plugin license
- A connector
> A Skill is just a folder + `SKILL.md`. Two required fields: name and description.

Q: Which frontmatter field most determines whether your Skill actually gets used?
- name
+ description (what it does AND when to use it, with trigger phrases)
- the file size
- the color
> Claude reads descriptions to decide when to fire a skill. Vague description = skill never triggers.

Q: "Progressive disclosure" means…
- Skills reveal themselves slowly to look cool
+ Claude only loads a skill's full content when it's relevant — names/descriptions are always-on, details load just-in-time
- You must disclose all skills to your admin
- Skills expire over time
> That's why you can have many skills without bloating context: details load only when needed.
```

:::try Build one
Theory's done. Next lesson you'll actually create, install, test, and refine a real Skill — using Claude to help you write it.
:::
