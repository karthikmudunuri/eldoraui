---
name: add-eldoraui-ecc-bundle
description: Workflow command scaffold for add-eldoraui-ecc-bundle in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-eldoraui-ecc-bundle

Use this workflow when working on **add-eldoraui-ecc-bundle** in `eldoraui`.

## Goal

Adds or updates the Eldoraui ECC bundle, including commands, skills, agent configs, instincts, and documentation.

## Common Files

- `.claude/commands/add-eldoraui-ecc-bundle.md`
- `.claude/commands/feature-development.md`
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`
- `.codex/agents/docs-researcher.toml`
- `.codex/agents/reviewer.toml`
- `.codex/agents/explorer.toml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update .claude/commands/add-eldoraui-ecc-bundle.md
- Add or update .claude/commands/feature-development.md
- Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
- Add or update .codex/agents/docs-researcher.toml
- Add or update .codex/agents/reviewer.toml

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.