/* ============================================================
   Claude Lab — Course manifest (multi-course)
   Lesson bodies live in /content/**.md and load on demand.
   Add a course = push to window.COURSES. Add a lesson = add a file
   under /content and register it in the course's module here.
   ============================================================ */
window.SITE = {
  title: "Claude Lab",
  tagline: "Hands-on, interactive courses for getting genuinely good at Claude.",
  repo: "https://github.com/larryfang/claude-lab-for-pms"
};

var PM_COURSE = {
  id: "pm",
  slug: "claude-for-pms",
  emoji: "🧭",
  title: "Claude for Product Managers",
  tagline: "From your first chat to building your own AI workflows — a hands-on, no-code-required lab for product managers & curious beginners.",
  audience: "Non-technical · PMs & knowledge workers",
  level: "No code required",
  modules: [
    {
      id: "start-here",
      emoji: "🚀",
      title: "Start Here",
      desc: "Get oriented, learn the mental model, and send your very first message to Claude.",
      lessons: [
        { id: "welcome", file: "00-welcome.md", title: "Welcome to the Lab", minutes: 5, level: "Beginner",
          summary: "How this lab works, what you'll build, and the one rule for getting the most out of it.",
          keywords: ["intro", "start", "how to use", "overview", "syllabus"] },
        { id: "what-is-claude", file: "01-what-is-claude.md", title: "Meet Claude (No Jargon)", minutes: 8, level: "Beginner",
          summary: "What an AI assistant actually is, what 'vibe coding' means, and why this matters for PMs.",
          keywords: ["llm", "what is claude", "vibe coding", "ai assistant", "model", "opus"] },
        { id: "which-tool", file: "02-which-tool.md", title: "Chat vs Desktop vs Cowork vs Code", minutes: 7, level: "Beginner",
          summary: "The four ways to use Claude and a simple rule for picking the right one every time.",
          keywords: ["claude.ai", "desktop", "cowork", "claude code", "which tool", "compare"] },
        { id: "first-chat", file: "03-first-chat.md", title: "Lab: Your First Real Chat", minutes: 10, level: "Beginner",
          summary: "Hands-on. Open Claude Desktop and run three guided prompts that show what it can do.",
          keywords: ["first chat", "hands on", "prompt", "practice", "exercise"] }
      ]
    },
    {
      id: "desktop",
      emoji: "🖥️",
      title: "Claude Desktop Basics",
      desc: "Tour the app, learn Projects and files, and write prompts that actually get results.",
      lessons: [
        { id: "desktop-tour", file: "10-desktop-tour.md", title: "The Desktop Tour", minutes: 8, level: "Beginner",
          summary: "Every button that matters in Claude Desktop, explained in plain language.",
          keywords: ["interface", "tour", "sidebar", "settings", "ui"] },
        { id: "projects-files", file: "11-projects-files.md", title: "Projects, Files & Artifacts", minutes: 9, level: "Beginner",
          summary: "Keep context in one place, drop in files, and get living documents back.",
          keywords: ["projects", "files", "artifacts", "upload", "context", "memory"] },
        { id: "prompting", file: "12-prompting.md", title: "Prompting That Gets Results", minutes: 10, level: "Beginner",
          summary: "The C.R.A.F.T. pattern and PM-ready prompt recipes you'll reuse forever.",
          keywords: ["prompting", "prompt engineering", "craft", "context", "role", "examples"] },
        { id: "lab-prd", file: "13-lab-prd.md", title: "Lab: Brain-dump → PRD", minutes: 15, level: "Beginner",
          summary: "Hands-on. Turn a messy voice-note of ideas into a structured product requirements doc.",
          keywords: ["prd", "lab", "requirements", "document", "writing"] }
      ]
    },
    {
      id: "concepts",
      emoji: "🧩",
      title: "Core Concepts: The Power-Ups",
      desc: "The vocabulary that unlocks everything: MCP, Connectors, Skills, Plugins, and Subagents.",
      lessons: [
        { id: "big-picture", file: "20-big-picture.md", title: "The Big Picture", minutes: 7, level: "Core",
          summary: "One diagram that ties together every Claude concept you'll meet.",
          keywords: ["overview", "architecture", "big picture", "ecosystem"] },
        { id: "what-is-mcp", file: "21-what-is-mcp.md", title: "What Is MCP?", minutes: 9, level: "Core",
          summary: "The 'USB-C for AI' standard — why it exists and why it changed everything.",
          keywords: ["mcp", "model context protocol", "server", "client", "standard", "usb-c"] },
        { id: "four-power-ups", file: "22-four-power-ups.md", title: "Connectors · Skills · Plugins · Subagents", minutes: 10, level: "Core",
          summary: "Four words people constantly mix up — untangled with a memorable analogy each.",
          keywords: ["connectors", "skills", "plugins", "subagents", "difference", "compare"] },
        { id: "the-directory", file: "23-the-directory.md", title: "The Directory & Marketplaces", minutes: 6, level: "Core",
          summary: "Where to find, install, and trust pre-built capabilities for your role.",
          keywords: ["directory", "marketplace", "install", "verified", "catalog"] }
      ]
    },
    {
      id: "cowork",
      emoji: "🤝",
      title: "Cowork: Your AI Teammate",
      desc: "Hand Claude a whole task — not just a question — and come back to finished work.",
      lessons: [
        { id: "cowork-intro", file: "30-cowork-intro.md", title: "What Is Cowork?", minutes: 8, level: "Core",
          summary: "Outcome-oriented AI: how Cowork differs from chat, and when to reach for it.",
          keywords: ["cowork", "agent", "agentic", "autonomous", "outcome"] },
        { id: "cowork-tour", file: "31-cowork-tour.md", title: "Cowork Tour: Folders, Sub-agents & Schedules", minutes: 9, level: "Core",
          summary: "Local file access, the sandbox, parallel sub-agents, scheduled tasks, and projects.",
          keywords: ["sandbox", "folders", "sub-agents", "scheduled tasks", "projects", "chrome"] },
        { id: "lab-cowork", file: "32-lab-cowork.md", title: "Lab: Give Cowork a Real Job", minutes: 20, level: "Core",
          summary: "Hands-on. Point Cowork at a messy folder and get back an organized, summarized report.",
          keywords: ["lab", "cowork", "task", "folder", "report", "deliverable"] }
      ]
    },
    {
      id: "connect",
      emoji: "🔌",
      title: "Connect Your Tools (Atlassian)",
      desc: "Plug Claude into Jira & Confluence and run the PM workflows you do every day.",
      lessons: [
        { id: "connectors-how", file: "40-connectors-how.md", title: "How Connectors Work (Safely)", minutes: 8, level: "Core",
          summary: "OAuth, permissions, and the trust model — what Claude can and can't see.",
          keywords: ["connectors", "oauth", "permissions", "security", "remote mcp", "safety"] },
        { id: "lab-atlassian", file: "41-lab-atlassian.md", title: "Lab: Connect Jira & Confluence", minutes: 15, level: "Core",
          summary: "Hands-on. Add the Atlassian connector two ways — the easy way and the power way.",
          keywords: ["atlassian", "jira", "confluence", "rovo", "lab", "connect", "setup"] },
        { id: "lab-atlassian-workflows", file: "42-lab-atlassian-workflows.md", title: "Lab: Real PM Workflows", minutes: 18, level: "Core",
          summary: "Hands-on. Sprint summaries, epic health, stakeholder updates — straight from your data.",
          keywords: ["jira", "workflows", "sprint", "epic", "standup", "lab", "report"] }
      ]
    },
    {
      id: "skills",
      emoji: "🛠️",
      title: "Build Your First Skill",
      desc: "Teach Claude to do a repeatable task your way — then bundle it for your whole team.",
      lessons: [
        { id: "skills-anatomy", file: "50-skills-anatomy.md", title: "Anatomy of a Skill", minutes: 10, level: "Core",
          summary: "Inside SKILL.md: frontmatter, the body, and the magic of progressive disclosure.",
          keywords: ["skills", "skill.md", "frontmatter", "yaml", "anatomy", "structure"] },
        { id: "lab-skill", file: "51-lab-skill.md", title: "Lab: Build a 'Status Update' Skill", minutes: 22, level: "Core",
          summary: "Hands-on. Create, test, and refine a real Skill — using Claude to help you write it.",
          keywords: ["lab", "build skill", "create", "status update", "skill.md", "test"] },
        { id: "plugins-bundle", file: "52-plugins-bundle.md", title: "Bundle It Into a Plugin", minutes: 12, level: "Core",
          summary: "Package skills + connectors + commands so your team gets it all in one click.",
          keywords: ["plugins", "bundle", "package", "marketplace", "share", "team"] }
      ]
    },
    {
      id: "code",
      emoji: "⌨️",
      title: "Claude Code 101 (Advanced)",
      desc: "Optional power-user track. Meet the terminal-based agent — and lose your fear of it.",
      lessons: [
        { id: "code-what", file: "60-code-what.md", title: "What Is Claude Code?", minutes: 8, level: "Advanced",
          summary: "Why a PM might care about the developer tool that started it all.",
          keywords: ["claude code", "terminal", "cli", "agent", "developer"] },
        { id: "code-setup", file: "61-code-setup.md", title: "Setup & The Terminal Fear-Buster", minutes: 12, level: "Advanced",
          summary: "Hands-on. Install Claude Code and run your first three commands. Nothing will explode.",
          keywords: ["install", "setup", "terminal", "npm", "command line", "fear"] },
        { id: "lab-code", file: "62-lab-code.md", title: "Lab: Your First Code Task", minutes: 20, level: "Advanced",
          summary: "Hands-on. Build a tiny working web page by describing it — no code knowledge needed.",
          keywords: ["lab", "claude code", "build", "website", "first task", "vibe coding"] }
      ]
    },
    {
      id: "capstone",
      emoji: "🏁",
      title: "Capstone & Beyond",
      desc: "Combine everything into one realistic workflow, then plan your next 30 days.",
      lessons: [
        { id: "capstone", file: "70-capstone.md", title: "Capstone: Backlog → Board Update", minutes: 30, level: "Core",
          summary: "Hands-on. Use a connector + a skill + Cowork to ship a stakeholder update end-to-end.",
          keywords: ["capstone", "project", "end to end", "workflow", "final"] },
        { id: "next-steps", file: "71-next-steps.md", title: "Where to Go Next", minutes: 6, level: "Beginner",
          summary: "Habits, communities, and a 30-day plan to make Claude part of how you work.",
          keywords: ["next steps", "habits", "resources", "community", "30 day plan"] }
      ]
    },
    {
      id: "reference",
      emoji: "📚",
      title: "Reference",
      desc: "Keep these open in a tab: a glossary, a prompt library, and a troubleshooting guide.",
      lessons: [
        { id: "glossary", file: "90-glossary.md", title: "Glossary", minutes: null, level: "Reference",
          summary: "Every term in this lab, defined in one sentence.",
          keywords: ["glossary", "definitions", "terms", "dictionary"] },
        { id: "prompt-library", file: "91-prompt-library.md", title: "PM Prompt Library", minutes: null, level: "Reference",
          summary: "Copy-paste prompts for the PM tasks you do every week.",
          keywords: ["prompts", "library", "templates", "recipes", "copy"] },
        { id: "troubleshooting", file: "92-troubleshooting.md", title: "Troubleshooting & FAQ", minutes: null, level: "Reference",
          summary: "When something doesn't work, start here.",
          keywords: ["troubleshooting", "faq", "errors", "help", "problems", "fix"] }
      ]
    }
  ],

  // Badges are earned automatically. `module` = earned when that module is 100% complete.
  badges: [
    { id: "first-steps", emoji: "🐣", label: "First Steps", when: { lesson: "welcome" } },
    { id: "desktop-driver", emoji: "🖥️", label: "Desktop Driver", when: { module: "desktop" } },
    { id: "concept-master", emoji: "🧠", label: "Concept Master", when: { module: "concepts" } },
    { id: "cowork-captain", emoji: "🤝", label: "Cowork Captain", when: { module: "cowork" } },
    { id: "connected", emoji: "🔌", label: "Connected", when: { module: "connect" } },
    { id: "skill-smith", emoji: "🛠️", label: "Skill Smith", when: { module: "skills" } },
    { id: "code-curious", emoji: "⌨️", label: "Code Curious", when: { module: "code" } },
    { id: "champion", emoji: "🏆", label: "Capstone Champion", when: { lesson: "capstone" } },
    { id: "completionist", emoji: "💯", label: "Completionist", when: { all: true } }
  ]
};

