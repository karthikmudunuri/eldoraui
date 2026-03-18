---
name: add-new-component-with-demo-and-docs
description: Workflow command scaffold for add-new-component-with-demo-and-docs in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-component-with-demo-and-docs

Use this workflow when working on **add-new-component-with-demo-and-docs** in `eldoraui`.

## Goal

Adds a new UI component to the library, including implementation, demo, documentation, and registry integration.

## Common Files

- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry/registry-examples.ts`
- `apps/www/registry/registry-ui.ts`
- `apps/www/registry/__index__.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Implement component in apps/www/registry/eldoraui/{component-name}.tsx
- Create demo(s) in apps/www/registry/example/{component-name}-demo.tsx
- Add documentation in apps/www/content/docs/components/{component-name}.mdx
- Update registry files: apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts, apps/www/registry/__index__.tsx
- Update apps/www/config/docs.ts to register the component

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.