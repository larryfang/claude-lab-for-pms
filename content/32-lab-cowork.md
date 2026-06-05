# Lab: Give Cowork a Real Job

Time to hand Claude a whole task and walk away. The clever part: **Cowork will create its own practice mess first**, so you don't need to find one. ~20 minutes, and genuinely fun to watch.

:::warning Safety first
Do this in a **brand-new, empty folder** you create just for this lab (e.g. `Cowork-Practice` on your Desktop). Cowork can create, edit, and move files in the folder you grant — so keep it isolated from anything you care about.
:::

## Set up (2 min)

:::lab Step 0 — Create a sandbox folder
- [ ] Create an empty folder named `Cowork-Practice` somewhere easy (Desktop is fine)
- [ ] Open **Claude Desktop → Cowork**
- [ ] Start a task and **grant Cowork access to the `Cowork-Practice` folder**
:::

## Part 1 — Make a mess (so we can clean it)

We'll ask Cowork to generate a realistic, messy set of files — the kind that piles up in any PM's life.

:::lab Step 1 — Generate practice files
Give Cowork this task:

```prompt
In this folder, create a realistic but FAKE messy collection of work files for a product manager, so I can practice organizing later. Make about 10 files with inconsistent names and mixed types, for example:
- 3 short "meeting notes" text files (different meetings, messy filenames)
- 2 small CSV files (e.g., a list of feature ideas with priority, and some fake weekly metrics)
- 2 "customer feedback" text files with a few quotes each
- 1 rough "roadmap draft" text file
- 1 "random todo" note
- 1 file with an unhelpful name like "doc1_FINAL_v3.txt"
Put a few sentences of plausible fake content in each. Don't organize them yet — leave them loose in the folder.
```

- [ ] Cowork created ~10 mixed files in my folder
- [ ] I opened the folder and confirmed they're really there
:::

:::tip Notice what just happened
Claude didn't *describe* files — it **created real files on your computer.** That's the Cowork difference. Take a beat to appreciate it.
:::

## Part 2 — The real job: organize + summarize

Now the task you'd actually want done.

:::lab Step 2 — Hand over the whole job
Give Cowork this outcome (not step-by-step instructions — describe the *result*):

```prompt
Now act as my operations assistant. Organize this folder into sensible subfolders (e.g., Meeting Notes, Data, Customer Feedback, Roadmap, Misc) and move the files in. Then create a single file called "FOLDER-SUMMARY.md" that contains:
1) An overview of what's in the folder now
2) A table listing each file, its new location, and a one-line description
3) The top 3 themes you noticed across the customer feedback
4) Any 3 follow-up actions you'd recommend
Show me your plan first, then do it.
```

- [ ] Cowork showed a **plan** before acting
- [ ] It created subfolders and **moved files** into them
- [ ] A `FOLDER-SUMMARY.md` appeared with an overview, a table, themes, and actions
- [ ] I opened `FOLDER-SUMMARY.md` and read it
:::

:::lab Step 3 — Level up the deliverable
Ask for a more "exec-ready" output to feel Cowork's range:

```prompt
Nice. Now also create a spreadsheet (CSV is fine) called "file-index.csv" with columns: filename, category, description, suggested_owner. Then write a 4-sentence summary I could paste into Slack to tell my team what changed.
```

- [ ] A `file-index.csv` was created
- [ ] I got a short, paste-ready Slack summary
:::

## Part 3 — Bonus: schedule it

:::lab Step 4 (optional) — A recurring task
Scheduled tasks are a Cowork superpower. Try saving one:

- [ ] Create a **scheduled task** such as: *"Every Friday at 4pm, re-scan this folder, update FOLDER-SUMMARY.md, and note anything new since last week."*
- [ ] Confirm it appears in your scheduled tasks list

(You can delete it after — this is just to see the capability.)
:::

## Reflect

Pause and notice the leap. You didn't copy-paste anything. You described **two outcomes** ("make a mess," "organize + summarize") and Claude planned, executed across many files, and produced real deliverables — a tidy folder, a summary doc, a spreadsheet, and a Slack blurb.

:::concept The Cowork loop
> **Describe the outcome → review the plan → let it work → check the deliverable → refine.**

It's the same "ask, read, steer, repeat" loop from chat — just operating on whole jobs and real files instead of single messages.
:::

:::warning Clean up
When you're done, you can delete the `Cowork-Practice` folder and any scheduled task you created. Nothing here touched your real work.
:::

```quiz
Q: What was the point of having Cowork generate fake files first?
+ To create a realistic, safe mess to practice on — and to show Cowork creates real files, not just chat text
- To test your typing speed
- Because Cowork can't read existing files
- To use up your quota
> It made the lab self-contained and demonstrated real file creation on your machine.

Q: Before letting Cowork loose on the organize task, what did you ask it to do?
- Nothing
+ Show its plan first, so you can review the steps before it changes files
- Delete everything
- Email you
> Reviewing the plan keeps you in control — essential when an agent can modify real files.
```

:::try Module complete!
You've directed an AI agent through a real, multi-step job. Mark it done for your **🤝 Cowork Captain** badge. Next: plug Claude into your actual tools with **Connectors** — starting with Atlassian.
:::
