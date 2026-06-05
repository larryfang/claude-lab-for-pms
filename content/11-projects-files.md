# Projects, Files & Artifacts

Three features that turn Claude from a clever chatbot into a *workspace*. Once these click, you'll never go back to re-pasting context.

## Projects: stop repeating yourself

A **Project** is a folder for related chats that share **context, files, and instructions**. Everything inside a project "knows" the same background.

:::concept The onboarding analogy
A new chat is a teammate who's never met you. A **Project** is a teammate you've **onboarded once**: you handed them the strategy doc, told them how you like things written, and now every conversation starts from that shared understanding.
:::

What you can put in a Project:

- **Custom instructions** — "Always write for a non-technical exec audience. Be concise. Use Australian spelling." Claude follows these in every chat in the project.
- **Files** — drop in your PRD template, brand guide, glossary, last quarter's roadmap. They're available to every chat in the project.
- **Memory** — the project accumulates relevant context over time so recurring work gets smarter.

:::tip PM project ideas
Spin up a project per workstream: **"Payments Roadmap"**, **"Customer Interviews Q3"**, **"Exec Comms"**. Load each with its templates and reference docs once, and every future chat starts halfway done.
:::

## Files: give Claude something to chew on

You can **attach files** to a single chat (paperclip/➕) or load them into a **Project** (available to all its chats). Claude can read PDFs, Word docs, spreadsheets, slides, images, text, and more.

> Rule of thumb: if you find yourself *describing* a document to Claude, **stop and just attach it.** Showing beats telling.

## Artifacts: living documents, not walls of text

When Claude produces something substantial — a doc, a table, a spec, even a little working web page — it often appears as an **artifact**: a separate, editable panel beside the chat, instead of being buried in the message stream.

Why that's great:

- You can **iterate** on it ("make the summary section shorter") and watch it update in place
- You can **copy or export** the finished thing cleanly
- It keeps the conversation readable while the deliverable stays front-and-center

## Mini-lab: create your first Project

:::lab Build a "Lab Sandbox" project
- [ ] In the sidebar, find **Projects** and create a **new project**
- [ ] Name it `Claude Lab Sandbox`
- [ ] Add **custom instructions**, e.g.:

```prompt
You are helping a product manager. Default to concise, skimmable output with clear headings and bullet points. When you make assumptions, list them at the end under "Assumptions." Ask a clarifying question if a request is ambiguous.
```

- [ ] (Optional) Upload any one work doc into the project
- [ ] Start a chat *inside the project* and ask:

```prompt
Based on my custom instructions and any files here, introduce yourself: what context do you have about me and how will you tailor your answers?
```

- [ ] Notice it reflects your instructions (concise, lists assumptions) without you repeating them
:::

:::note Projects vs. Cowork projects
Heads up: **Cowork** also has its own "projects" (persistent workspaces for multi-step jobs, covered in Module 4). Same idea — bundled context and memory — applied to the agent. Don't let the shared name trip you up.
:::

```quiz
Q: What's the main reason to use a Project instead of a one-off chat?
- Projects make Claude reply faster
+ A Project carries shared context, files, and instructions across all its chats, so you don't re-explain background every time
- Projects are the only place you can attach files
- Projects are required to use Claude at all
> Projects = onboarded teammate. Set context once; every chat in the project benefits.

Q: Claude produces a 2-page spec as an editable panel beside the chat. What's that called?
- A connector
- A plugin
+ An artifact
- A skill
> Artifacts are living, editable deliverables — you can iterate on them in place and export cleanly.
```

:::try Next
You've got a workspace. Now let's make sure what you *ask for* is excellent — that's prompting, and it's the highest-leverage skill in this lab.
:::
