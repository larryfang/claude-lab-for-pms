# Claude Cowork in the wild — community & secondary sources
Research date: 2026-08-25. Scope: Reddit, HN, LinkedIn, X, Substack/newsletters, practitioner blogs. Official anthropic.com/claude.com sources are covered by a sibling agent; one official item (Travis Bryant) is noted because it surfaced via community search and is heavily cited by practitioners.

Credibility legend: **FIRSTHAND** = author describes their own use, with specifics. **DEMO** = live demonstration to an audience. **VENDOR/LISTICLE** = content marketing or aggregated guide (still useful for prompts/patterns, but claims unverified).

---

## SALES

### S1. Solo operator: full sales assistant on a Mac mini — u/itsalidoe (r/AI_Agents)
- **Who:** Reddit user itsalidoe, builds sales systems for small businesses.
- **Workflow:** OpenClaw + Claude Cowork running on an always-on Mac mini. Four workflows: (1) inbox monitoring — flags warm leads/replies out of ~200 morning emails; (2) prospect research — plain-English ICP ("HVAC companies in the Chicago suburbs with a website and phone number") pulled from Google Maps, cleaned into a callable list; (3) personalized first-touch emails referencing the prospect's website/LinkedIn; (4) meeting prep — LinkedIn, news, job postings, tech stack in ~30 seconds vs 15 minutes.
- **Verbatim:** ICP prompt above; lessons quoted below.
- **Outcomes:** replaces $500–2,000/mo tool stack for ~$20–35/mo API usage.
- **Gotchas/lessons (verbatim):** "Skills are everything. don't try to prompt your way through complex workflows… the difference is night and day." "Start with one workflow and get it solid before adding more. I tried to set up everything at once and it was a mess." "The outreach quality depends heavily on how well you define your ICP upfront. garbage in, garbage out." Commenter ArgonWilde pushed back on data sovereignty ("you are still uploading everything to Anthropic's servers").
- **URL:** https://www.reddit.com/r/AI_Agents/comments/1rr57uk/i_turned_openclaw_and_claude_cowork_into_a_full/ (full walkthrough: https://overtoncollective.com/blog/openclaw-for-sales-complete-guide)
- **Credibility:** FIRSTHAND (self-promotional edge; one commenter called it "daily slop quota", another confirmed the meeting-prep value from own experience).

### S2. Anthropic sales leader running a 4,000-account book — Travis Bryant
- **Who:** Travis Bryant, Head of US Mid-Market GTM at Anthropic (official blog, but the single most-cited sales example in community writing — sibling agent covers detail).
- **Workflow:** three cadences: daily scheduled call-prep skill (BigQuery spend + Salesforce pipeline into a brief waiting each morning; a second skill books missing conference rooms from Google Calendar); Friday forecast skill (Salesforce Forecast tab + BigQuery token spend + internal docs → single-page web report deployed to an internal link before Monday); annual propensity scoring — two 5-dimension rubrics (tech vs industries), Cowork ran overnight scoring 4,000 accounts with web research + Salesforce + BigQuery, then built an interactive dashboard with per-dimension rationale and hover use-cases.
- **Outcomes:** forecast saves ~3 hrs/week; scoring "ran for hundreds of hours across RevOps, FP&A, and marketing" at prior companies — "I did it in one night."
- **Lessons:** "The scheduler was the bigger unlock than the skill itself. Once prep stops being a slash command I have to remember and starts running on its own, I stop forgetting it." Iteration pattern: score one territory, spot-check ("I think D4 is a little heavy; bring it down a bit"), run the next. "Claude builds the what; I do the why."
- **URL:** https://claude.com/blog/how-an-anthropic-sales-leader-uses-claude-cowork-to-run-a-4-000-account-book
- **Credibility:** FIRSTHAND but official/vendor-published.

