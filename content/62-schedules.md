# Schedules & Parallel Subagents

Two capabilities that only exist in agentic tools: work that happens without you, and work that happens in parallel.

Both are genuinely powerful. Both have a specific failure mode worth understanding before you rely on them.

## Part 1 — Scheduled tasks

A saved job that runs on a cadence. Every Monday at 8am, every weekday at 6pm, every morning before you start.

### What is worth scheduling

| Lane | The Monday-morning job |
|---|---|
| 💼 **Sales** | Pipeline hygiene report: what went stale, what has no next step, what has a passed close date |
| 📣 **GTM** | Competitive watch: what changed on competitors' pricing and product pages since last week |
| 🧭 **Product** | Tracker reality check plus a draft stakeholder update, ready for you to edit |
| 🧾 **Finance** | Debtors and cash watch: what moved in the ageing, which promised payments arrived, which did not |
| **Every lane** | A digest of what changed in your systems since Friday |

### The three rules of scheduling

:::concept Rules for unattended work
**1. Read-only, or writes to a scratch folder.** A scheduled job runs with nobody reading the plan. Nothing that modifies a source system, sends an email, updates a CRM record, or transitions a ticket. It writes a draft; you decide.

**2. Run it manually three times first.** A brief with a small flaw produces one flawed output when you run it by hand, and a flawed output every week forever when you schedule it — while you gradually stop reading them.

**3. It must report its own failures.** The worst scheduled-task failure is silence. A connector token expires, and the job produces nothing, and you notice five weeks later that you stopped receiving something you had come to rely on.
:::

### Writing a schedulable brief

The difference from an interactive brief: it has to handle the boring cases, because you are not there to notice.

```prompt
Every Monday at 8am.

Produce a file `pipeline-hygiene-YYYY-MM-DD.md` in this Project's files, from the CRM, listing only what needs attention: deals with no logged activity in 21 days, deals with a close date in the past, deals with no next step, and deals where the amount or stage changed since last week's file in this Project.

Compare against last week's file. Report only the DELTA — what is newly a problem, and what has been fixed since last week. If the folder has no previous file, say "first run, no comparison available".

Start the file with a status line: the date, the number of records queried, the number returned, and OK or PROBLEM.

If you cannot reach the CRM, if it returns zero records, or if anything else prevents a normal run: still write the file, put PROBLEM in the status line, state exactly what failed, and write nothing else. Never write a normal-looking report from missing data.

If nothing needs attention, write "Nothing needs attention this week" and the status line. Do not pad the file.

Read-only. Never modify the CRM. Write only the report file, nothing else.
```

:::warning Scheduled runs cannot see your local folders
Scheduled tasks run remotely on Anthropic's infrastructure — they work with your **connectors and the files saved in your Claude account** (a Project is the natural home), and they *cannot* read or write a folder on your computer, like `output/weekly/`. So: create the schedule **inside a Project** and have it write its report to the Project's files, as the brief above does. If a job genuinely must touch local files, keep it manual and run it from the desktop app.
:::

Four things there earn their place:

- **Delta reporting.** A full report every week goes unread by week three. "What changed" gets read.
- **The status line.** One glanceable line telling you the run was healthy. This is your failure detection.
- **The explicit failure path.** *"Never write a normal-looking report from missing data"* prevents the silent-failure disaster.
- **The empty case.** "Nothing needs attention" is a real and valuable output. Without this instruction you get a padded report full of nothing, which trains you to stop reading.

:::warning The decay problem
Every scheduled job decays. Field names change, a project key is retired, a token expires, your team changes what a stage means. The job keeps running and slowly becomes wrong.

Put a calendar reminder to **review your scheduled jobs quarterly**. Read one full output properly, trace three numbers, check the status lines from the last month. Twenty minutes, four times a year.

If you have not read the last three outputs of a scheduled job, delete the job. It is not saving you time; it is generating unread files and false confidence.
:::

### Practical notes

- Scheduled tasks run remotely, on their cadence, even when your computer is asleep or the app is closed. Check the run history under **Scheduled** in the sidebar; when a run fails, the usual cause is an expired connector token, not your machine being off.
- Time zones matter. Check what your schedule is set relative to.
- Start with **one** scheduled job. Get it right, read its output for a month, then add a second.

## Part 2 — Parallel subagents

For bigger jobs, Cowork splits work across parallel workers — one per account, one per transcript, one per competitor. Mostly automatic; you get the speed.

### What you need to know

**They do not share context mid-run.** Twelve account briefs written by twelve subagents can each be good and the set inconsistent — different depth, different scoring, different interpretation of the same instruction.

**The fix is always the same instruction:**

```prompt
After completing all items, review them together as a set. Make the depth, structure, scoring and terminology consistent across all of them. Then tell me which ones you changed and why.
```

**They multiply, including the errors.** A brief with an ambiguity produces one confused document when it runs once and twelve confused documents when it fans out. Test a fan-out brief on **two** items before running it on forty.

### The fan-out pattern, properly

```prompt
For each of the 40 accounts in `accounts.csv`, produce `output/briefs/<account-slug>.md` using this exact structure: [SECTIONS].

Rules for every file: identical section headings and order; same length target; cite every claim to a source; where data is thin, write a short brief that says so rather than padding.

Process them in batches and, after every batch, apply the standards from the earlier files so the later ones match.

After all 40, produce `output/briefs/_index.md` — a comparison table — and then review the full set for consistency, listing what you had to normalise.

Before you start on all 40: do the first TWO and show them to me, so I can confirm the structure before you commit to the rest.
```

That last paragraph is the important one. **Two, check, then forty.** It costs a minute and saves the run.

:::tip When parallelism does not help
If each item depends on the previous one — a narrative, a cumulative model, an argument that builds — parallelism cannot help and will hurt, because the workers cannot see each other's output. Say so: *"Process these in order, and let each build on the previous one."*
:::

```quiz
Q: What is the worst way a scheduled task can fail?
- It produces too much output
+ Silently — the connector token expired, nothing was produced, and you notice five weeks later
- It runs at the wrong time
- It uses too much quota
> Which is why every scheduled brief needs a status line and an explicit failure path.

Q: Why does a scheduled brief need an explicit "if nothing needs attention" instruction?
- To keep files small
+ Otherwise you get a padded report full of nothing, which trains you to stop reading them
- Cowork errors on empty results
- To satisfy the schedule
> "Nothing needs attention this week" is a real and valuable output.

Q: Twelve fan-out briefs come back individually good but inconsistently scored. What fixes it?
- Running them again
+ An explicit consolidation instruction: review all outputs together and make depth, scoring and terminology consistent
- Reducing to six
- Using a Skill
> Parallel subagents do not share context mid-run. You have to ask for the pass.

Q: You have a fan-out brief for 40 accounts. What should you do first?
- Run all 40 and review
+ Run two, check the structure, then commit to the rest — a fan-out multiplies your brief's ambiguities by 40
- Split into four runs of ten
- Schedule it
> Two, check, then forty. It costs a minute and saves the run.
```

:::try Next
The last piece of leverage: Projects, memory, and handing a working setup to someone else.
:::
