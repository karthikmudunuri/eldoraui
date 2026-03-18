---
name: add-new-component-with-demo-and-docs
description: Workflow command scaffold for add-new-component-with-demo-and-docs in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-component-with-demo-and-docs

Use this workflow when working on **add-new-component-with-demo-and-docs** in `eldoraui`.

## Goal

Adds a new UI component to the library, including its implementation, documentation, demo/example, and registry/config updates.

## Common Files

- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/blocks/*/components/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry.json`
- `apps/www/public/registry.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update implementation file for the new component under apps/www/registry/eldoraui/ or apps/www/registry/blocks/
- Add or update a demo/example file under apps/www/registry/example/
- Add or update documentation markdown under apps/www/content/docs/components/
- Update registry and index files (apps/www/registry.json, apps/www/public/registry.json, apps/www/registry/__index__.tsx, apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts)
- Update config/docs.ts and possibly config/site.ts

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.