### S3. KOL/prospect list building while away — u/Similar-Kangaroo-223 (r/ClaudeCode)
- **Who:** Reddit user doing influencer/GTM outreach.
- **Workflow:** Cowork + Claude in Chrome + Ralph Wiggum plugin. (1) define "high-value KOL" criteria (niche, follower range, engagement style, posting frequency); (2) Cowork navigates X live and pulls 5 real profiles; (3) human calibrates — kept 3, rejected 2, explained why; (4) Ralph Wiggum loops the calibrated filter to 50 profiles unattended.
- **Outcomes:** 50 researched, filtered accounts waiting on return.
- **Gotchas:** "even when I explicitly ask for 100 profiles, a one-shot prompt returns 4-5" — the loop plugin is what scales it; plain claude.ai can't reach live X/Reddit.
- **URL:** https://www.reddit.com/r/ClaudeCode/comments/1r9il3r/heres_how_i_use_claude_cowork_ralph_wiggum_plugin/
- **Credibility:** FIRSTHAND. Teachable pattern: calibrate on 5, then scale.

### S4. LeadIQ sales workflows guide — Daniela Villegas
- **Who:** Growth Marketing Lead at LeadIQ (sales-intelligence vendor).
- **Workflow:** six workflows around the official Sales plugin: /call-summary (transcript → action items → follow-up email draft → CRM payload → approval), /pipeline-review (CSV → stale-deal flags → prioritized weekly plan), /forecast (weighted, 3 scenarios), plus auto-triggered account research, call prep, competitive intel. MCP connectors: Salesforce, HubSpot, Dynamics 365, Gmail, Google Calendar.
- **Claims:** "One sales manager reported saving over ten hours in his first week and a half"; post-call work 15–20 min → 2 min; account research 45–60 min → 5–10 min.
- **Gotchas:** outputs require human approval before send; desktop-bound; not autonomous prospecting ("It doesn't make cold calls").
- **URL:** https://leadiq.com/blog/claude-cowork-for-sales
- **Credibility:** VENDOR — mark claims as unverified; workflow anatomy is accurate and concrete.

### S5. SyncGTM five sales skills — Kushal Magar
- **Who:** SyncGTM (enrichment vendor) employee, April 2026.
- **Workflow:** five skills: account research (company snapshot + 90-day news + job-posting signals + top-3 contacts + one-sentence angle), personalized email drafts (A/B subjects, trigger-anchored first line, single CTA), CRM hygiene (missing fields, dupes, 14-day inactivity, write-back), pipeline analysis (10-day inactivity, overdue closes, single-threaded deals → markdown table by deal value), pre-call prep brief.
- **Claims:** research 2–3 min vs 20–45 manual; "reply rate went from 4% to 13% in 8 weeks" (unnamed source).
- **Gotchas (useful for teaching):** skipping the research step yields generic emails; missing enrichment connection → hallucinated contact data; skills need quarterly updates as messaging evolves.
- **URL:** https://syncgtm.com/blog/claude-code-sales-skills
- **Credibility:** VENDOR/LISTICLE — claims attributed to unnamed people.

---

## GTM / MARKETING

### M1. Ruben Hassid's public reversal: "Files and folders suck"
- **Who:** Ruben Hassid, consultant to enterprise teams (NYC); his Cowork guides claim ~20M views.
- **Workflow evolution:** originally taught an elaborate file-and-folder workspace; publicly retracted it. New model: **Skills** (slash-command reusables like /linkedin-post, shareable across teams) + **Projects** (client/campaign workspaces with persistent file access). Spreadsheet workflow: template that demands assumptions upfront, exports straight to Google Sheets via connector — no local files.
- **Why he reversed (verbatim):** "Files and folders suck"; "Folders are leaking" (Claude accessed folders despite restrictions) and maintenance became unsustainable at team scale.
- **Cost lessons:** edit previous prompts instead of sending follow-ups (follow-ups reload the whole history); Sonnet for quick tasks, Opus for complex; fresh session every ~20 messages; pairs Wispr Flow dictation with Cowork for richer context.
- **URL:** https://ruben.substack.com/p/learn-80-of-claude-cowork-in-20-minutes ("I was wrong about Claude")
- **Credibility:** FIRSTHAND — and a rare public workflow-abandonment story. Excellent course material on setup churn.

