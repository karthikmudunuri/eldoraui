---
name: add-blog-posts
description: Workflow command scaffold for add-blog-posts in eldoraui.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-blog-posts

Use this workflow when working on **add-blog-posts** in `eldoraui`.

## Goal

Adds new blog posts to the website content.

## Common Files

- `apps/www/content/blog/*.mdx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add new .mdx files to apps/www/content/blog/
- Optionally, format all blog posts with Prettier

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.