---
name: update-component-or-docs
description: Workflow command scaffold for update-component-or-docs in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-component-or-docs

Use this workflow when working on **update-component-or-docs** in `eldoraui`.

## Goal

Updates an existing component, its documentation, or related registry/config files.

## Common Files

- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/config/docs.ts`
- `apps/www/registry/__index__.tsx`
- `apps/www/public/r/*.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit component implementation in apps/www/registry/eldoraui/{component}.tsx or related files
- Update documentation in apps/www/content/docs/components/{component}.mdx
- Update registry or config files as needed (e.g., apps/www/config/docs.ts, apps/www/registry/__index__.tsx)
- Update JSON metadata if necessary

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.