### M2. Four named marketers in Coupler.io's roundup
- **Who/workflows:** (a) **Nika Tamaio Flores** (Coupler.io) — scheduled daily one-page funnel brief, weekdays 10:30am: pull funnel metrics via Coupler MCP → compute conversion rates → detect anomalies → assemble briefing. (b) **Patrick Schaber** (Approachable AI newsletter) — a "marketing operating system": CLAUDE.md orchestrator + brand.md + market-analysis.md + product-marketing.md foundation files; "Let's get started" triggers guided onboarding; generated Content Creator and Prospect Researcher skills. Gotcha: static files lack live performance data. (c) **Adina Timar** (Weflow) — weekly BOFU content plan chaining Coupler MCP (GSC/GA4) + AirOps MCP: pull data → check rankings → check inventory → suggest create/refresh → write to AirOps grids. (d) **Robert Gillespie** (Marketing with AI newsletter) — client performance reports from ad-platform/CRM CSVs against a template + example reports; "reports that used to take three or four hours come back in minutes," and by report 3–4 Cowork has learned formatting preferences.
- **URL:** https://blog.coupler.io/claude-cowork-for-marketing/
- **Credibility:** VENDOR roundup, but each example names a real practitioner (FIRSTHAND-by-proxy). Also notes Projects launched March 2026; Coupler MCP covers 400+ sources.

### M3. Creators' AI marketing playbook — five workflows with full prompts
- **Who:** thecreatorsai.com (aggregated guide, not personal account).
- **Workflows + verbatim prompts:** (1) brand voice guide from a content folder ("Read all files in this folder… Produce a brand voice guide as a Word document. Include: tone description, vocabulary we use and avoid, sentence structure patterns, and 5 before/after examples…"); (2) content repurposing (one webinar → 5 LinkedIn posts + 400-word newsletter + 10-min talk outline, "Keep the core argument consistent across all three"); (3) campaign brief with gap analysis first ("Before producing anything, list the information you found and any gaps that would weaken the brief. Wait for my response."); (4) content audit spreadsheet (file, date, topic, quality 1–5, keep/update/retire + reason) — "3-year audit completed in an afternoon vs one week"; (5) scheduled Friday digest of a saved-reading folder.
- **Gotchas:** "Break big tasks into stages, not one giant prompt"; review the vocabulary list ("that's where most voice guides go wrong"); no image generation; no memory between sessions; you can steer mid-task by typing corrections — "most people don't realise this is possible."
- **URL:** https://thecreatorsai.com/p/claude-cowork-for-marketing-a-playbook
- **Credibility:** LISTICLE/guide — prompts are course-ready even if outcomes are illustrative.

### M4. The Rundown: weekly marketing review that preps itself — Billy Howell
- **Who:** Billy Howell, AI educator, The Rundown University.
- **Workflow:** four-folder workspace (inputs/, working/, outputs/, skills/); three skills — input-gathering (Slack summaries, Gmail sales updates, GA revenue, Drive meeting notes → inputs/), reporting (drafts main report, leadership brief, Slack update, action items; "source all facts and flag mismatches between data sources"), publishing (Markdown → PDF + Google Slides, archive last week).
- **Verbatim prompts:** e.g. "Create a skill that prepares our weekly marketing review inputs. It should summarize last week's Slack messages, look at my Gmail for sales updates, check our revenue numbers in Google Analytics, pull in meeting notes from Google Drive, and save the summaries in inputs/." And: "Keep source-backed facts separate from interpretation, and flag anything that needs human approval before the final report."
- **Design principles:** gate final writing behind human approval; separate writing from publishing; after each run ask Claude what was wrong and promote fixes into permanent instructions.
- **URL:** https://app.therundown.ai/guides/build-a-weekly-marketing-report-that-runs-itself-in-claude-cowork
- **Credibility:** Instructional guide (not firsthand), but the skill architecture is the cleanest teaching version found.

