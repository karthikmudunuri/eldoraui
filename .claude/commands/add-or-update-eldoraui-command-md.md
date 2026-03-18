---
name: add-or-update-eldoraui-command-md
description: Workflow command scaffold for add-or-update-eldoraui-command-md in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-update-eldoraui-command-md

Use this workflow when working on **add-or-update-eldoraui-command-md** in `eldoraui`.

## Goal

Adds or updates command documentation Markdown files for eldoraui, describing workflows or features.

## Common Files

- `.claude/commands/add-new-component-with-demo-and-docs.md`
- `.claude/commands/feature-development.md`
- `.claude/commands/update-readme-or-project-metadata.md`
- `.claude/commands/update-component-or-docs.md`
- `.claude/commands/update-readme-badge-or-section.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update .claude/commands/*.md file(s) relevant to the workflow (e.g., add-new-component-with-demo-and-docs.md, feature-development.md, update-readme-or-project-metadata.md, update-component-or-docs.md, update-readme-badge-or-section.md)

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.