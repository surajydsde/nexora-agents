# Claude Code

This repository follows the Nexora workflow and expects the same guardrails used by the other AI assistant integrations.

## Operating conventions

- Read the relevant repository files, tests, and package scripts before changing code.
- Keep changes scoped to the current feature or fix.
- Prefer surgical edits over broad rewrites.
- Validate the affected behavior before finishing.
- Do not expose credentials, secrets, `.env` values, or private keys.

## Required workflow

1. Understand the request and the relevant files.
2. Implement the smallest complete fix.
3. Add or update focused tests when behavior changes.
4. Validate the affected checks or scripts.
5. Review the diff for correctness, regressions, and maintainability.
6. Update related documentation only when necessary.

## Project guardrails

- Do not bypass tests, lint, type checks, or repository protections.
- Do not force-push, reset hard, or make destructive git changes.
- Do not commit directly to protected branches without explicit approval.
- Follow the repository workflow defined in `AGENTS.md` when it exists; otherwise use this assistant file as the primary instruction source.
- Use `.nexora/config.json` as the shared project configuration source.

Use workflows from `.nexora/agents`.