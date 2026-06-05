# Lab: Real PM Workflows

This is the payoff. With Atlassian connected, Claude can run the weekly grind off your **live data**. Pick the workflows that match your job and actually run them.

:::note Make it yours
Replace bracketed bits like `[YOUR-PROJECT-KEY]` with your real Jira project key (e.g. `PAY`, `WEB`), and tweak names/dates. The prompts are starting points — steer them like you learned in Module 2.
:::

## Workflow 1 — The 60-second sprint summary

:::lab Summarize the current sprint
```prompt
Using my Atlassian connection, summarize the current/active sprint for project [YOUR-PROJECT-KEY]. Include: 
- a one-paragraph status 
- a table of issues grouped by status (To Do / In Progress / Done) with assignee 
- anything flagged as blocked or at risk 
- 3 talking points for our sprint review. 
Be concise and skimmable.
```

- [ ] I got a real sprint summary from my Jira
- [ ] I steered it once (e.g. "only show items changed this week")
:::

## Workflow 2 — Stand-up / status prep

:::lab Prep your stand-up
```prompt
Using Jira, list issues assigned to me in [YOUR-PROJECT-KEY] that are In Progress or were updated in the last 3 days. For each: key, summary, status, and what I likely need to say about it in stand-up. End with any blockers I should raise.
```

- [ ] Claude pulled my issues and drafted talking points
:::

## Workflow 3 — Epic health check

:::lab Check an epic
```prompt
Using Jira, give me a health check on epic [EPIC-KEY or name]. Include: % of child issues done, what's left, the oldest unresolved item, anything blocked, and a RAG (red/amber/green) status with a one-line justification. Then write 3 sentences I could send to stakeholders.
```

- [ ] I got an epic health summary + a stakeholder-ready blurb
:::

## Workflow 4 — Turn feedback/issues into themes

:::lab Find the signal
```prompt
Using Jira, pull the open bugs in [YOUR-PROJECT-KEY] from the last 30 days. Cluster them into themes, count each theme, and tell me the single area causing the most pain. Suggest where to focus next.
```

- [ ] Claude clustered real issues into themes I can act on
:::

## Workflow 5 — Draft a Confluence page (a *write* action) ✍️

:::warning This one writes
This creates real content in Confluence. Use a personal/test space, and Claude should ask you to approve the write. Review before approving.
:::

:::lab Create a page from a sprint summary
```prompt
Take the sprint summary you just produced and create a new Confluence page titled "Sprint Review — [date]" in my [personal/test] space. Use clear headings (Status, Highlights, Risks, Next Steps). Show me the content first; only create the page after I say "go".
```

- [ ] Claude drafted the page content and **asked before creating it**
- [ ] I reviewed, said "go", and a real page was created
- [ ] (Optional) I asked it to "add a bullet list of action items with owners"
:::

## Workflow 6 — Cross-tool combo (the magic)

If you've also got the **Google Drive** or **Slack** connector, combine them:

:::lab Connector combo
```prompt
Using Jira, summarize what shipped in [YOUR-PROJECT-KEY] this sprint. Then draft a short, friendly Slack message announcing it to #product, and a 5-bullet exec version I can paste into our leadership update doc.
```

- [ ] I got tailored outputs for two different audiences from one request
:::

## Reflect

What used to be 30–45 minutes of clicking through Jira, copying into docs, and rewording for different audiences just became a few prompts. The pattern:

:::concept The connector workflow pattern
> **Pull live data → shape it → retarget it for an audience → (optionally) write it back.**

Connectors turn Claude into a layer *on top of* your existing tools — no migration, no new system to learn for your team.
:::

:::tip This is begging to become a Skill
Notice you keep asking for sprint summaries "in our format." That repetition is the exact signal that it should be a reusable **Skill** — which is *literally the next module*. Keep your favorite prompt from this lab; you'll turn one into a Skill.
:::

```quiz
Q: What's the repeatable pattern behind these workflows?
+ Pull live data → shape it → retarget for an audience → optionally write back
- Memorize Jira manually
- Export everything to CSV first
- Only works with one project ever
> Connectors let Claude operate on your live tools; you shape and retarget the data, then optionally write results back.

Q: Before Claude created a real Confluence page, what should happen?
+ It shows you the content and waits for your approval before writing
- It creates 10 pages automatically
- It deletes the old space
- Nothing; writes need no review
> Write actions change real systems. Reviewing before approving keeps you in control.
```

:::try Module complete!
You've turned Claude into a Jira/Confluence power tool. Mark it done for your **🔌 Connected** badge. Next, the big one: **building your own Skill** so Claude does *your* tasks *your* way, every time.
:::
