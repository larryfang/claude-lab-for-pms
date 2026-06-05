/* ============================================================
   Claude Lab — Course manifest
   Lesson bodies live in /content/*.md and load on demand.
   Edit this file to add, reorder, or relabel lessons.
   ============================================================ */
window.COURSE = {
  meta: {
    title: "Claude Lab",
    tagline: "From your first chat to building your own AI workflows — a hands-on, no-code-required lab for product managers & curious beginners.",
    repo: "https://github.com/larryfang/claude-lab-for-pms"
  },

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
