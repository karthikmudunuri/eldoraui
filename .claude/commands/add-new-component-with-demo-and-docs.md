---
name: add-new-component-with-demo-and-docs
description: Workflow command scaffold for add-new-component-with-demo-and-docs in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-component-with-demo-and-docs

Use this workflow when working on **add-new-component-with-demo-and-docs** in `eldoraui`.

## Goal

Adds a new UI component to the library, including its implementation, documentation, demo, and registry integration.

## Common Files

- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry/__index__.tsx`
- `apps/www/registry/registry-ui.ts`
- `apps/www/registry/registry-examples.ts`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Implement the component in apps/www/registry/eldoraui/{component-name}.tsx
- Create a demo in apps/www/registry/example/{component-name}-demo.tsx
- Add documentation in apps/www/content/docs/components/{component-name}.mdx
- Update the registry index in apps/www/registry/__index__.tsx
- Update the registry UI in apps/www/registry/registry-ui.ts

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.