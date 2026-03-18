---
name: add-or-update-eldoraui-command-docs
description: Workflow command scaffold for add-or-update-eldoraui-command-docs in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-update-eldoraui-command-docs

Use this workflow when working on **add-or-update-eldoraui-command-docs** in `eldoraui`.

## Goal

Adds or updates documentation for eldoraui-related commands in the .claude/commands directory.

## Common Files

- `.claude/commands/*.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update a .claude/commands/*.md file for the specific command (e.g., add-eldoraui-ecc-bundle.md, feature-development.md, add-or-update-eldoraui-command-md.md, update-readme-badge-or-section.md, update-readme-or-project-metadata.md, add-new-component-with-demo-and-docs.md, update-component-or-docs.md)

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.