---
name: add-eldoraui-ecc-bundle
description: Workflow command scaffold for add-eldoraui-ecc-bundle in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-eldoraui-ecc-bundle

Use this workflow when working on **add-eldoraui-ecc-bundle** in `eldoraui`.

## Goal

Adds or updates a set of configuration, command, skill, and agent files related to the eldoraui ECC bundle across multiple subdirectories.

## Common Files

- `.claude/commands/*.md`
- `.claude/homunculus/instincts/inherited/*.yaml`
- `.codex/agents/*.toml`
- `.codex/AGENTS.md`
- `.codex/config.toml`
- `.claude/identity.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update files in .claude/commands/ (e.g., add-new-component-with-demo-and-docs.md, update-readme-or-project-metadata.md, feature-development.md, update-component-or-docs.md)
- Add or update files in .claude/homunculus/instincts/inherited/ (e.g., eldoraui-instincts.yaml)
- Add or update files in .codex/agents/ (e.g., docs-researcher.toml, reviewer.toml, explorer.toml)
- Add or update .codex/AGENTS.md and .codex/config.toml
- Add or update .claude/identity.json

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.