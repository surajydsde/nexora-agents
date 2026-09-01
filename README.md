# Nexora Agents

🚀 AI-powered development workflows for GitHub Copilot.

Nexora Agents installs a structured multi-agent workflow into your repository, helping developers build features, generate tests, review code, validate quality, create documentation, and manage releases consistently.

---

## Why Nexora Agents?

Most AI coding assistants can generate code, but they do not enforce a development process.

Nexora Agents introduces specialized roles that work together in a repeatable workflow:

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

This helps teams maintain consistency, quality, and repeatability when working with AI-assisted development.

---

# Features

✅ Structured AI Development Workflow

✅ Feature Implementation Templates

✅ Test Generation Workflow

✅ Quality Validation

✅ Code Review Workflow

✅ Documentation & Changelog Templates

✅ Release Management Templates

✅ GitHub Workflow Integration

✅ Interactive CLI Installation

✅ Easy Repository Bootstrap

---

# Installation

## Run directly

```bash
npx nexora-agents init
```

## Or install globally

```bash
npm install -g nexora-agents

nexora-agents init
```

---

# Interactive Setup

Running:

```bash
nexora-agents init
```

opens:

```text
? What would you like to install?

❯ Full Workflow
  Agents Only
  GitHub Workflow Only
```

---

# Installation Options

## Full Workflow

Installs:

```text
AGENTS.md

.github/
├── agents/
└── workflows/
```

Recommended for most projects.

---

## Agents Only

Installs:

```text
.github/
└── agents/
```

Useful when you only need agent definitions.

---

## GitHub Workflow Only

Installs:

```text
.github/
└── workflows/
```

Useful when agent files already exist.

---

# Generated Structure

```text
.
├── AGENTS.md
│
└── .github
    ├── agents
    │   ├── feature-builder.md
    │   ├── test-engineer.md
    │   ├── quality-validator.md
    │   ├── code-reviewer.md
    │   ├── documentation-changelog.md
    │   ├── release-builder.md
    │   └── release-publisher.md
    │
    └── workflows
        └── feature-pipeline.yml
```

---

# Included Agents

## Feature Builder

Responsible for implementing requested features and generating production-ready code.

---

## Test Engineer

Creates unit tests, integration tests, and validation scenarios.

---

## Quality Validator

Checks implementation quality, correctness, edge cases, and project standards.

---

## Code Reviewer

Reviews code for:

- Maintainability
- Security
- Performance
- Best Practices
- Readability

---

## Documentation & Changelog

Creates:

- Technical Documentation
- Release Notes
- Changelog Entries

---

## Release Builder

Prepares releases and validates deployment readiness.

---

## Release Publisher

Handles release publication workflows and deployment preparation.

---

# Example Workflow

Feature Request:

```text
Add Dark Mode Support
```

Workflow:

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

# Compatibility

Nexora Agents is currently optimized for GitHub Copilot and repository-based instruction workflows.

| Tool | Status |
|--------|--------|
| GitHub Copilot | ✅ Supported |
| GitHub Copilot Coding Agent | ✅ Supported |
| Claude Code | ⚠️ Planned |
| Cursor | ⚠️ Planned |
| Gemini CLI | ⚠️ Planned |
| OpenAI Codex CLI | ⚠️ Planned |

Future releases will introduce:

- CLAUDE.md generation
- GEMINI.md generation
- Universal AI assistant support
- Shared `.nexora` configuration

---

# Commands

Current Version

```bash
nexora-agents init
```

Planned Commands

```bash
nexora-agents add
nexora-agents remove

nexora-agents list

nexora-agents doctor

nexora-agents run sequential

nexora-agents run parallel

nexora-agents feature "task"

nexora-agents review

nexora-agents release
```

---


# Roadmap

## v1.0.1

- Agent Templates
- Workflow Templates
- Interactive CLI Installer

## v1.5

- Universal AI Assistant Support
- CLAUDE.md Generation
- GEMINI.md Generation
- Shared .nexora Configuration

## v2.0

- LangGraph Integration
- Sequential Agent Execution
- Ollama Integration

## v3.0

- Parallel Agent Execution
- Workflow State Management
- Memory Support

## v4.0

- OpenAI Integration
- Anthropic Integration
- OpenRouter Integration

## v5.0

- Natural Language Workflow Planning
- Human Approval Gates
- Multi-Agent Orchestration Engine

---

# How It Works

Nexora Agents installs structured workflow definitions and agent prompts into your repository.

These prompts help AI coding assistants follow a repeatable engineering workflow instead of generating code without process.

The current version focuses on GitHub Copilot compatibility through:

- AGENTS.md
- Repository-level instructions
- Agent templates
- Workflow templates

Future versions will extend support to additional AI coding assistants.

---

# Contributing

Contributions are welcome.

Feel free to open issues, submit pull requests, or suggest new agent workflows.

---

# License

MIT License

---

Built with ❤️ for AI-assisted software development.