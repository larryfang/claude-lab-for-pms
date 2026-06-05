# The Directory & Marketplaces

You know *what* Connectors, Skills, and Plugins are. Now: where do you **get** them? Mostly one place — the **Directory** — plus marketplaces for the bundles.

## The Directory

Anthropic unified everything into a single **Directory** (at **claude.ai/directory**, also reachable from inside Claude via **Customize**). It has three tabs that should look familiar now:

| Tab | What you'll find |
|---|---|
| **Connectors** | Click-to-add links to apps & data (Atlassian, Google Drive, Slack, GitHub…) |
| **Skills** | Ready-made playbooks you can switch on |
| **Plugins** | Role-ready bundles (sales, finance, legal, engineering, marketing…) |

:::tip One-click power
Browsing the Directory is the fastest way to feel how much Claude can do. You'll see connectors for tools you already use and plugins tailored to whole job functions — most are a single "Add" or "Install" away.
:::

## Marketplaces (for plugins)

Plugins are distributed through **marketplaces** — catalogs you can add. A few things to know:

- A **Knowledge Work** marketplace is included by default, covering common functions (sales, finance, legal, marketing, HR, engineering, design, operations, data).
- Anthropic offers additional curated marketplaces (e.g. **Financial Services**, **Legal**, **Life Sciences**).
- You can add a marketplace **from a GitHub repository** — that's how community and company-internal plugins get shared. The official one lives at `github.com/anthropics/claude-plugins-official`.

:::concept Why "marketplaces" plural?
So trust and curation can be scoped. Your company can run a **private** marketplace of approved, internal plugins; Anthropic curates official ones; the community shares more via GitHub. Same install flow, different sources.
:::

## Trust & safety (read this)

Installing a plugin or connector grants real capabilities — sometimes access to your data or the ability to run actions. Treat it like installing any software:

:::warning Before you install
- **Prefer trusted sources** — Anthropic-built or **verified** plugins, or your company's official marketplace.
- **Check what it asks for.** A connector will request specific permissions (e.g. "read your Jira"). Read them.
- **Be cautious with random GitHub plugins** the way you'd be cautious with a browser extension from an unknown author.
- **When in doubt, ask your IT/security team** — especially for anything touching company data.
:::

## Mini-lab: explore the Directory

:::lab 5-minute Directory tour
- [ ] Open the **Directory** (via **Customize** in Claude, or visit **claude.ai/directory**)
- [ ] Browse the **Connectors** tab — find **3 tools you personally use** (Drive? Slack? Atlassian?)
- [ ] Browse the **Plugins** tab — find a plugin for **your role or function**
- [ ] Open one plugin and read **what it bundles** (which skills? which connectors? any commands?)
- [ ] Notice any **verified** / Anthropic-built badges on plugins — that's a trust signal
- [ ] *Optional:* install one **low-risk** plugin (e.g. a writing/formatting one) just to see the flow. You can remove it after.
:::

:::note Don't install Atlassian yet
You'll connect Atlassian properly — with the full safety walkthrough — in **Module 5**. For now, just *look* around so the Directory feels familiar.
:::

```quiz
Q: Where do you go to browse and install connectors, skills, and plugins?
+ The Directory (claude.ai/directory, also via Customize in Claude)
- The terminal
- A spreadsheet
- You email Anthropic for each one
> The Directory is the unified catalog with three tabs: Connectors, Skills, Plugins.

Q: What's the safest signal that a plugin is trustworthy?
- It has a cool logo
+ It's Anthropic-built / verified, or from your company's official marketplace
- It has lots of emoji in the description
- It's the first result
> Curation and verification matter — installing grants real capabilities. Prefer verified or internal sources, and check requested permissions.

Q: How can a company share its own approved, internal plugins?
+ By running a private marketplace (e.g. added from a GitHub repository)
- It's impossible
- By emailing zip files to everyone
- Only Anthropic can publish plugins
> Marketplaces can be private/company-scoped. Team & Enterprise admins can distribute approved plugins to their org.
```

:::try Module complete!
That's the whole concept layer — MCP, Connectors, Skills, Plugins, Subagents, and where to get them. Mark it done for your **🧠 Concept Master** badge. Now the fun really starts: **Cowork**, where Claude stops answering and starts *doing*.
:::
