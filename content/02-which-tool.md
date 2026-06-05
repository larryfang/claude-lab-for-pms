# Chat vs Desktop vs Cowork vs Code

There are four "front doors" to Claude. They share the same brain but feel different. New users get confused here, so let's make it crystal clear.

## The four front doors

| Front door | What it is | Best for | Needs |
|---|---|---|---|
| **Claude on the web** (claude.ai) | Chat in your browser | Quick questions anywhere, any device | Any plan |
| **Claude Desktop** | The same chat, as an app on your computer | Daily driver; required for the powerful stuff | Free app; paid plan for advanced features |
| **Cowork** | An *agent* inside Claude Desktop that does multi-step tasks on your files | "Here's a whole job — go do it and bring me the result" | Paid plan, desktop app |
| **Claude Code** | An agentic coding tool for developers (and brave PMs) — terminal, IDE, desktop, or web | Building/editing real software & automations | Paid plan |

:::concept The key distinction: question vs. job
- **Chat** (web or Desktop) answers a **question** or does one step at a time. You stay in the driver's seat, turn by turn.
- **Cowork** and **Claude Code** take on a **job**. You describe an outcome, they plan and execute multiple steps, and you come back to finished work.

Same brain. Different amount of *autonomy* you hand over.
:::

:::note Two more doors, for completeness
PMs mostly use the four above. There's also the **Claude API** (for developers wiring Claude into their own software) and the **mobile apps** (iOS/Android) for Claude on the go. You won't need either for this lab.
:::

## A dead-simple rule for picking

Ask yourself one question: **"Is this a quick back-and-forth, or a whole task I'd rather not babysit?"**

- ✏️ *"Help me word this email" / "summarize this doc I pasted"* → **Chat** (Desktop)
- 🤖 *"Read these 12 files, pull the key risks, and build me a summary deck"* → **Cowork**
- 🛠️ *"Build me a small working tool / edit this codebase"* → **Claude Code**

:::tip You'll live in Claude Desktop
For this lab, **Claude Desktop is home base.** Chat lives there, Cowork lives there, and that's where you'll add Connectors, Skills, and Plugins. On your phone, use the **Claude mobile app** (iOS/Android); the desktop app is where the magic happens. If you only install one thing, install the desktop app.
:::

## "So when do I use Cowork instead of just chatting?"

Great question — it's the one everyone asks. A rule of thumb:

> Use **Cowork** when the task is **high-effort, multi-step, repeatable, and touches real files** — and you'd be happy to walk away and check the result later.

Examples that scream "Cowork":

- "Organize this messy Downloads folder of vendor PDFs and give me a one-page comparison."
- "Every Monday at 8am, pull last week's shipped tickets and draft our changelog."
- "Take this 60-page contract and these 3 reports and produce a risk summary in a Word doc."

Examples that are just **chat**:

- "What's a good name for this feature?"
- "Rewrite this paragraph to be more concise."
- "Explain OAuth to me like I'm five."

Don't worry about memorizing this — you'll *feel* the difference once you've done the Cowork lab in Module 4.

## Where do "Skills, Connectors, Plugins" fit?

Those aren't *front doors* — they're **upgrades** that work across Chat **and** Cowork. We devote all of Module 3 to them. For now, just file them under "things that make any door more powerful."

## Knowledge check

```quiz
Q: Your colleague asks: "I need Claude to read 8 research files and produce a synthesized findings doc while I'm in a meeting." Which door?
- Claude on the web
- A plain chat in Claude Desktop
+ Cowork
- Claude Code
> Multi-step, touches multiple files, produces a finished deliverable, and you want to walk away — that's textbook Cowork.

Q: What's the relationship between Chat and Cowork?
- They are completely separate apps from different companies
+ Both live in Claude Desktop and share the same underlying model; Cowork just takes on whole multi-step jobs autonomously
- Cowork replaced Chat entirely
- Chat is for PMs, Cowork is only for engineers
> Same brain, different autonomy. Chat = turn-by-turn; Cowork = "here's the whole job."

Q: For this lab, what's your home base?
+ Claude Desktop
- A spreadsheet
- The terminal
- Claude on the web only
> Desktop hosts Chat and Cowork, and it's where Connectors, Skills, and Plugins get added. Install it if you haven't.
```

:::try Time to touch the keyboard
Enough theory. Next is your **first hands-on lab** — three guided prompts in Claude Desktop. Open the app and let's go.
:::
