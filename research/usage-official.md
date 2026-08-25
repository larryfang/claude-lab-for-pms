# Claude Cowork — real usage from official & primary sources

Researched 2026-08-25. Scope: anthropic.com, claude.com, support.claude.com, Anthropic webinars, Anthropic-published PDF guide, plus CFO Connect recaps of Anthropic finance-team webinars (primary-adjacent: Anthropic staff presenting, verbatim prompts). Every claim carries a URL.

Key primary documents:
- **"Deploying Claude across your organization: How Anthropic uses Claude Cowork"** (23-page official PDF, dated 2026-04-29) — https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/69f24d3e09b921b92403774e_Claude-Deploying-Claude-Across-Your-Organization-04292026.pdf (linked from https://claude.com/blog/new-guide-deploying-claude-across-the-enterprise-with-claude-cowork). Cited below as **[Deploy PDF]**.
- Blog: marketing ops — https://claude.com/blog/how-anthropics-marketing-operations-team-uses-claude-cowork-to-automate-reporting-and-campaign-builds — **[MktOps]**
- Blog: sales leader — https://claude.com/blog/how-an-anthropic-sales-leader-uses-claude-cowork-to-run-a-4-000-account-book — **[Sales4000]**
- Blog: enterprise readiness — https://claude.com/blog/cowork-for-enterprise — **[EntBlog]**
- Blog: usage data — https://claude.com/blog/how-people-are-using-claude-cowork — **[UsageBlog]**
- Webinars: marketing (https://www.anthropic.com/webinars/how-anthropics-marketing-team-uses-claude-cowork), finance (https://www.anthropic.com/webinars/how-finance-teams-use-claude-cowork), sales (https://www.anthropic.com/webinars/how-anthropics-sales-leader-runs-his-week-with-claude)

---

## 1. SALES

### 1.1 Travis Bryant — Head of US Mid-Market GTM, Anthropic (4,000-account book)
Source: [Sales4000]; webinar https://www.anthropic.com/webinars/how-anthropics-sales-leader-runs-his-week-with-claude

Three weekly workflows, all Cowork scheduled skills:

1. **Daily call prep.** Inputs: Google Calendar + Salesforce + BigQuery. A scheduled skill scans the calendar each morning, pulls each account's spend data and pipeline status, and leaves a brief waiting before the meeting starts. Contributes to ~90 min/day of micro-optimizations.
2. **Friday forecast.** Inputs: Salesforce opportunity records and commits, BigQuery token spend, internal docs. Scheduled skill assembles a single-page web report (top-line metrics, deals, movers/decliners, forecast rollup) deployed to an internal link before the Monday call. ~3 hours/week saved. His division of labor: "Claude builds the what; I do the why."
3. **Overnight account propensity scoring.** Inputs: the 4,000-account list + web research + Salesforce + BigQuery. Claude scored every account overnight against two five-dimension rubrics (tech: agent opportunity, internal transformation, AI commitment, white space, industry fit; industries: knowledge-worker density, public AI commitments). Output: numerical scores, written per-dimension rationales, and an interactive dashboard (territory pie slices, ranked accounts, use cases, comparable case studies). Claimed equivalent effort: "hundreds of hours across RevOps, FP&A, and marketing."

Prompting pattern (verbatim from post): "None of the prompts were technical. The pattern was: tell Claude what dimensions to score on, run a test territory, check the output, adjust the weights."

### 1.2 Anthropic sales team — the sales plugin in production
Source: [Deploy PDF] ch.5 "Sales"

- Problem framing: "Reps spent more time documenting work than doing it... Thirty minutes of prep for a call you might get fifteen minutes of useful conversation out of, multiplied across a book of hundreds of accounts." Context scattered across Salesforce, email, Gong recordings, Slack.
- The sales plugin encodes how the team's best sellers work as **five skills**: morning briefing, call prep, post-call follow-up (drafts the email and updates the opportunity), competitive intelligence, asset creation.
- Impact: morning briefing organizes the day in ~2 minutes; call prep that took 30 minutes now runs in the background during the previous call.
- **Salesforce auto-update skill** (one rep's build): Claude takes the call context, fills every required field, writes description/use cases/notes/next steps in the rep's format. "He started with a validation step on every update. After enough manual checks confirmed Claude was getting it right, he removed the validation and lets it run. That progression, run it supervised, then run it scheduled, is the Level 2 to Level 3 move, and it saves hours per week."
- **Ticket filing hack:** copy a customer Slack thread into Cowork, ask it to summarize, create the ticket, post to the finance-tickets channel after approval — 30 seconds vs 3–5 minutes.
- **Bulk fix:** a teammate bulk-corrected a field that was wrong across hundreds of Salesforce records — "the kind of fix that would otherwise be a painful manual afternoon or a ticket to ops."
- An account executive built a **book-of-business dashboard** (credit usage, per-account ARR, momentum indicators, drill-downs) he uses multiple times a day; his manager uses it across every rep on her team. (From the finance/data section — enabled by a company-wide data skill.)

### 1.3 Official Sales plugin (installable)
Source: https://claude.com/plugins/sales
Commands: `/call-summary` (notes/transcript → structured summary + action items + draft follow-up), `/forecast` (weighted best/likely/worst from CSV or pipeline description), `/pipeline-review` (health, stale deals, weekly action plan). Plus skills for account research, call prep, daily briefings, outreach drafting, competitive intel. "Every command works standalone with web search and your input, and gets supercharged when you connect your CRM, email, and other tools."

---

## 2. GTM / MARKETING

### 2.1 Ian Chan — Anthropic marketing operations (weekly metrics report)
Source: [MktOps]

- **Workflow:** scheduled task runs **Sunday evening**: Claude reads the previous week's review doc and meeting transcripts, checks Slack (sales focus), queries the data warehouse; outputs a folder with metrics tables and suggested focus areas. Monday morning Ian confirms/adjusts the narrative focus; Claude expands with supporting detail, generates the leadership slide from the same data, and converts follow-ups into Asana tasks.
- **Skills built:** a *prep* skill (assembly, headlines, expansion), a *proofreading* skill ("verifies every number against source"), an *action-items* skill (Asana).
- **Time saved:** "Previously 1–2 days weekly; now up to 2 hours."
- **Rules quoted:** "When you find yourself correcting Claude on the same thing more than once, that feedback belongs in a skill." Claude flags mismatches instead of guessing (it flagged post-reorg sales reporting gaps). Recommendations: "Build a proofreading skill first"; "Ask Claude to reflect" on instruction clarity after early runs; "Lean on scheduled tasks."

### 2.2 Annabel Custer — Anthropic campaign operations (event builds)
Source: [MktOps]

Multi-skill agent architecture over a Slack intake channel:
- **Dispatcher skill** reads the intake channel hourly, routes requests to specialist skills, prevents duplication.
- **Event-build skill**: end-to-end setup across Salesforce, HubSpot, Swoogo, email tools — CRM campaign, marketing-automation workflow, event platform, email drafts, landing page, integrations.
- **Audit skill**: a *fresh Claude instance* tests the registration flow and checks the confirmation email arrived in Gmail before marking tasks complete (caught bugs like wrong city names in confirmation emails).
- Also: webinar-landing-page, apply-to-attend, approval-support (scheduled email cadence), data-import (list scrubbing) skills, and a **manager agent** that diagnoses workflow misfires and proposes adjustments.
- Flow: Dispatcher → specialist skill → audit agent → human review → complete.

### 2.3 Austin Lau — Anthropic growth marketing (three weekly Cowork workflows)
Source: https://www.anthropic.com/webinars/how-anthropics-marketing-team-uses-claude-cowork (with Emily Holman, Product Marketing; recorded 2026-06-04)

1. **Morning briefing** — "pulls from Slack, Gmail, and your ad platforms overnight so the day's priorities are waiting when you sit down."
2. **Google Ads search-term audit** — mines the account, identifies negative keywords *with reasoning*, and waits for human approval before implementing. (Teachable human-in-the-loop pattern.)
3. **Live reporting dashboard** — team-accessible, drill-down by channel, replacing manual data pulls.

### 2.4 Austin Lau — earlier Claude Code workflows (GTM person using Code)
Source: https://claude.com/blog/how-anthropic-uses-claude-marketing

- **Figma plugin for ad variants**: prompt quoted: "I'm working in Figma. I really want to solve this challenge of repetitive copy and pasting. Can you help me build a Figma plugin?" Built in 45–60 min; batch updates went from 30 minutes to 30 seconds.
- **`/rsa` slash command** for responsive search ads: requests campaign data + copy samples + keywords, cross-references brand-tone Skills, generates 15 headlines + 4 descriptions, validates character counts, outputs an upload-ready CSV (manually reviewed). Lesson: "You don't need to know how to code. All you need to know is how to explain your challenge."
- Team-level metrics from the same post: influencer marketing 100+ hours/month saved on scripts; case studies drafted in 30 min vs 2.5 h; digital marketing 5x productivity YoY; product marketing 5–10 h saved per launch; partner marketing 40% less trade-show prep.

### 2.5 Zapier — Joe Stych, Head of Product Marketing (homepage messaging prototyping)
Source: [Deploy PDF] ch.4 sidebar "Zapier: Skills that travel between projects"

Workflow: give Claude the existing homepage as baseline, load a custom skill encoding the team's voice/positioning intent/page-structure conventions, point it at the new direction. Claude navigates the live page, identifies core modules, generates an HTML mockup aligned to the new positioning — enough fidelity to evaluate copy direction before anyone opens Figma. Verbatim: "I connected Claude Cowork to our homepage, a custom skill with our PMM guidelines, and our internal tools through MCP so it could pull from Slack threads, Glean searches, whatever context it needed... After 15 minutes I'm sharing it with our team to build on." Framed as "a Level 2 asset doing Level 4 work."

### 2.6 Official Marketing plugin
Source: https://claude.com/plugins/marketing
Commands: `/draft-content`, `/campaign-plan`, `/brand-review`, `/competitive-brief`, `/performance-report`, `/seo-audit`, `/email-sequence`. Connectors: Slack, Canva, Figma, HubSpot, Amplitude, Ahrefs, Klaviyo. Brand voice/style guide configured locally and enforced across outputs.

---

## 3. PRODUCT

### 3.1 Cat Wu — Head of Product, Claude Code, Anthropic
Source: https://claude.com/blog/product-management-on-the-ai-exponential

- Splits her tooling: Claude.ai chat as thought partner; Claude Code for prototypes/evals/scripts ("Hundreds of hours of prompting... not a single line of code written by hand"); **Cowork "is where I do everything else"** — inbox zero, tracking/acting on a todo list, creating slide decks, understanding the history of a decision by searching Slack, booking work travel.
- PM craft shifts named: short sprints with "side quests"; "prototype-first thinking" replacing documentation-first; revisit shelved features on each model release; "do the simple thing that works" ("the simpler your implementation, the easier it is to swap in new capabilities").

### 3.2 Anthropic PM team — plugin stacking
Source: [Deploy PDF] ch.5 "Product management"

- Problem: "a decision made in a meeting that nobody wrote down, a customer insight from a sales call that never made it into the PRD." Claude previously "lacked the organizational context to say anything useful" about core PM work.
- **The unlock is plugin stacking**: layer the *productivity* plugin (personal context + calendar), the *data* plugin (live analytics), the *sales* plugin (customer insights from calls/tickets), and the *product* plugin (PRD structure + roadmap methodology) in one session.
- Impact: "PRDs get written from real data and customer context rather than generic templates... The PM's job shifts from gathering to deciding."
- Compounding effect: "a customer complaint from the sales plugin shapes the priority call in the product plugin, grounded in the usage data from the data plugin."

### 3.3 Official Product Management plugin
Source: https://claude.com/plugins/product-management
Commands: `/write-spec` (PRD from problem statement: user stories, prioritized requirements, success metrics), `/roadmap-update` (Now/Next/Later, quarterly themes, OKR-aligned), `/stakeholder-update` (audience-tailored), `/synthesize-research`, `/competitive-brief`, `/metrics-review`. MCP connectors: project trackers, chat, knowledge bases, design tools, analytics, feedback systems.

---

## 4. FINANCE

### 4.1 Anthropic finance team — ~150 shared skills, five production workflows
Sources: webinar https://www.anthropic.com/webinars/how-finance-teams-use-claude-cowork (Lisa To, Head of Finance Systems & Transformation Office; Tim Ross, Finance AI Product Lead; recorded 2026-06-02); CFO Connect recaps of Anthropic presentations: https://www.cfoconnect.eu/resources/finance-insights/anthropic-finance-team-claude-skills/ and https://www.cfoconnect.eu/resources/finance-insights/finance-workflows-anthropic-automates-claude-prompts/ ; [Deploy PDF] ch.5 "Finance and strategy"

Infrastructure: ~**150 shared Claude skills in a version-controlled GitHub repo**, distributed as workspace plugins; written by accountants and FP&A analysts, not IT. Two skill types: *foundational* (teach Claude table schemas/column definitions in plain language so non-technical staff query the warehouse without SQL) and *workflow* (step-by-step procedures).

Five workflows (with verbatim prompts from the CFO Connect prompt write-up):
1. **AR-to-GL reconciliation.** Loads open invoices + AR aging detail (two Excel files), matches at invoice level, builds a variance bridge, outputs an exception report for controller review; live demo surfaced a **$33k discrepancy**. Prompt: "Compare these two data sets [paste AR sub-ledger] and [paste GL extract] and identify: 1. Exact matches, 2. Timing differences likely to resolve within [X days], 3. Unexplained variances requiring investigation. Format as a three-tier reconciliation report... Flag any items over [threshold] for immediate escalation." Lesson: "Specifying 'three-tier' forces Claude to categorise rather than summarise."
2. **FP&A revenue movers.** Connects to BigQuery, decomposes MoM revenue change by source/segment, surfaces largest customer movements, produces a leadership-ready Google Slides deck. Prompt begins: "You are an FP&A analyst preparing month-over-month revenue variance commentary for a CFO presentation... Output format: one executive summary paragraph, followed by a three-row table (driver / impact / status)."
3. **ERP migration validation (NetSuite→Workday).** Batch-validates historical data: "One year of data validated in approximately 20 seconds" vs hundreds of manual hours. Lisa To: "We can cover a lot more data set as you might even have capacity to do, and then you sample and validate as much as you want."
4. **Master data governance.** Conversational intake for cost-center/account changes: validates against hierarchies, lists affected reports/dashboards, checks naming conflicts, flags child accounts, confirms CFO sign-off requirement per policy, routes for approval, generates audit trail.
5. **Scheduled reporting.** Daily revenue briefs and weekly reports run on schedule with no manual prompting; triggers via calendar/Slack/email (Zapier).

Tim Ross's **five-step execution model** for a Cowork skill: understand the ask → plan the steps → execute across files and tools → verify the output internally → deliver the finished result.

Design rules stated: skills must **flag exceptions explicitly** (missing data, mismatched amounts, untraceable sources); any skill producing journal entries needs a **checking tab confirming debits equal credits**; **mandatory human review** before anything touches the ledger, leadership comms, or external parties. Tim Ross: "Your best preparer writes the procedure down once in plain language and it runs the same way for everyone, every time. This knowledge gets versioned, not lost when somebody moves on." Skill build time: 1–2 hours for a well-documented workflow. The 150-skill library "emerged organically," not as planned infrastructure. Anthropic is "transparent that full auditability is still a work in progress."

[Deploy PDF] adds the data side: dashboard builds went from **weeks to hours**; the team encoded its four most re-run queries as skills (insight agent, financial statements, variance analysis "that explains deltas rather than only flagging them", HTML dashboard builder), then shipped a **company-wide data skill** (schema, naming conventions, table quirks) so "a PM or a sales manager can ask a question of the warehouse without knowing SQL." Alerts moved "from 'what happened?' to 'what do we do about it?'" because Claude surfaces the likely driver alongside the metric.

Webinar scope: rolling forecast updates, variance commentary, flux analysis, board packet assembly — "Cowork handles first-pass narrative and supporting schedules so the team's time goes to judgment calls that actually need a human."

### 4.2 Official Finance plugin
Source: https://claude.com/plugins/finance
Commands: `/journal-entry` (accruals, fixed assets, prepaids, payroll with proper debits/credits), `/reconciliation` (GL vs subledger/bank/third-party), `/income-statement` (period-over-period), `/variance-analysis` (waterfall driver decomposition), `/sox-testing` (SOX workpapers). MCP to ERPs/warehouses/spreadsheets, or pasted data. Stated limitation: all outputs require review by qualified financial professionals.

### 4.3 Finance agent templates + Claude for Excel (customer-facing)
Source: https://www.anthropic.com/news/finance-agents

Ten managed-agent templates: Pitch Builder, Meeting Preparer, Earnings Reviewer, Model Builder, Market Researcher, Valuation Reviewer, General Ledger Reconciler, Month-End Closer, Statement Auditor, KYC Screener. Connectors: FactSet, S&P Capital IQ, MSCI, PitchBook, Morningstar, LSEG, Daloopa, plus new D&B, Fiscal AI, Financial Modeling Prep, Guidepoint, IBISWorld, SS&C Intralinks, Third Bridge, Verisk, Moody's MCP app.
**Claude for Excel** GA: builds models from filings, audits formulas across linked workbooks, runs sensitivity analyses; context persists across Excel→PowerPoint→Word. Customer claims: Citadel (analysts "build models, separate signal from noise, and pressure-test work"), FIS ("compresses AML investigations from days to minutes"), Walleye Capital ("100% of employees use Claude Code" at a 400-person hedge fund), BNY, Carlyle, Mizuho, Hg.

---

## 5. CROSS-FUNCTION: ROLLOUT PATTERNS & OTHER PRIMARY CASES

### 5.1 The adoption ladder (Levels 0–4) — [Deploy PDF] ch.2
- L0: chat Q&A ("Summarize what was decided in #project-atlas this week").
- L1: a real deliverable from your files ("Here's the deal folder. Draft an investment memo.").
- L2: encode it as a skill (a `/variance-analysis` skill that knows your tables, thresholds, CFO's format).
- L3: bundle + schedule skills (a morning briefing firing at 7:30am pulling calendar, pipeline, overnight Slack).
- L4: an admin-provisioned plugin per department (Anthropic's Legal plugin: intake triage, regulatory monitoring, exec updates).
- "The job of a deployment is to get every user one level higher than they are now."

### 5.2 Rollout playbook — [Deploy PDF] ch.3–4
- Month 1 evaluate (security review, 2–3 champion teams, connect 1–2 core systems); months 2–3 pilot (real workflows, weekly check-ins, "the signal a pilot is working isn't just hours saved — it's champions starting to write their own skills"); months 4–6 scale (admin-provisioned plugin marketplace).
- Pilot with **two or three champion teams rather than one** — "a single team gives you one data point."
- "Define success before you start... *'Hours saved per week'* is measurable. *'Transformation'* is not."
- Cold-start rule: "if someone opens Claude Cowork and doesn't know what to do, they close it. If they open it, type /morning-briefing, and get something useful in ninety seconds, they come back tomorrow."
- "Provision plugins at the admin level. When individuals adopt AI tools without oversight you get shadow AI."
- First-use-case picker: high-volume/high-repetition; information-dense synthesis; bottleneck-creating work; "expertise-dependent but process-driven" (pays back most).
- Starting points by function with metrics: Legal = NDA review vs playbook (turnaround, queue depth); Finance = variance analysis with root-cause commentary (close-to-narrative time); Sales = pre-call research (prep time per call, rep-reported confidence); Product = PRD drafting from feedback+analytics (time to first reviewable draft); HR = performance review drafting; Marketing = campaign brief → asset draft (concept-to-review time, revision rounds).
- New-hire effect: "A new hire who installs the department's plugin on day one starts at Level 2, not Level 0."

### 5.3 Anthropic Legal — 742 Jira tickets & a plugin in an afternoon — [Deploy PDF] ch.1/3/5
- The Legal plugin "was built by a product lawyer in an afternoon by pointing Claude at the team's existing memos, risk frameworks, and policy documents." It is open-sourced on GitHub ("it's system instructions, not case law").
- The team pointed Claude at **742 Jira tickets** (the full legal intake backlog) and asked what the work actually looked like; "the analysis reshaped how the team structures intake: which categories can be templated, which need a human from the start, and where the queue was backing up and why." (Also in [EntBlog].)
- Regulatory monitoring across dozens of jurisdictions "went from reading everything and hoping you catch what matters to reading what Claude flagged." Biweekly exec legal updates went from "the better part of a day" to a fraction.
- Contract review anecdote (ch.4): "When your legal team watches a four-hour contract review happen in forty-five minutes on a real contract they recognize, they'll become champions, too."

### 5.4 Customer cases (named, official) — [EntBlog] + [Deploy PDF]
- **Zapier** (Larisa Cavallaro, AI Automation Engineer): connected Cowork to org database + Slack + Jira to surface engineering bottlenecks → dashboard, team-by-team analyses, prioritized roadmap, copied by Product and Design Ops. "The barrier between 'having an idea' and 'shipping something' has collapsed."
- **Jamf** (Matt/Nick Benyo): turned a seven-facet performance-review spreadsheet into a 45-minute-to-build guided interactive skill — "What would have required a team of engineers building a custom React app, Claude Cowork delivered in 45 minutes." Key: the HR team had run the process by hand enough times to know what "good" looked like. Repeated for vendor reviews and incident response; "tasks that previously required a BI tool or an engineer's help, people are now doing themselves in minutes."
- **Airtree** (Jackie Vullinghs, Partner): board prep pulling from portfolio-company Drive, Slack updates, competitor news, cross-referenced against previous prep. "Skills built by one person could be used by everyone. Claude Cowork became shared firm infrastructure."
- **Thomson Reuters** (Joel Hron, CTO): "Claude Cowork helps teams do work at a scale that was hard to justify before. The human role becomes validation, refinement, and decision-making. Not repetitive rework." "The skeptics converted not after a demo but after a couple hours of running real workflows."

### 5.5 Aggregate usage data — [UsageBlog]
1.2M anonymized sessions: business process & operations 33.4% (pulling scattered updates into a single report, onboarding checklists, reconciling spreadsheets); content creation 16.4% (drafts, decks, posts, proposals). No individual sessions read — aggregate only. Useful for "what people actually do" slide, not for named stories.

### 5.6 Practical constraints & admin gotchas — support.claude.com
Source: https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans
- Two session types: **cloud** (cross-device, scheduled tasks run with laptop closed) vs **local** (isolated VM, designated folder access). Enterprise defaults cloud OFF; Team defaults ON.
- Approval model: "automatically approve" vs per-task approval; write-capable connector tools need per-task approval unless admin enables "Always allow" (default OFF).
- Prompt-injection risk officially "non-zero": avoid sensitive files, monitor actions, limit browser access to trusted sources.
- Web fetch/search run server-side and **don't follow network egress restrictions**; local desktop session history is stored locally outside retention policies and can't be centrally deleted; network-policy changes don't apply to active conversations.
- OpenTelemetry → SIEM (tool calls, file access, approval decisions); admin plugin catalogs support auto-install/available/required/hidden per group. ([EntBlog] adds RBAC/SCIM, group spend limits, Analytics API for skill/connector invocations, Zoom MCP connector.)

### 5.7 Chat vs Cowork vs Code — official framing — [Deploy PDF] ch.1
- Chat: quick exchanges (dense-PDF takeaway, sanity-check ahead of a meeting, make sense of a cold Slack thread).
- Cowork: "knowledge work that takes real effort... When the output is a deliverable rather than an answer, this is the surface." Named exemplar projects: a folder of customer interview transcripts → themed findings doc; competitive landscape from a dozen vendor sites; a scheduled Friday-morning weekly revenue report dropped into a shared folder.
- Code: full dev environment; "Claude Cowork doesn't try to replace it."
- "The three share the same Claude underneath; what changes is the workspace around it."
- Plugin anatomy: skills (markdown workflow files), subagents (autonomous end-to-end monitors, e.g. untracked-revenue checker every Friday), connectors (MCP; "connectors respect your existing permissions; Claude sees what the user sees").

### 5.8 Meta-prompting (finance community + Anthropic-adjacent)
Source: https://www.cfoconnect.eu/resources/finance-insights/finance-workflows-anthropic-automates-claude-prompts/
Verbatim meta-prompt: "You are an expert prompt engineer specialising in finance workflows. Help me create an optimal prompt for [specific finance task]. Include: a clear role definition, specific output format requirements, handling of edge cases and exceptions, and the four elements of a well-structured finance prompt: input format, output structure, calculation logic, and exception handling." Claimed ~50% debugging-time reduction; independently converged on by three practitioners.

---

## Course-ready nuggets — the 10 most teachable details

1. **The correction-to-skill rule** (marketing ops): "When you find yourself correcting Claude on the same thing more than once, that feedback belongs in a skill." Pair with "build a proofreading skill first — verify every number against source." https://claude.com/blog/how-anthropics-marketing-operations-team-uses-claude-cowork-to-automate-reporting-and-campaign-builds
2. **The supervised→scheduled progression** (sales rep's Salesforce auto-updater): keep a validation step on every run until repeated manual checks pass, then remove it and schedule it — the canonical Level 2→3 move. [Deploy PDF] p.18
3. **Non-technical scoring pattern** (Travis Bryant): "tell Claude what dimensions to score on, run a test territory, check the output, adjust the weights" — then run the full 4,000 accounts overnight. https://claude.com/blog/how-an-anthropic-sales-leader-uses-claude-cowork-to-run-a-4-000-account-book
4. **The adoption ladder L0–L4** with the deployment goal "get every user one level higher than they are now" — ready-made course structure. [Deploy PDF] pp.8–9
5. **The 90-second cold-start rule**: a new user who types `/morning-briefing` and gets value in ninety seconds comes back tomorrow; one who faces a blank prompt closes the app. [Deploy PDF] p.14
6. **Dispatcher → specialist → fresh-instance audit → human review** (event ops): a separate Claude instance actually registers for the event and checks Gmail for the confirmation email before marking done. Teaches verification as an agent, not a vibe. [MktOps]
7. **Three-tier reconciliation prompt** (finance): "Specifying 'three-tier' forces Claude to categorise rather than summarise" + mandatory exception flagging + debits-equal-credits checking tab. Full verbatim prompt available. https://www.cfoconnect.eu/resources/finance-insights/finance-workflows-anthropic-automates-claude-prompts/
8. **Plugin stacking for PMs**: productivity + data + sales + product plugins in one session → "PRDs written from real data and customer context; the PM's job shifts from gathering to deciding." [Deploy PDF] p.19
9. **Measurable pilot definition**: "'Hours saved per week' is measurable. 'Transformation' is not" — plus the starting-points-by-function table (use case + what you'd measure per role). [Deploy PDF] pp.11–12
10. **Concrete headline metrics for motivation slides**: 1–2 days → 2 hours weekly marketing report [MktOps]; ~3 h/week forecast + "hundreds of hours" territory scoring [Sales4000]; a year of ERP migration data validated in ~20 seconds; $33k discrepancy caught in a live AR recon demo; Jamf's 45-minute skill replacing "a quarter of engineering time" (https://www.cfoconnect.eu/resources/finance-insights/anthropic-finance-team-claude-skills/, [Deploy PDF] p.12).

Bonus for the safety/limits module: official gotchas — prompt-injection risk is "non-zero," web tools bypass network egress policies, local session history can't be centrally deleted, and Anthropic's own finance team says human review is non-negotiable and full auditability is "still a work in progress." (support.claude.com article + CFO Connect recap.)
