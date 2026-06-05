# Troubleshooting & FAQ

When something misbehaves, start here. Expand the section that matches your problem.

## Quality & answers

:::details "Claude gave me a wrong or generic answer"
Almost always a **context** problem, not a Claude problem. Fixes, in order:
1. **Add context** — paste/attach the relevant doc instead of describing it.
2. **Be specific** — use the C.R.A.F.T. recipe (Module 2): context, role, ask, format, tone.
3. **Iterate** — the first answer is a draft; steer it ("more specific", "add sources", "shorter").
4. **Ask it to ask you** — end with "ask me up to 3 questions first" to catch wrong assumptions.
:::

:::details "It made up facts about my project / data"
Claude can't know your Jira, docs, or company unless you give it access. Either **connect** the relevant tool (Module 5) or **paste** the data into the chat. With no context, it may guess — that's a hallucination. Connect or paste, and it gets real.
:::

:::details "The output isn't in my team's format"
Two options: (1) **show an example** of the format you want in your prompt, or (2) better, capture it once as a **Skill** (Module 6) so Claude applies it automatically every time.
:::

## Cowork

:::details "I don't see Cowork in the sidebar"
Cowork needs a **paid plan** and the **Claude Desktop app**. Check: are you signed in on a paid plan? Is the desktop app **up to date**? If your plan/region is still rolling it out, you may need to wait or join a waitlist. You can still do Modules 1–3 and 6 meanwhile.
:::

:::details "Cowork changed a file I didn't want changed"
Cowork makes **real changes** in the folder you grant it. Prevention: always work on a **copy** / a dedicated practice folder, and **read the plan** it proposes before approving. If you use version control or your OS file history, you may be able to recover prior versions.
:::

:::details "A scheduled task didn't run"
Scheduled tasks run through the **desktop app**, so behavior can depend on your machine being on. Check the task is enabled, your machine wasn't asleep at the scheduled time, and the app is current.
:::

## Connectors (Atlassian & others)

:::details "403 Forbidden / 'not enabled' when using Atlassian"
Your Atlassian **admin needs to enable Rovo/MCP access** for your org or account. This is an organization policy gate, not a bug — send your admin the connector details and ask them to enable it.
:::

:::details "The OAuth login window never opened"
- Allow **pop-ups** for Claude.
- **Fully quit and reopen** Claude Desktop, then trigger an action again.
- (Advanced/config path) check the app logs for an auth URL you can open manually.
:::

:::details "Claude says it has no Atlassian tools"
1. Confirm the connector shows **connected** in **Customize → Connectors**.
2. Make sure you completed the **OAuth login**.
3. If you used the config-file path, you must **fully restart** the app (a reload isn't enough).
:::

:::details "'could not determine executable to run' (config-file path)"
That's an `npx` cache hiccup. Clear the npx cache (remove the `~/.npm/_npx` folder) and reopen Claude Desktop.
:::

## Skills

:::details "My skill never triggers automatically"
The **description** is the trigger. Make it say *what it does and when to use it*, including the exact phrases you'd type (e.g. "weekly update", "sprint summary"). Vague descriptions = skills that never fire. You can also invoke it explicitly by typing `/` and selecting it.
:::

:::details "My skill ZIP won't upload / isn't recognized"
- The **folder name must match** the `name` in your frontmatter (kebab-case).
- The file must be named exactly **`SKILL.md`**.
- Zip the **folder** (so the archive contains `your-skill/SKILL.md`), not just the loose file.
- `name` rules: lowercase letters, numbers, hyphens; ≤ 64 chars; no "anthropic"/"claude".
:::

## Claude Code

:::details "command not found: claude"
- **Close and reopen** your terminal (a new command needs a fresh session), then retry `claude`.
- If still missing, your PATH may not include npm's global bin folder — using the **native installer** avoids this entirely.
:::

:::details "node: command not found / version too old"
Claude Code (via npm) needs **Node.js 18+**. Install the **LTS** from nodejs.org, reopen your terminal, and check with `node --version`.
:::

:::details "npm install failed with a permission error (EACCES)"
Don't reflexively use `sudo`. Either use the **native installer** (no npm permissions needed) or follow the official "fix npm global permissions" guide (it points npm at a folder you own).
:::

## This lab site itself

:::details "Lessons won't load / I see a load error"
If you opened the files directly from disk (a `file://` address), browsers block loading the lesson files. Fixes:
- **Best:** view it where it's hosted (e.g. GitHub Pages) — just visit the URL.
- **Local preview:** run a tiny server from the project folder: `python3 -m http.server 8080`, then open `http://localhost:8080`. (See the README.)
:::

:::details "Copy buttons don't work"
Clipboard access can be restricted on some setups (e.g. insecure pages). Serving over **https** (or localhost) fixes it; otherwise the lab falls back to an older copy method. You can always select the text manually.
:::

:::details "My progress/badges disappeared"
Progress is saved in your **browser's local storage**. It resets if you: use a **private/incognito** window, clear site data, switch browsers/devices, or hit **Reset progress**. It's local to one browser by design (no account needed).
:::

## Privacy & safety

:::details "Is it safe to connect Claude to my work tools?"
Connectors act **as you**, **within your existing permissions**, via a **login you approve**, and you can **revoke** access anytime. That said: follow your **company's policy** for work data, prefer **verified** connectors/plugins, and review what each connection requests — especially **write** actions. When unsure, ask your IT/security team.
:::

:::details "Can Claude see my whole computer in Cowork?"
No — Cowork works in the **folder(s) you grant**, not your entire machine. Grant a specific working folder, and keep practice work in a dedicated/copy folder while you learn.
:::

:::tip Still stuck?
The official **Help Center** (support.claude.com) and **docs** (claude.com/docs) have the latest step-by-step guides, and the product updates often. If a screen looks different from this lab, trust the official docs for current specifics — the concepts here still apply.
:::
