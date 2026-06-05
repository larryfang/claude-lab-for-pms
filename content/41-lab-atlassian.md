# Lab: Connect Jira & Confluence

Let's plug Claude into Atlassian so it can work with your real Jira issues and Confluence pages. We'll show **two paths**: the easy no-code way (recommended) and the power-user way.

:::note What you need
- A **paid Claude plan** + **Claude Desktop**
- An **Atlassian Cloud** account (Jira and/or Confluence)
- That's it for Path A. Path B also needs **Node.js** installed.

The connector uses Atlassian's official **Rovo MCP server**, so authentication is a secure Atlassian login — no API keys to manage.
:::

:::warning A note on permissions
Your org's admin may need to **enable** Atlassian's MCP/Rovo access for your account. If you hit a "403 / not enabled" error later, that's the cause — see Troubleshooting at the bottom. Connecting only lets Claude see what **your** Atlassian account already can.
:::

## Path A — The easy way (no code) ✅ recommended

:::lab Connect via the Connectors UI
- [ ] Open **Claude Desktop → Customize → Connectors** (depending on your version, this may also appear under Settings/Directory)
- [ ] Look for **Atlassian** in the list. If it's there, click **Connect / Add**.
- [ ] If it's not listed, choose **Add custom connector** and paste Atlassian's remote MCP URL:

```text
https://mcp.atlassian.com/v1/mcp/authv2
```

- [ ] Click **Connect**. A browser window opens for **Atlassian login (OAuth)**.
- [ ] **Log in** to Atlassian and **approve** the requested access.
- [ ] Back in Claude, confirm the connector shows as **connected**.
:::

That's it — no files, no code. This is how PMs should connect 95% of tools.

## Path B — The power-user way (config file) 🛠️ optional

Prefer (or need) the manual route? You can register Atlassian as a remote MCP server in Claude Desktop's config. This is handy to understand, and it's the same idea, just hand-wired.

:::lab Edit the Desktop config
- [ ] In Claude Desktop: **Settings → Developer → Edit Config** (this opens `claude_desktop_config.json`)
- [ ] Add an `atlassian` server using the `mcp-remote` proxy. If the file already has an `mcpServers` block, just add the `atlassian` entry inside it:

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "npx",
      "args": ["-y", "mcp-remote@latest", "https://mcp.atlassian.com/v1/mcp/authv2"]
    }
  }
}
```

- [ ] **Save** the file
- [ ] **Fully quit and reopen** Claude Desktop
- [ ] On first use, a browser **OAuth** window opens — log in to Atlassian and approve
:::

:::note Where's the config file?
If "Edit Config" doesn't open it, the file lives at:
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

`mcp-remote` is a tiny bridge that lets a desktop app talk to a remote MCP server; it needs **Node.js 18+** installed. (Use the `…/v1/mcp/authv2` URL above — Atlassian's older `…/v1/sse` endpoint is being retired.)
:::

## Verify it works

Either path — let's confirm Claude can see Atlassian. In a normal chat (look for a 🔌 / tools indicator), try:

```prompt
Using my Atlassian connection, list the Jira projects I have access to. Just show project names and keys in a table.
```

- [ ] Claude returned **real project names/keys** from my Jira

Then try a read on Confluence:

```prompt
Search my Confluence for pages about onboarding and list the top 5 with their titles and spaces.
```

- [ ] Claude returned **real Confluence pages**

:::tip First-time tool approval
The first time Claude uses an Atlassian tool, it may ask you to **approve** that action. That's the safety model working — approve to continue. You're always in the loop on what it does.
:::

## Troubleshooting

:::details "403 Forbidden" or "not enabled"
Your Atlassian **admin needs to enable Rovo / MCP access** for your organization or your account. Send them the connector details and ask them to enable it. This is an org policy gate, not a bug.
:::

:::details The OAuth browser window didn't open
- Make sure pop-ups aren't blocked.
- Fully **quit and reopen** Claude Desktop, then trigger an Atlassian request again.
- For Path B, check Claude's logs for an auth URL you can open manually.
:::

:::details "could not determine executable to run" (Path B)
This is an npx cache hiccup. Clear it and restart: remove the `~/.npm/_npx` cache folder, then reopen Claude Desktop.
:::

:::details Claude says it has no Atlassian tools
- Confirm the connector shows **connected** in **Customize → Connectors**.
- For Path B, confirm you **fully restarted** the app after editing the config (a window reload isn't enough).
- Make sure you completed the **OAuth login**.
:::

```quiz
Q: Which path should a typical PM use to connect Atlassian?
+ Path A — Customize → Connectors → Connect → log in via OAuth. No code.
- Path B only — editing JSON config files
- Neither; you must email Atlassian
- You can't connect Atlassian to Claude
> The UI/Connectors path is click-log in-approve. The config-file path exists for power users but isn't necessary.

Q: You get a "403 / not enabled" error. The most likely fix is…
- Buy a more expensive Claude plan
+ Ask your Atlassian admin to enable Rovo/MCP access for your account
- Reinstall your operating system
- Use a different browser forever
> That error is an org-policy gate. An admin enables MCP/Rovo access for your org.

Q: After connecting, how do you confirm it works?
+ Ask Claude to list your real Jira projects or search Confluence — and see real results
- Restart your router
- Check your email
- You can't verify it
> A quick read request (list projects / search pages) confirms the connection end-to-end.
```

:::try Now make it useful
Connected? Excellent. Next lesson: the real payoff — PM workflows that run straight off your live Jira & Confluence data.
:::