var CC_COURSE = {
  id: "claude-code",
  slug: "claude-code-for-devs",
  emoji: "⌨️",
  title: "Claude Code for Developers",
  tagline: "Go from 'I installed it' to agentic engineering — context, plan mode, subagents, hooks, MCP, and automation — with an in-browser terminal you can actually type into.",
  audience: "Engineers · already installed, new to Claude Code",
  level: "Hands-on · terminal",
  modules: [
    {
      id: "cc-foundations",
      emoji: "🧠",
      title: "Foundations",
      desc: "What Claude Code actually is, the TUI, session basics — then your first real session in a live terminal simulator.",
      lessons: [
        { id: "cc-what", file: "cc/00-what.md", title: "It's an Agent, Not Autocomplete", minutes: 8, level: "Beginner",
          summary: "The agentic loop, why context is THE constraint, and how to think about Claude Code.",
          keywords: ["claude code", "agentic", "what is", "context window", "loop", "mental model"] },
        { id: "cc-tour", file: "cc/01-tour.md", title: "The TUI & Session Basics", minutes: 10, level: "Beginner",
          summary: "Modes (incl. Plan Mode), the keys that matter, /clear, /rewind, /resume, interrupting.",
          keywords: ["tui", "plan mode", "shift tab", "esc", "clear", "rewind", "resume", "shortcuts", "modes"] },
        { id: "cc-first", file: "cc/02-first-session.md", title: "Lab: Your First Session", minutes: 12, level: "Beginner",
          summary: "Hands-on in the in-browser terminal: ask codebase questions, make a tiny change, verify.",
          keywords: ["lab", "first session", "simulator", "terminal", "hands on", "onboarding"] }
      ]
    },
    {
      id: "cc-context-mod",
      emoji: "📍",
      title: "Context Engineering",
      desc: "The core skill: feed Claude the right context, keep the window clean, and master CLAUDE.md.",
      lessons: [
        { id: "cc-context", file: "cc/10-context.md", title: "Context Is the Whole Game", minutes: 8, level: "Core",
          summary: "Why the context window is your fundamental constraint and how performance degrades as it fills.",
          keywords: ["context", "window", "tokens", "degrade", "management", "constraint"] },
        { id: "cc-claudemd", file: "cc/11-claudemd.md", title: "CLAUDE.md Done Right", minutes: 11, level: "Core",
          summary: "/init, what to include vs cut, the memory hierarchy, @-imports, and the under-200-lines rule.",
          keywords: ["claude.md", "init", "memory", "hierarchy", "imports", "instructions", "rules"] },
        { id: "cc-context-mgmt", file: "cc/12-context-mgmt.md", title: "Managing Context Live", minutes: 9, level: "Core",
          summary: "/clear vs /compact, /rewind checkpoints, subagents for investigation, @files, images, pipes.",
          keywords: ["clear", "compact", "rewind", "checkpoint", "subagent", "@", "pipe", "images"] },
        { id: "cc-lab-claudemd", file: "cc/13-lab-claudemd.md", title: "Lab: Write a Great CLAUDE.md", minutes: 15, level: "Core",
          summary: "Hands-on: run /init, then prune and tune CLAUDE.md until Claude's behavior shifts.",
          keywords: ["lab", "claude.md", "init", "simulator", "tune", "prune"] }
      ]
    },
    {
      id: "cc-workflow-mod",
      emoji: "🔁",
      title: "The Core Workflow",
      desc: "Explore → Plan → Code → Commit. Plan mode, verification loops, and permissions that keep you safe.",
      lessons: [
        { id: "cc-epcc", file: "cc/20-explore-plan-code.md", title: "Explore → Plan → Code → Commit", minutes: 11, level: "Core",
          summary: "The highest-leverage workflow, plus Plan Mode deep dive (Shift+Tab, opusplan, Ctrl+G).",
          keywords: ["explore", "plan", "code", "commit", "plan mode", "opusplan", "workflow"] },
        { id: "cc-verify", file: "cc/21-verify.md", title: "Give Claude a Way to Verify", minutes: 10, level: "Core",
          summary: "Tests, builds, screenshots — close the loop so you can walk away. TDD with Claude Code.",
          keywords: ["verify", "tests", "tdd", "build", "screenshot", "evidence", "goal", "stop hook"] },
        { id: "cc-permissions", file: "cc/22-permissions.md", title: "Permissions & Staying Safe", minutes: 9, level: "Core",
          summary: "Default prompts, auto mode, /permissions allowlists, /sandbox, and the YOLO flag caution.",
          keywords: ["permissions", "auto mode", "sandbox", "allowlist", "safety", "dangerously skip"] },
        { id: "cc-lab-feature", file: "cc/23-lab-feature.md", title: "Lab: Ship a Feature (Plan + TDD)", minutes: 18, level: "Core",
          summary: "Hands-on: take a feature from plan mode through tests to commit in the simulator.",
          keywords: ["lab", "feature", "plan mode", "tdd", "simulator", "commit"] }
      ]
    },
    {
      id: "cc-customize-mod",
      emoji: "🛠️",
      title: "Customize Claude Code",
      desc: "Make it yours: custom commands, subagents, hooks, MCP servers, and the .claude/ folder.",
      lessons: [
        { id: "cc-commands", file: "cc/30-commands.md", title: "Custom Commands & Skills", minutes: 10, level: "Advanced",
          summary: "Reusable workflows in .claude/commands & .claude/skills, $ARGUMENTS, manual vs auto-invoke.",
          keywords: ["commands", "slash", "skills", "arguments", "custom", "workflow"] },
        { id: "cc-subagents", file: "cc/31-subagents.md", title: "Subagents", minutes: 11, level: "Advanced",
          summary: "Isolated context specialists in .claude/agents, the Explore/Plan built-ins, and specificity.",
          keywords: ["subagents", "agents", "isolated context", "explore", "plan", "reviewer", "parallel"] },
        { id: "cc-hooks", file: "cc/32-hooks.md", title: "Hooks: Deterministic Automation", minutes: 10, level: "Advanced",
          summary: "Guarantee actions with lifecycle hooks (PreToolUse/PostToolUse/Stop) in settings.json.",
          keywords: ["hooks", "settings.json", "pretooluse", "posttooluse", "stop", "lint", "guardrails"] },
        { id: "cc-mcp-plugins", file: "cc/33-mcp-plugins.md", title: "MCP, Plugins & the .claude Folder", minutes: 10, level: "Advanced",
          summary: "Connect tools with claude mcp add, install plugins, and map the whole .claude/ + settings hierarchy.",
          keywords: ["mcp", "plugins", ".claude", "settings", "hierarchy", "marketplace"] },
        { id: "cc-lab-customize", file: "cc/34-lab-customize.md", title: "Lab: Command + Subagent + Hook", minutes: 20, level: "Advanced",
          summary: "Hands-on: build a /command, a reviewer subagent, and a format-on-edit hook.",
          keywords: ["lab", "command", "subagent", "hook", "simulator", "customize"] }
      ]
    },
    {
      id: "cc-scale-mod",
      emoji: "🚀",
      title: "Scale & Automate",
      desc: "Multiply yourself: headless mode, CI, git worktrees, parallel sessions, and fan-out.",
      lessons: [
        { id: "cc-headless", file: "cc/40-headless.md", title: "Headless Mode & CI", minutes: 10, level: "Advanced",
          summary: "claude -p, output formats, piping data, pre-commit hooks, and GitHub Actions (@claude).",
          keywords: ["headless", "-p", "non-interactive", "ci", "json", "pipe", "github actions", "automation"] },
        { id: "cc-parallel", file: "cc/41-parallel.md", title: "Parallel Sessions & Worktrees", minutes: 10, level: "Advanced",
          summary: "git worktrees, writer/reviewer pattern, fan-out across files, and agent teams.",
          keywords: ["worktrees", "parallel", "writer reviewer", "fan out", "agent teams", "scale"] },
        { id: "cc-lab-automate", file: "cc/42-lab-automate.md", title: "Lab: Headless + Worktree Run", minutes: 16, level: "Advanced",
          summary: "Hands-on: a one-liner batch job and a parallel worktree workflow.",
          keywords: ["lab", "headless", "worktree", "batch", "simulator", "automate"] }
      ]
    },
    {
      id: "cc-finish-mod",
      emoji: "🎯",
      title: "Best Practices & Capstone",
      desc: "The habits that separate power users from the pack — then put it all together.",
      lessons: [
        { id: "cc-bestpractices", file: "cc/50-bestpractices.md", title: "Habits & Failure Patterns", minutes: 10, level: "Core",
          summary: "The traits of effective users and the five failure patterns (with the fix for each).",
          keywords: ["best practices", "habits", "failure patterns", "anti-patterns", "kitchen sink", "fixes"] },
        { id: "cc-capstone", file: "cc/51-capstone.md", title: "Capstone: Clone → PR", minutes: 30, level: "Core",
          summary: "Hands-on: a new repo from /init through a plan-mode feature, tests, a custom command, and a PR.",
          keywords: ["capstone", "end to end", "project", "pr", "simulator", "final"] }
      ]
    },
    {
      id: "cc-reference",
      emoji: "📚",
      title: "Reference",
      desc: "Keep these in a tab: a command cheat-sheet, copy-paste starter templates, and an FAQ.",
      lessons: [
        { id: "cc-cheatsheet", file: "cc/90-cheatsheet.md", title: "Command & Shortcut Cheat-Sheet", minutes: null, level: "Reference",
          summary: "Every command, flag, and key you'll reach for, on one page.",
          keywords: ["cheatsheet", "commands", "shortcuts", "flags", "reference"] },
        { id: "cc-templates", file: "cc/91-templates.md", title: "Starter Templates", minutes: null, level: "Reference",
          summary: "Copy-paste CLAUDE.md, a custom command, a subagent, a hook, and settings.json.",
          keywords: ["templates", "claude.md", "settings", "starter", "copy", "boilerplate"] },
        { id: "cc-faq", file: "cc/92-faq.md", title: "Troubleshooting & FAQ", minutes: null, level: "Reference",
          summary: "When Claude Code misbehaves, start here.",
          keywords: ["faq", "troubleshooting", "errors", "help", "fix", "problems"] }
      ]
    }
  ],

  badges: [
    { id: "cc-first-steps", emoji: "🐣", label: "Booted Up", when: { lesson: "cc-what" } },
    { id: "cc-context-eng", emoji: "📍", label: "Context Engineer", when: { module: "cc-context-mod" } },
    { id: "cc-workflow-pro", emoji: "🔁", label: "Workflow Pro", when: { module: "cc-workflow-mod" } },
    { id: "cc-customizer", emoji: "🛠️", label: "Customizer", when: { module: "cc-customize-mod" } },
    { id: "cc-automator", emoji: "🚀", label: "Automator", when: { module: "cc-scale-mod" } },
    { id: "cc-champion", emoji: "🏆", label: "Shipped It", when: { lesson: "cc-capstone" } },
    { id: "cc-completionist", emoji: "💯", label: "Completionist", when: { all: true } }
  ]
};

window.COURSES = [PM_COURSE, CC_COURSE];
