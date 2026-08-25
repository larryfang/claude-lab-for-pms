# Field Notes — How Sales, GTM, Product & Finance Actually Use Claude Cowork

Researched 2026-08-25. This synthesizes two fully-cited research passes — official/primary
sources (`research/usage-official.md`) and community/practitioner sources
(`research/usage-community.md`) — into the material most worth folding into the course.
Every claim below carries its source URL; credibility is marked where it matters
(**FIRSTHAND** = author's own use · **DEMO** = live demonstration · **VENDOR** = content
marketing, patterns useful but claims unverified).

Key primary document: Anthropic's 23-page **"Deploying Claude across your organization"**
PDF (2026-04-29) — the adoption ladder, rollout playbook, and four internal team deep-dives.
[PDF](https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/69f24d3e09b921b92403774e_Claude-Deploying-Claude-Across-Your-Organization-04292026.pdf) ·
[announcement](https://claude.com/blog/new-guide-deploying-claude-across-the-enterprise-with-claude-cowork). Cited below as **[Deploy PDF]**.

---

## The examples worth teaching, per lane

### 💼 Sales

1. **Travis Bryant (Head of US Mid-Market GTM, Anthropic) runs a 4,000-account book** —
   FIRSTHAND, official. Daily scheduled call-prep skill (Calendar + Salesforce + BigQuery →
   brief waiting each morning); Friday forecast skill (→ single-page web report before the
   Monday call, ~3 hrs/week saved); overnight propensity scoring of all 4,000 accounts
   against two 5-dimension rubrics, with per-dimension written rationale and an interactive
   dashboard. His method was non-technical: *"tell Claude what dimensions to score on, run a
   test territory, check the output, adjust the weights."* And the meta-lesson: *"The
   scheduler was the bigger unlock than the skill itself… Once prep stops being a slash
   command I have to remember and starts running on its own, I stop forgetting it."*
   *"Claude builds the what; I do the why."*
   https://claude.com/blog/how-an-anthropic-sales-leader-uses-claude-cowork-to-run-a-4-000-account-book
2. **The supervised→scheduled progression** — an Anthropic rep's Salesforce auto-update
   skill kept a human validation step on every run *until repeated manual checks passed*,
   then removed it and scheduled it. [Deploy PDF] ch.5.
3. **Calibrate on 5, then scale** — FIRSTHAND (r/ClaudeCode): define KOL/prospect criteria,
   have Cowork fetch 5 live profiles, keep 3 / reject 2 *with reasons*, then loop the
   calibrated filter over 50 unattended. One-shot asks for 100 profiles returned 4–5;
   the calibration loop is what scaled.
   https://www.reddit.com/r/ClaudeCode/comments/1r9il3r/heres_how_i_use_claude_cowork_ralph_wiggum_plugin/
4. **Solo-operator sales assistant** — FIRSTHAND (r/AI_Agents): inbox triage of ~200
   morning emails, plain-English ICP prospecting, 30-second meeting prep; replaces a
   $500–2,000/mo tool stack. Lessons verbatim: *"Skills are everything"*, *"Start with one
   workflow and get it solid"*, *"garbage in, garbage out"* on ICP definitions.
   https://www.reddit.com/r/AI_Agents/comments/1rr57uk/i_turned_openclaw_and_claude_cowork_into_a_full/

### 📣 GTM / Marketing

1. **Ian Chan (Anthropic marketing ops) weekly report** — Sunday-evening scheduled task
   reads last week's review + transcripts + Slack + warehouse; Monday he sets the narrative,
   Claude expands, generates the leadership slide, files Asana tasks. **1–2 days → 2 hours.**
   Three skills: prep, *proofreading* ("verifies every number against source"), action-items.
   The rule: *"When you find yourself correcting Claude on the same thing more than once,
   that feedback belongs in a skill."* And: **build the proofreading skill first.**
   https://claude.com/blog/how-anthropics-marketing-operations-team-uses-claude-cowork-to-automate-reporting-and-campaign-builds
2. **Annabel Custer's event pipeline** (same source) — dispatcher skill reads a Slack intake
   channel hourly → routes to specialist skills (event build across Salesforce/HubSpot/
   Swoogo/email) → a **fresh Claude instance audits** by actually test-registering and
   checking Gmail for the confirmation email → human review → done. It caught wrong city
   names in confirmation emails.
3. **Ruben Hassid's public reversal** — FIRSTHAND: abandoned his own viral folder-tree
   workspace method (*"Files and folders suck… Folders are leaking"*) for **Skills +
   Projects**; cost hygiene: edit the previous prompt instead of piling follow-ups, fresh
   session every ~20 messages. A rare, teachable workflow-abandonment story.
   https://ruben.substack.com/p/learn-80-of-claude-cowork-in-20-minutes
4. **Gap analysis before drafting** — *"Before producing anything, list the information you
   found and any gaps that would weaken the brief. Wait for my response."*
   https://thecreatorsai.com/p/claude-cowork-for-marketing-a-playbook
5. **Zapier PMM homepage prototyping** — a voice/positioning skill + the live homepage +
   MCP context → HTML mockup in 15 minutes, evaluated before anyone opens Figma.
   [Deploy PDF] ch.4.

### 🧭 Product

1. **Stuart Miller's PM guide** — FIRSTHAND, the best single PM source. Research-synthesis
   skill with the anti-hallucination rule *"Never paraphrase a quote and present it as a
   direct quote"*; Jira→Now/Next/Later **needs your sequencing principles pasted in** or the
   agent *"invents a reasonable-sounding but wrong rationale"*; stakeholder-update tonal
   drift fixed by storing 3–4 past updates as tone reference; competitor tracking compounds
   after ~4 quarters. Gotchas: plan rubber-stamping, scheduled-task drift when folders
   evolve, connectors failing silently.
   https://haverin.substack.com/p/claude-cowork-for-product-managers
2. **Lenny Rachitsky: 320 podcast transcripts → themes in ~15 minutes** — FIRSTHAND;
   the transcripts are open-sourced (mirrored at
   https://github.com/ChatPRD/lennys-podcast-transcripts), a ready-made practice corpus.
   https://x.com/lennysan/status/2010840092865413254
3. **Plugin stacking** — Anthropic PMs layer productivity + data + sales + product plugins
   in one session: *"PRDs get written from real data and customer context… The PM's job
   shifts from gathering to deciding."* [Deploy PDF] ch.5.
4. **Dean Peters' Product-Manager-Skills repo** — 77 real PM skill files (PRDs, opportunity
   solution trees, battlecards, market sizing), installable and readable — students can
   study actual skill construction. https://github.com/deanpeters/Product-Manager-Skills
5. **Cat Wu (Head of Product, Claude Code)** — surface split: chat as thought partner, Code
   for prototypes, *"Cowork is where I do everything else."*
   https://claude.com/blog/product-management-on-the-ai-exponential

### 🧾 Finance

1. **Anthropic's own finance team: ~150 skills in a version-controlled GitHub repo**,
   written by accountants, not IT. Five production workflows with verbatim prompts,
   including the **three-tier AR reconciliation** ("exact matches / timing differences /
   unexplained variances requiring investigation" — *"Specifying 'three-tier' forces Claude
   to categorise rather than summarise"*) that surfaced a **$33k discrepancy live on a
   webinar**; ERP-migration validation of a year of data in ~20 seconds; design rules:
   skills must flag exceptions explicitly, any journal-entry skill needs a **checking tab
   confirming debits equal credits**, human review mandatory before anything touches the
   ledger. *"Full auditability is still a work in progress."*
   https://www.anthropic.com/webinars/how-finance-teams-use-claude-cowork ·
   https://www.cfoconnect.eu/resources/finance-insights/anthropic-finance-team-claude-skills/ ·
   https://www.cfoconnect.eu/resources/finance-insights/finance-workflows-anthropic-automates-claude-prompts/
2. **Mike Dion's month-end close (F9 Finance)** — FIRSTHAND with a full prompt trail: four
   sequences (interactive dashboard in 90 seconds; variance commentary — *"Flag anything
   over 5% variance and use the actual dollar amounts — don't round"*; a slider-driven
   forecast tool; a 5-slide CFO deck written as speaker notes). **Close-day package: 4 hours
   → under 1 hour.** His caveats: the human owns risk framing, materiality and GAAP
   language; the AI ordered the story by magnitude, not strategic importance.
   *"Cowork did most of the building. I did the thinking about what to do with what it built."*
   https://www.f9finance.com/claude-cowork-month-end-close/
3. **Christian Sanford's live reconciliation demo (CFO Connect, ~500 attendees)** —
   intercompany reconciliation across 4 entities / 3 currencies producing a controller-ready
   JE upload sheet **with a built-in validation tab**: *"If you're having to manually do all
   the checks yourself, it defeats the value."* Meta-move: he asked Claude **Chat** to write
   the Cowork prompt first.
   https://www.cfoconnect.eu/resources/event-recaps/claude-for-finance-teams/
4. **The intern-training rebuttal** — FIRSTHAND both directions (r/ClaudeAI): an accountant
   found Cowork slow and error-prone; a CPA replied *"Treat a project like you're training
   an intern… Once it's learned how to do something figure out a way to have it cross check
   itself"* — automating "seriously long and complex monthly journal entries". The
   **skill flywheel** from the same thread: do the task once supervised, *"tell it to write
   a skills doc to record what it learnt,"* upload it, iterate to reliability.
   https://www.reddit.com/r/ClaudeAI/comments/1rd7b9i/am_i_using_claude_cowork_wrong/
5. **"Document as we go → one-shot next month"** — FIRSTHAND (r/ClaudeAI FP&A): first
   budget-vs-actuals run is supervised and self-documenting; the doc becomes the repeatable
   monthly play.
   https://www.reddit.com/r/ClaudeAI/comments/1r4gljv/finance_and_fpa_use_cases_with_claude_code_and/

### Cross-role: rollout, adoption, and honest limits

- **The adoption ladder (L0–L4)** — chat Q&A → real deliverable from files → encode as a
  skill → bundle + schedule → admin-provisioned department plugin. *"The job of a deployment
  is to get every user one level higher than they are now."* [Deploy PDF] ch.2.
- **The 90-second cold-start rule** — *"If someone opens Claude Cowork and doesn't know what
  to do, they close it. If they open it, type /morning-briefing, and get something useful in
  ninety seconds, they come back tomorrow."* [Deploy PDF] ch.3.
- **Pilot design** — 2–3 champion teams (one team is one data point); *"'Hours saved per
  week' is measurable. 'Transformation' is not"*; the signal a pilot works is champions
  writing their own skills. [Deploy PDF] ch.3–4.
- **Failure stories worth teaching** (all cited in `research/usage-community.md`): the
  iCloud stub wipe — Cowork `cp -a` + `rm -rf` on folders whose iCloud files were 0-byte
  local stubs, so the copies were empty and the originals gone
  (https://www.reddit.com/r/ClaudeAI/comments/1rwxnxe/claude_cowork_nuked_my_icloud_drive_documents/);
  connectors that *"pull only the first few hundred or thousand rows"* and *"update without
  warning"* (https://go9x.com/blog/claude-cowork-review); *"Claude will occasionally present
  wrong numbers with complete confidence"*
  (https://ai.elevationcapital.com/blogs/claude-cowork-for-finance).
- **Stale-claim warning for course maintainers:** several community sources predate the
  Aug-2026 web/mobile/cloud releases — launch-era claims like "no Projects", "no memory",
  "desktop must stay open for scheduled tasks" are **outdated** (cloud sessions run
  schedules with the device off; note Enterprise defaults cloud sessions OFF, Team ON:
  https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans).
  Do not import them as current facts.

---

## Application map — what to change in the course

| # | Finding | Target lesson | Change |
|---|---|---|---|
| 1 | Bryant's rubric scoring + "test territory, adjust weights" | `30-sales-plays` | Add a seventh play / callout: propensity scoring with the calibrate-then-scale pattern, cited |
| 2 | Supervised→scheduled progression ([Deploy PDF]) | `62-schedules` | Name the pattern: keep a validation step until repeated checks pass, then schedule — sharpens "run it manually three times first" |
| 3 | Correction-to-skill rule + proofreading-skill-first (Ian Chan) | `60-skills`, `61-lab-skill` | Quote the rule as the trigger for when to write a skill; cite the 1–2 days → 2 hours result |
| 4 | Fresh-instance audit agent that test-registers (Custer) | `70-verify` | Cite as the real-world proof of the fresh-eyes pattern the course already teaches |
| 5 | Skill flywheel: "write a skills doc of what you learnt" | `61-lab-skill` | Add as an alternative Step 2: have the session that just did the job write the SKILL.md from its own run |
| 6 | Three-tier reconciliation wording + checking-tab rule + $33k catch | `56-lab-reconciliation`, `54-finance-plays` | Adopt "three-tier" framing in the brief; cite the checking-tab rule and the live catch |
| 7 | Mike Dion close prompts ("don't round", story-order caveat) | `55-lab-variance`, `57-lab-board-pack` | Add "use actual dollar amounts — don't round" to the commentary brief; teach the magnitude-vs-strategic-importance review check |
| 8 | Anti-hallucination skill rules + sequencing principles (Miller) | `51-lab-discovery`, `53-lab-roadmap-update` | Add the never-paraphrase-a-quote rule and the paste-your-sequencing-principles instruction |
| 9 | Gap-analysis-first prompt | `11-the-brief` | Add as a named pattern next to "have Claude write your brief" |
| 10 | Adoption ladder L0–L4 + 90-second cold-start + measurable pilots | `71-rollout` | Frame the 30-60-90 around the ladder; add the cold-start rule and 2–3-champion-teams guidance |
| 11 | iCloud stub wipe | `02-lab-setup`, `92-troubleshooting` | Add: cloud-sync folders may hold placeholder stubs — a "copy" of a stub is empty; sync ≠ backup |
| 12 | Lenny's open transcript corpus | `51-lab-discovery` | Offer as an optional real-data alternative to the generated practice transcripts |
| 13 | Plugin stacking for PMs | `50-product-plays` | Extend the plugin tip: stack productivity + data + sales + product in one session |
| 14 | "Claude builds the what; I do the why" / "I did the thinking about what to do with what it built" | `00-welcome` or `70-verify` | Use as the course's one-line ownership framing, attributed |
