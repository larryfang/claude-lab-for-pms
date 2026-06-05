# Setup & The Terminal Fear-Buster

Let's install Claude Code and run your first commands. Go slowly, tick each box, and remember: **you can't break your computer by typing the commands in this lesson.**

:::note Two ways in
The simplest install is the **one-line native installer** (no extra tools needed) — that's our main path. If you already use **Node.js**, the **npm** method works too; we list it as the alternative.
:::

## Step 1 — Open a terminal (1 min)

:::lab Find your terminal
- [ ] **macOS:** press `⌘ + Space`, type **Terminal**, hit Enter
- [ ] **Windows:** open **Windows Terminal** or **PowerShell** from the Start menu
- [ ] You should see a window with a blinking cursor waiting for text. That's it. That's the terminal.
:::

:::tip How the terminal works
You **type a command**, press **Enter**, and it **prints a response**. To run any command below: click the **Copy** button, paste into the terminal, press Enter. That's the entire skill.
:::

## Step 2 — (npm path only) Check for Node.js (1 min)

*Skip this if you'll use the native installer in Step 3.* The **npm** install method needs **Node.js 18+**. To check:

```bash
node --version
```

- [ ] I ran it and saw a version number

**If you saw something like `v20.x` or higher** → you're set, skip to Step 3.

**If you saw "command not found" or a version below 18:**

:::details Install Node.js
- Go to **nodejs.org** and download the **LTS** version, run the installer, then **close and reopen** your terminal.
- Re-run `node --version` to confirm it now shows v18 or higher.
:::

## Step 3 — Install Claude Code (2 min)

**Recommended — the native installer** (no Node.js required; it also keeps itself updated):

```bash
# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash
```

On **Windows**, use PowerShell:

```bash
irm https://claude.ai/install.ps1 | iex
```

- [ ] It finished (some text scrolls by — that's normal)

:::details Alternative: install with npm (needs Node.js 18+)
If you already use Node, you can instead run:

```bash
npm install -g @anthropic-ai/claude-code
```

Hit a permission error (**EACCES**)? Don't reflexively `sudo`. Either use the native installer above, or follow the official "fix npm global permissions" guide (it points npm at a folder you own).
:::

:::note Install steps change
If neither command works, check **docs.claude.com → Claude Code → Set up** for the current command, then come back here.
:::

## Step 4 — Start Claude Code & sign in (2 min)

Let's make a practice folder and launch Claude inside it.

```bash
mkdir claude-code-lab && cd claude-code-lab
```

- [ ] That created a folder and moved into it (no output = success)

Now start Claude Code:

```bash
claude
```

- [ ] Claude Code started (you'll see a welcome / prompt)
- [ ] On first run, it asked me to **sign in** — I logged in with my Claude account (a browser may open)

:::details "command not found: claude"
- **Close and reopen** your terminal (the new command needs a fresh session), then try `claude` again.
- Still stuck? Your system's PATH may not include npm's global folder. The native installer (Step 3) sidesteps this.
:::

## Step 5 — Your first three commands (3 min)

You're in! Claude Code takes **plain English** *and* special **slash commands** (they start with `/`). Try these:

:::lab Three safe first moves
**1. Ask it what it can do** (just type English and press Enter):

```prompt
In one short paragraph, explain what you can help me do in this folder. I'm a non-technical PM.
```

- [ ] I got a friendly explanation

**2. See the built-in help:**

```bash
/help
```

- [ ] A list of commands/options appeared

**3. Have it create a file** (and approve the action when asked):

```prompt
Create a file called hello.txt that contains a short, encouraging note to a PM trying Claude Code for the first time.
```

- [ ] Claude asked permission to write the file, I approved, and `hello.txt` was created
- [ ] I opened the folder and saw the real file
:::

:::concept You just crossed the line
You ran a terminal tool, signed in, and made Claude create a real file with plain English. The "scary terminal" is now just another window you can use. Everything from here is the fun part.
:::

:::tip Handy commands to remember
- `/help` — see what's available
- `/clear` — start a fresh conversation (clears context)
- type plain English any time — that's the main way you'll work
- press `Ctrl + C` to stop something or exit
:::

```quiz
Q: If you install Claude Code with the **npm** method, what does it require?
+ Node.js 18+ (the native installer needs none of this)
- Photoshop
- A graphics card
- Microsoft Excel
> The npm path needs Node.js 18+ (`node --version`). The recommended native installer doesn't require Node at all.

Q: You typed `claude` and got "command not found." Best first move?
+ Close and reopen the terminal, then try again (the new command needs a fresh session)
- Reinstall your OS
- Give up
- Buy a new computer
> A fresh terminal session usually picks up the newly installed command. If not, the native installer avoids PATH issues.

Q: When Claude Code wants to create or change a file, it…
+ Asks your permission first — you review, then approve
- Does it silently and hopes for the best
- Emails your manager
- Can't create files
> You stay in control; Claude Code requests permission for actions. Read, then approve.
```

:::try Build something real
Setup done — the hard part is behind you. Next lesson you'll vibe-code an actual working tool you can use at work.
:::
