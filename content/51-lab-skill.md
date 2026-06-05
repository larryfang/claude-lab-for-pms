# Lab: Build a "Status Update" Skill

You'll now create a real, reusable Skill that writes your weekly status update *your way* — and you'll use Claude to help author it. ~22 minutes. This is the lab people remember.

:::concept What "done" looks like
By the end you'll type `/` (or just ask for a "weekly update") and Claude will produce a status update in **your** format, every time, without you re-explaining it.
:::

## Step 1 — Capture your "house style" (3 min)

Before building, get clear on the format you want. Either reuse the sprint-summary prompt you liked from Module 5, or jot down: what sections do your updates have? Who's the audience? Any rules (length, tone, RAG status)?

- [ ] I know the **sections**, **audience**, and **style rules** for my updates

## Step 2 — Co-write the SKILL.md with Claude (6 min)

Open a normal chat and let Claude draft the Skill for you — it knows the format natively.

:::lab Generate the Skill
```prompt
Help me create a Claude Skill. I want a skill that writes my team's weekly product status update.

Here's my house style:
- Audience: engineering leadership (busy, non-technical-friendly)
- Sections: Headline with RAG status, Shipped this week, In progress (with owner + date), Risks & blockers (with the ask), Next week (top 3)
- Rules: lead with outcomes, plain English, under 250 words, Australian spelling

Please output a complete SKILL.md: 
1) YAML frontmatter with a kebab-case `name` and a strong `description` that includes trigger phrases like "status update", "weekly update", "sprint summary" 
2) a Markdown body with: when to use it, the steps (ask me for missing info first), an output template, style rules, and one filled-in example. 
Keep it focused.
```

- [ ] Claude produced a complete `SKILL.md`
- [ ] I tweaked the **description** so it includes the exact phrases I'd say
- [ ] I tweaked the **body** so the template matches my real format
:::

:::tip Use this as a reference
Here's a compact example you can adapt if you prefer to start from a template:

```markdown
---
name: weekly-status-update
description: Writes our weekly product status update for leadership from notes or Jira. Use when the user asks for a "status update", "weekly update", "sprint summary", or "leadership update".
---

# Weekly Status Update

## When to use
The user wants a recurring product status written in our house style for engineering leadership.

## Steps
1. Collect inputs (pasted notes, or pull from Jira if a connector is available).
2. If sprint name, dates, or audience are missing, ask up to 3 quick questions first.
3. Fill the template. Lead with outcomes, not activity.

## Template
**Headline:** one sentence + RAG (🟢/🟡/🔴)
**Shipped this week:** 3–5 verb-first bullets
**In progress:** bullet — owner — expected date
**Risks & blockers:** issue — impact — the ask
**Next week:** top 3 priorities

## Style
- Plain English; no internal jargon. Australian spelling.
- Under 250 words unless asked otherwise.
```
:::

## Step 3 — Install the Skill (5 min)

In **claude.ai / Claude Desktop**, a custom Skill is added by uploading a **ZIP of its folder** — there's no "paste the body" screen, because a Skill always lives as a `SKILL.md` file inside a folder.

:::lab Package and upload it
- [ ] Create a folder named exactly `weekly-status-update` (for a ZIP upload, the folder name must match the `name` in your frontmatter)
- [ ] Inside it, save your file as `SKILL.md`
- [ ] **Zip the folder** (the archive should contain the `weekly-status-update/` folder with `SKILL.md` inside)
- [ ] In Claude, go to **Customize → Skills**, click **＋ → Create skill → Upload a skill**, and select your ZIP
- [ ] Confirm the skill appears and is **enabled**
:::

:::note Cowork & Claude Code users
You can skip the zip entirely: just drop the `weekly-status-update/` folder where those tools look for skills (e.g. `~/.claude/skills/`, or a project's `.claude/skills/`) and it's picked up automatically.
:::

## Step 4 — Test it (4 min)

:::lab Fire your Skill
- [ ] In a chat, type **`/`** and confirm `weekly-status-update` appears in the menu
- [ ] Trigger it (select it, or just type a natural request):

```prompt
Write my weekly status update. Notes: shipped 1-tap reorder; payments flaky on Android (Sam investigating, fix ETA Thu); starting search next sprint; risk: API vendor rate limits.
```

- [ ] The output followed **my template and style rules**
- [ ] It asked me for anything important that was missing (or sensibly noted assumptions)
:::

## Step 5 — Refine (the pro move) (4 min)

Skills get better with a tweak or two:

- **Triggering off?** If Claude didn't auto-use it when you asked naturally, strengthen the **description** with more real trigger phrases.
- **Output not right?** Edit the **template/style** in the body and re-test.
- **Too long?** Move detailed examples into a `references/` file and point to them.

- [ ] I improved the description **or** body and re-tested
- [ ] My Skill now nails the format on the first try

:::concept You just industrialized a task
A prompt is a one-time instruction. A **Skill** is that instruction made permanent, named, and reusable — and it can be shared. You've turned a repeated chore into a reliable capability.
:::

```quiz
Q: Your new skill exists but Claude doesn't use it when you naturally ask for a "weekly update." Best fix?
+ Strengthen the `description` with the exact trigger phrases users say
- Rewrite it in another language
- Delete it and give up
- Switch to Haiku
> The description is the trigger. Add the real phrases ("weekly update", "status update", "sprint summary").

Q: Why is a Skill better than just keeping a good prompt in a notes app?
+ It's named, reusable, auto-triggered, and shareable — Claude applies it consistently without you pasting anything
- It isn't better
- It makes Claude faster
- It removes the need for context
> Skills make a great prompt permanent and shareable across your tools (and team).
```

:::try One more level
You built a Skill for *you*. Next: bundle skills + connectors + commands into a **Plugin** so your whole team gets it in one click.
:::
