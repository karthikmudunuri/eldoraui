---
name: add-eldoraui-ecc-bundle
description: Workflow command scaffold for add-eldoraui-ecc-bundle in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-eldoraui-ecc-bundle

Use this workflow when working on **add-eldoraui-ecc-bundle** in `eldoraui`.

## Goal

Adds a new ECC (Eldoraui Component Collection) bundle, which includes configuration, agent definitions, skills, commands, and documentation files for the eldoraui system.

## Common Files

- `.claude/commands/add-new-component-with-demo-and-docs.md`
- `.claude/commands/feature-development.md`
- `.claude/commands/update-readme-or-project-metadata.md`
- `.claude/commands/update-component-or-docs.md`
- `.claude/commands/update-readme-badge-or-section.md`
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update .claude/commands/*.md files (such as add-new-component-with-demo-and-docs.md, feature-development.md, update-readme-or-project-metadata.md, update-component-or-docs.md, update-readme-badge-or-section.md)
- Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
- Add or update .codex/agents/*.toml files (such as docs-researcher.toml, reviewer.toml, explorer.toml)
- Add or update .codex/AGENTS.md and .codex/config.toml
- Add or update .claude/identity.json

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.