### M5. Failure story: "watching someone parallel park a bus" — Beware the Default
- **Who:** Max Bernstein, Tam Nguyen, Zain Haseeb, Zain Merchant, testing Cowork days after launch.
- **What worked:** Downloads cleanup (127 forgotten .txt files organized in minutes); iMessage database analytics "worked unexpectedly well."
- **What failed:** multi-step Notion MCP workflow (connector searched for nonexistent tools, tried to bail out to the browser); browser-driven email unsubscribing (auth loops, "Permission pop-ups every few seconds like a toddler asking 'can I?'"); parallel content agents — six simultaneous agents burned 8% of the monthly token budget in one session.
- **Verbatim:** "A mess of pop-ups, failed connections, and the distinct feeling that you're watching someone parallel park a bus."
- **URL:** https://bewarethedefault.substack.com/p/lights-camera-friction
- **Credibility:** FIRSTHAND failure/friction account — early-days caveat (product has since matured), still teaches the simple-vs-multi-tool boundary.

---

## PRODUCT

### P1. Stuart Miller's PM working guide (Haverin Substack, May 2026)
- **Who:** Stuart Miller, PM, "Haverin about…" Substack.
- **Workflows:** (1) research-synthesis skill over /research transcripts: extract pain points → theme → count interviewee mentions → problem statements with direct quotes → flag low-confidence signals; output dated .docx; skill rule verbatim: "Never paraphrase a quote and present it as a direct quote." (2) Jira epic CSV → Now/Next/Later narrative with dependencies — must paste your sequencing principles or the agent "invents a reasonable-sounding but wrong rationale." (3) weekly stakeholder updates from /weekly — tonal drift toward generic exec voice; fix: store 3–4 past updates and instruct the skill to match tone. (4) longitudinal competitor tracking in /competitive — value compounds after ~4 quarters of the same analysis.
- **Gotchas:** "plan rubber-stamping" (approving Cowork's plan without reading it), deletion without safeguards, scheduled-task drift when folder structure evolves, connectors failing silently with degraded data.
- **URL:** https://haverin.substack.com/p/claude-cowork-for-product-managers
- **Credibility:** FIRSTHAND. The best single PM source found.

### P2. Lenny Rachitsky: 320 podcast transcripts in 15 minutes
- **Who:** Lenny Rachitsky (Lenny's Newsletter/Podcast).
- **Workflow:** pointed Cowork at a folder of all 320 podcast transcripts; asked for the 10 most important themes/lessons for product builders, then 10 counterintuitive truths; separately, the 10 most important skills for the AI age. Claude: "This is a substantial task - 320 podcast transcripts to analyze!" — done in ~15 minutes. Outputs included themes like "Activation Is Everything," "Storytelling as a Superpower," "Positioning Is Strategy, Not Marketing."
- **Follow-on:** he open-sourced all transcripts; Claire Vo mirrored them as .md with metadata on GitHub (https://github.com/ChatPRD/lennys-podcast-transcripts) — a ready-made corpus for course exercises.
- **URLs:** https://x.com/lennysan/status/2010840092865413254 · https://x.com/lennysan/status/2010884315794849901 · https://www.linkedin.com/posts/lennyrachitsky_testing-out-the-new-claude-cowork-i-asked-activity-7416652578362462208-NyMD
- **Credibility:** FIRSTHAND, high-profile.

### P3. Claire Vo (ChatPRD) — better outputs, worse UX
- **Who:** Claire Vo, CPO/founder of ChatPRD, quoted in Zvi Mowshowitz's roundup.
- **Findings:** "Despite its flaws, Cowork did create better outputs than straight Chat." Criticisms: asks approval too often for safe file operations; leaks confusing technical detail to non-technical users.
- **Also in the same roundup:** Tibor Blaho's limitation list at launch ("No project support, no memory between sessions, no sharing… App must stay open during tasks… Consumes more usage than regular chat") — note Projects shipped later (March 2026, per M2); John Wittle's non-technical mother "taking to it with quite a lot of enthusiasm."
- **URL:** https://thezvi.substack.com/p/claude-coworks
- **Credibility:** FIRSTHAND quotes aggregated by a careful secondary source.

### P4. Dean Peters' Product-Manager-Skills repo (shared artifact)
- **Who:** Dean Peters, PM coach/consultant (Productside).
- **What:** 77 PM framework skills for Claude Code/Cowork/Codex: 19 workflow skills (days–weeks), 27 interactive skills using an "Adaptive Decision Ladder" (3–5 contextual questions), 24 component skills (30–90-min deliverables): PRDs, user stories w/ acceptance criteria, opportunity-solution trees, battle cards, market sizing, end-of-life decisions. Premise: "Generic AI output is a PM's worst enemy." Installable via Claude Code plugin marketplace; CC BY-NC-SA.
- **URL:** https://github.com/deanpeters/Product-Manager-Skills
- **Credibility:** Real shared artifact — students can read actual skill files.

### P5. PM plugin month-long review — Mohit Aggarwal (Medium)
- **URL:** https://medium.com/@mohit15856/i-used-claude-coworks-product-management-plugin-for-a-month-honest-review-d38f25348a6d — fetch blocked (403); listed as a lead only, content unverified.

---

## FINANCE

### F1. Mike Dion's month-end close run (F9 Finance) — best documented finance walkthrough
- **Who:** Mike Dion, senior finance leader (entertainment/telecom), F9 Finance.
- **Workflow:** folder with P&L + POS files; four sequences with verbatim prompts: (1) interactive dashboard ("…build me an interactive dashboard that shows: (1) monthly revenue vs. budget by location as a bar chart, (2) sales by product category as a donut chart, (3) a table of the top 5 performing months by location. Include a location filter dropdown.") — 90 seconds; (2) variance commentary ("Write 3 to 5 bullet points of variance commentary per location, like a senior finance analyst explaining results to a CFO. Flag anything over 5% variance and use the actual dollar amounts — don't round.") then "Combine that into a single executive paragraph. Most important story first."; (3) driver-based forecast tool with three sliders, plus mid-conversation "Add a scenario save button so I can bookmark different combinations."; (4) 5-slide CFO deck written as speaker notes from two files.
- **Outcomes:** close-day package 4 hours → under 1 hour; deck needed only 2 edits.
- **Gotchas:** human still owns risk framing, materiality, GAAP language; AI ordered the story by magnitude rather than strategic importance; can't do complex multi-year Excel models or live ERP/GL connections; must explicitly say "Save this as a Word document in my folder."
- **Key line:** "Cowork did most of the building. I did the thinking about what to do with what it built."
- **URL:** https://www.f9finance.com/claude-cowork-month-end-close/
- **Credibility:** FIRSTHAND with full prompt trail — the single most course-ready artifact found.

### F2. CFO Connect live build — Christian Sanford (QuantFi)
- **Who:** Christian Sanford, co-founder of QuantFi, demoing to ~500 CFO Connect attendees.
- **Workflows:** (1) intercompany reconciliation of a shared-services invoice across 4 entities/3 currencies — notable two-step pattern: first asked Claude *Chat* "Help me build a prompt for Cowork to automate this reconciliation," then pasted the structured prompt + data into Cowork; output was a controller-ready JE upload sheet with entity assignments, GL mappings, debits/credits by currency, allocation methodology notes, and a built-in validation tab. (2) CRM-to-finance audit tool built in ~20 min flagging stale CRM entries, missing fields, inconsistent deal stages.
- **Design principle (verbatim):** "If you're having to manually do all the checks yourself, it defeats the value" — build the checking tab into the deliverable.
- **URL:** https://www.cfoconnect.eu/resources/event-recaps/claude-for-finance-teams/
- **Credibility:** DEMO, recapped by CFO Connect (community org). Related recaps: https://www.cfoconnect.eu/resources/event-recaps/ai-finance-automation-claude-code-zapier/
 and https://www.cfoconnect.eu/resources/event-recaps/claude-code-finance-workflows-revenue-recognition-portal/ (finance leader "Alex" built revenue-recognition automation in a month with no coding background).

### F3. r/ClaudeAI: "Finance and FP&A use cases" thread
- **Who/what:** u/saintforlife1 asked for real FP&A wins. u/dsfrsiojgifjlrmlgmsg: "I connected a Claude Code session up to our data warehouse, the QuickBooks API, and Google Drive. Then I walked it through updating our budget/forecast with actuals. First time around I had it document as we go and now I should be able to one shot budget vs actual and reforecast every month." (Data in BigQuery; "just ask Claude how to do it.") u/MissPassive: "I use Claude Code/skills to run all FP&A - connects to Intuit and Slack… run it on a separate iMac. Has completed 3 months flawlessly. Everything is automated. Get morning e-mail with my reports. I have zero prior experience." Skeptics in-thread: IT/data-governance blockers ("Feel like IT would block it from pulling data?"), corporate-environment requirement.
- **URL:** https://www.reddit.com/r/ClaudeAI/comments/1r4gljv/finance_and_fpa_use_cases_with_claude_code_and/
- **Credibility:** FIRSTHAND (anonymous; the "document as we go → one-shot next month" pattern is highly teachable).

### F4. r/ClaudeAI: "Am I using claude cowork wrong?" — accountant friction + CPA rebuttal
- **Who/what:** OP u/PomegranateSelect831 (accountant): "it was super slow, did make some errors, and took almost as long as I would to do tasks… doesn't seem super practical as of now for most white collar tasks." u/LaneKiffinYoga (CPA): "It's incredibly useful and you're likely using it incorrectly. Treat a project like you're training an intern. Then a staff. Once it's learned how to do something figure out a way to have it cross check itself and review its own work. I've been able to automate some seriously long and complex monthly journal entries." u/Glxblt76's skill-flywheel: do the task once with monitoring, "then you tell it to write a skills doc to record what it learnt in the session," upload it under Settings → Capabilities → Skills, and iterate until reliable. u/OddHome4709: hand it only tasks where "you can clearly define what done looks like" — write a spec, not a chat prompt; also notes revisiting system instructions every ~45 days because they go stale.
- **URL:** https://www.reddit.com/r/ClaudeAI/comments/1rd7b9i/am_i_using_claude_cowork_wrong/
- **Credibility:** FIRSTHAND both directions — ideal "expectations" material.

### F5. Elevation Capital's tactical finance playbook — Vartika Bansal
- **Who:** Vartika Bansal, AI Operations Partner, Elevation Capital (from a workshop with 100+ portfolio finance leaders).
- **Workflows (each with verbatim prompt in the post):** mutual-fund statement consolidation → JEs + MTM; 3-way ecommerce reconciliation (gateway vs bank vs order book, matched by Order ID, color-coded exceptions); MIS flux analysis → CFO narrative; debtors-ageing → tone-graduated dunning emails saved as Gmail drafts ("friendly tone for 1–30 days overdue, firm for 31–60"); driver-based 12-month model; GST/TDS reconciliation (GSTIN + invoice matching, 8 exception types, ITC-at-risk dashboard).
- **Prompt architecture taught:** Context → Task → Constraint → Format.
- **Gotchas (verbatim):** "Claude will occasionally present wrong numbers with complete confidence"; chain steps sequentially rather than one mega-prompt; driver model needs Opus, not Sonnet; data does transit Anthropic servers.
- **URL:** https://ai.elevationcapital.com/blogs/claude-cowork-for-finance
- **Credibility:** Workshop-derived playbook (semi-firsthand); no named client results.
- Related paywalled leads: Glenn Hopper's controls-first playbook (premise visible: treat Cowork "like part of your control environment from day one," it lives at the "artifact layer… Excel models, slide packs, PDFs, memos, trackers") https://glennhopper.substack.com/p/pro-edition-claude-cowork-in-a-finance ; AI CFO Office "I set up Claude Cowork as a CFO analyst" (workspace folder + 3 markdown files + 2 data exports, <15 min setup; rest paywalled) https://cfooffice.io/p/i-set-up-claude-cowork-as-a-cfo-analyst

---

## CROSS-ROLE: reviews, failures, and safety context

### X1. Data-loss stories (teach backups + scoping)
- **iCloud stub wipe — u/l6e (r/ClaudeAI):** asked Cowork to restructure iCloud Drive; it used `cp -a` then `rm -rf` on the old folders — but iCloud files were only local stubs, so it copied 0-byte references and deleted the real data. "Lesson learnt for me, #1 Apple iCloud is a sync service not a backup, and #2 keep Claude Cowork away from things without a backup!" https://www.reddit.com/r/ClaudeAI/comments/1rwxnxe/claude_cowork_nuked_my_icloud_drive_documents/ — FIRSTHAND.
- **11GB deletion on video + HN debate:** YouTuber's first-impression video showed Cowork deleting 11GB; HN commenters debated whether the "command history" Claude reported was itself hallucinated (u/slau: "As soon as you ask 'give me a list of all the commands that led to the deletion', isn't it extremely likely to just invent an rm in there?"). https://news.ycombinator.com/item?id=46597781 — SECONDARY.
- **Dan Abramov (Bluesky):** rm-hits-your-rollback story circulating from the launch thread: https://bsky.app/profile/danabra.mov/post/3mca3aoxeks2i (via HN https://news.ycombinator.com/item?id=46593022).

### X2. Reviews with concrete limits
- **go9x (Alexandre Kantjas):** invoices→spreadsheet, webinar→social clips, receipts→expense report; limits: rolling 5-hour session cap + weekly cap shared across Claude; desktop must stay open — "scheduled tasks only run while the app is open"; connectors "pull only the first few hundred or thousand rows" and "update without warning." https://go9x.com/blog/claude-cowork-review — FIRSTHAND-ish trainer review.
- **Pawel Jozefiak:** ~50% success rate on computer-use operations; sessions isolated with no persistent context; "a stripped and limited version of Claude Code"; verdict "getting close. Not there yet." https://thoughts.jock.pl/p/claude-cowork-dispatch-computer-use-honest-agent-review-2026 — FIRSTHAND (power user).
- **Simon Willison:** blog-drafts triage (46 drafts found, 44 web searches to verify publication status, 3 ready-to-publish identified). Calls out Anthropic's guidance that non-technical users should "Monitor Claude for suspicious actions that may indicate prompt injection" as unrealistic; credits the default VM/folder sandbox. https://simonwillison.net/2026/Jan/12/claude-cowork/ — FIRSTHAND, authoritative on the risk framing.
- **Delaney Miller (LinkedIn, legal):** doc uploads repeatedly failed, support took ~6 hours, "Claude tries to blame it on the user and their internet service" — canceled after one month. Commenter Jessica Brylo (jury consultant): "I'm using Claude cowork on a PC. It's been very glitchy but… it works when it's not glitching." https://www.linkedin.com/posts/delaneymiller_disappointment-with-claude-ai-part-ii-activity-7430382831844937728-KJB7 — FIRSTHAND failure.
- **r/ClaudeCode "top 3 most exciting moments" (u/Global-Art9608):** non-developer had Cowork read his own Reddit post, research the fix, then *drive Claude Code in the terminal* to build the app he'd failed at for 4 months — "Coworker did it in one hour." Skeptics in-thread: "isn't this just two terminals talking to each other?" https://www.reddit.com/r/ClaudeCode/comments/1qh78yf/tried_claude_cowork_last_night_and_it_was_a_top_3/ — FIRSTHAND enthusiasm + community pushback.

### X3. Security incidents worth a course caveat slide
- SharedRoot sandbox escape (local VM → Mac files; cloud execution default now mitigates; ~500k local users affected pre-patch): https://thehackernews.com/2026/07/claude-cowork-flaw-could-let-ai-agent.html · https://9to5mac.com/2026/07/27/claude-cowork-escaped-sandbox-on-mac-gain-full-access-to-all-files/
- PromptArmor: file exfiltration via indirect prompt injection: https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files

### X4. Prompt/pattern listicles (use with "unverified" label)
- r/promptingmagic "20 great Cowork prompts" (u/Beginning-Willow-801): Desktop Detox, Receipt Destroyer ("I have 23 receipt files in this folder. Extract all information (date, merchant, amount, category) and create an expense report spreadsheet… Flag anything over $100 for review."), Subscription Auditor ("Found $127/month I was wasting"), Positioning Knife, Audience X-Ray, Research Brief Machine. https://www.reddit.com/r/promptingmagic/comments/1qytgh9/the_complete_claude_cowork_playbook_cowork_is/ — LISTICLE, but prompts are usable seeds.

---

## Course-ready nuggets (top 10 teachable details)

1. **"Calibrate on 5, then scale" loop** — define criteria, have Cowork fetch 5 examples, human keeps/rejects with reasons, then loop to 50. (KOL thread: https://www.reddit.com/r/ClaudeCode/comments/1r9il3r/heres_how_i_use_claude_cowork_ralph_wiggum_plugin/)
2. **"Document as we go" → one-shot next month** — first run is supervised and self-documenting; the doc becomes the repeatable skill. (r/ClaudeAI FP&A: https://www.reddit.com/r/ClaudeAI/comments/1r4gljv/finance_and_fpa_use_cases_with_claude_code_and/)
3. **The skill flywheel, step by step** — finish a task, "tell it to write a skills doc to record what it learnt," upload under Settings → Capabilities → Skills, iterate to reliability. (https://www.reddit.com/r/ClaudeAI/comments/1rd7b9i/am_i_using_claude_cowork_wrong/)
4. **Mike Dion's four close-day prompts** — dashboard, variance commentary ("Flag anything over 5% variance and use the actual dollar amounts — don't round"), slider forecast tool, CFO deck as speaker notes; 4 hours → <1 hour. (https://www.f9finance.com/claude-cowork-month-end-close/)
5. **Build the check into the deliverable** — Sanford's reconciliation ships with a validation tab: "If you're having to manually do all the checks yourself, it defeats the value." Also his meta-move: ask Claude Chat to write the Cowork prompt. (https://www.cfoconnect.eu/resources/event-recaps/claude-for-finance-teams/)
6. **Gap analysis before drafting** — "Before producing anything, list the information you found and any gaps that would weaken the brief. Wait for my response." Catches conflicting stakeholder direction before it embeds. (https://thecreatorsai.com/p/claude-cowork-for-marketing-a-playbook)
7. **Scheduler > skill** — Travis Bryant: "Once prep stops being a slash command I have to remember and starts running on its own, I stop forgetting it." (https://claude.com/blog/how-an-anthropic-sales-leader-uses-claude-cowork-to-run-a-4-000-account-book)
8. **Anti-hallucination rules inside skills** — Stuart Miller's "Never paraphrase a quote and present it as a direct quote," plus pasting your sequencing principles so the agent doesn't "invent a reasonable-sounding but wrong rationale." (https://haverin.substack.com/p/claude-cowork-for-product-managers)
9. **The failure triad for the caveats module** — iCloud 0-byte stub wipe (backups!), connector rows silently truncated ("first few hundred or thousand rows"), and "Claude will occasionally present wrong numbers with complete confidence." (Reddit l6e thread; go9x review; Elevation Capital playbook — URLs above)
10. **Ruben Hassid's reversal as a setup lesson** — start with Skills + Projects, not elaborate folder trees ("Files and folders suck… Folders are leaking"); plus cost hygiene: edit prompts instead of follow-ups, fresh session every ~20 messages. (https://ruben.substack.com/p/learn-80-of-claude-cowork-in-20-minutes)
