---
name: add-eldoraui-ecc-bundle
description: Workflow command scaffold for add-eldoraui-ecc-bundle in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-eldoraui-ecc-bundle

Use this workflow when working on **add-eldoraui-ecc-bundle** in `eldoraui`.

## Goal

Adds or updates the eldoraui ECC bundle, which includes commands, skills, agent configs, instincts, and documentation.

## Common Files

- `.claude/commands/*.md`
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`
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

- Add or update .claude/commands/*.md files related to eldoraui commands (e.g., add-eldoraui-ecc-bundle.md, feature-development.md, add-or-update-eldoraui-command-md.md, update-readme-badge-or-section.md, update-readme-or-project-metadata.md, add-new-component-with-demo-and-docs.md, update-component-or-docs.md)
- Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
- Add or update .codex/agents/*.toml files (docs-researcher.toml, reviewer.toml, explorer.toml)
- Add or update .codex/AGENTS.md
- Add or update .codex/config.toml

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.