# Nexora Agents

🚀 Universal AI workflow templates for GitHub Copilot, Claude Code, and Gemini CLI.

Nexora Agents is a lightweight CLI installer that copies workflow and instruction templates into a repository so AI assistants can follow a consistent feature workflow.

---

## v1.5.0 highlights

- Universal AI Assistant Support
- CLAUDE.md Generation
- GEMINI.md Generation
- Shared `.nexora` configuration
- Cross-assistant project setup

---

## Supported assistants

- GitHub Copilot
- Claude Code
- Gemini CLI

---

## Why Nexora Agents?

Most AI coding assistants can generate code, but they do not enforce a repeatable development process.

Nexora Agents gives teams a consistent workflow across assistants:

```text
Feature Builder
      ↓
Test Engineer
      ↓
Quality Validator
      ↓
Code Reviewer
      ↓
Documentation & Changelog
      ↓
Release Builder
      ↓
Release Publisher
```

---

## Installation

```bash
npx nexora-agents init
```

or:

```bash
npm install -g nexora-agents
nexora-agents init
```

---

## Interactive setup

```text
? Select AI assistant setup:

❯ Universal AI Setup
  GitHub Copilot
  Claude Code
  Gemini CLI
  Exit
```

---

## Installation modes

### Universal AI Setup

Installs:

```text
AGENTS.md
CLAUDE.md
GEMINI.md
.nexora/
├── config.json
└── agents/
```

### GitHub Copilot

Installs:

```text
AGENTS.md
.nexora/
├── config.json
└── agents/
```

### Claude Code

Installs:

```text
CLAUDE.md
.nexora/
├── config.json
└── agents/
```

### Gemini CLI

Installs:

```text
GEMINI.md
.nexora/
├── config.json
└── agents/
```

---

## Generated repository layout

```text
.
├── AGENTS.md
├── CLAUDE.md
├── GEMINI.md
├── .nexora
│   ├── config.json
│   └── agents/
│       ├── feature-builder.md
│       ├── test-engineer.md
│       ├── quality-validator.md
│       ├── code-reviewer.md
│       ├── documentation-changelog.md
│       ├── release-builder.md
│       ├── release-publisher.md
│       └── ...
└── .github/
    └── agents/
```

The `.nexora/agents` directory is the shared workflow directory used by the assistant templates.

---

## Included workflow roles

- Feature Builder
- Test Engineer
- Quality Validator
- Code Reviewer
- Documentation & Changelog
- Release Builder
- Release Publisher

---

## Compatibility

| Tool | Status |
|------|--------|
| GitHub Copilot | ✅ Supported |
| Claude Code | ✅ Supported |
| Gemini CLI | ✅ Supported |
| Cursor | ⚠️ Planned |
| OpenAI Codex CLI | ⚠️ Planned |

---

## Notes

This v1.5.0 release focuses on universal AI assistant support, assistant-specific entry files, and shared project configuration. It does not introduce a new workflow engine or orchestration runtime.

---

# Current commands

## `init`

Installs the selected assistant setup into the current repository.

## `list`

Lists the default workflow roles.

## `doctor`

Checks whether the key installation files exist.

```bash
nexora-agents init
nexora-agents list
nexora-agents doctor
```

---

# How It Works

Nexora Agents installs structured workflow definitions and agent prompts into your repository.

These prompts help AI coding assistants follow a repeatable engineering workflow instead of generating code without process.

The current v1.5.0 release supports:

- AGENTS.md
- CLAUDE.md
- GEMINI.md
- `.nexora/config.json`
- `.nexora/agents/`
- Assistant-specific workflow templates

Planned future additions include additional assistant integrations outside the current v1.5 support set.

---

# Contributing

Contributions are welcome.

Feel free to open issues, submit pull requests, or suggest new agent workflows.

---

# License

MIT License

---

Built with ❤️ for AI-assisted software development.