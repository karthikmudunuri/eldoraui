---
name: eldoraui-conventions
description: Development conventions and patterns for eldoraui. TypeScript project with conventional commits.
---

# Eldoraui Conventions

> Generated from [karthikmudunuri/eldoraui](https://github.com/karthikmudunuri/eldoraui) on 2026-03-18

## Overview

This skill teaches Claude the development patterns and conventions used in eldoraui.

## Tech Stack

- **Primary Language**: TypeScript
- **Architecture**: hybrid module organization
- **Test Location**: separate

## When to Use This Skill

Activate this skill when:
- Making changes to this repository
- Adding new features following established patterns
- Writing tests that match project conventions
- Creating commits with proper message format

## Commit Conventions

Follow these commit message conventions based on 8 analyzed commits.

### Commit Style: Conventional Commits

### Prefixes Used

- `feat`
- `fix`
- `chore`
- `docs`

### Message Guidelines

- Average message length: ~41 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add 10 blog posts to increase component library value
```

*Commit message example*

```text
fix: build error
```

*Commit message example*

```text
docs: update AGENTS.md
```

*Commit message example*

```text
chore: update installation commands
```

*Commit message example*

```text
Update Vercel OSS Program badge in README
```

*Commit message example*

```text
Add Vercel support section to README
```

*Commit message example*

```text
fix: open graph error
```

*Commit message example*

```text
fix: banner update
```

## Architecture

### Project Structure: Turborepo

This project uses **hybrid** module organization.

### Configuration Files

- `.github/workflows/code-check.yml`
- `.github/workflows/submit-sitemap.yml`
- `Dockerfile`
- `apps/www/next.config.mjs`
- `apps/www/package.json`
- `apps/www/tsconfig.json`
- `docker-compose.yml`
- `package.json`

### Guidelines

- This project uses a hybrid organization
- Follow existing patterns when adding new code

## Code Style

### Language: TypeScript

### Naming Conventions

| Element | Convention |
|---------|------------|
| Files | kebab-case |
| Functions | camelCase |
| Classes | PascalCase |
| Constants | SCREAMING_SNAKE_CASE |

### Import Style: Path Aliases (@/, ~/)

### Export Style: Mixed Style


*Preferred import style*

```typescript
// Use path aliases for imports
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/lib/api'
```

## Error Handling

### Error Handling Style: Try-Catch Blocks


*Standard error handling pattern*

```typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('User-friendly message')
}
```

## Common Workflows

These workflows were detected from analyzing commit patterns.

### Feature Development

Standard feature implementation workflow

**Frequency**: ~11 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `apps/www/config/*`
- `apps/www/content/docs/components/*`
- `apps/www/registry/*`
- `**/*.test.*`
- `**/api/**`

**Example commit sequence**:
```
feat: add font weight text component
docs: update documentation structure and remove architecture-animation component
feat: add live button components
```

### Add New Component With Demo And Docs

Adds a new UI component to the library, including its implementation, documentation, demo, and registry integration.

**Frequency**: ~2 times per month

**Steps**:
1. Implement the component in apps/www/registry/eldoraui/{component-name}.tsx
2. Create a demo in apps/www/registry/example/{component-name}-demo.tsx
3. Add documentation in apps/www/content/docs/components/{component-name}.mdx
4. Update the registry index in apps/www/registry/__index__.tsx
5. Update the registry UI in apps/www/registry/registry-ui.ts
6. Update the registry examples in apps/www/registry/registry-examples.ts
7. Update apps/www/config/docs.ts to register the new component
8. Add or update JSON metadata in apps/www/public/r/{component-name}.json and related demo JSONs
9. Update apps/www/public/registry.json and apps/www/registry.json
10. Update apps/www/public/llms.txt and apps/www/public/llms-full.txt

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry/__index__.tsx`
- `apps/www/registry/registry-ui.ts`
- `apps/www/registry/registry-examples.ts`
- `apps/www/config/docs.ts`
- `apps/www/public/r/*.json`
- `apps/www/public/registry.json`
- `apps/www/registry.json`
- `apps/www/public/llms.txt`
- `apps/www/public/llms-full.txt`

**Example commit sequence**:
```
Implement the component in apps/www/registry/eldoraui/{component-name}.tsx
Create a demo in apps/www/registry/example/{component-name}-demo.tsx
Add documentation in apps/www/content/docs/components/{component-name}.mdx
Update the registry index in apps/www/registry/__index__.tsx
Update the registry UI in apps/www/registry/registry-ui.ts
Update the registry examples in apps/www/registry/registry-examples.ts
Update apps/www/config/docs.ts to register the new component
Add or update JSON metadata in apps/www/public/r/{component-name}.json and related demo JSONs
Update apps/www/public/registry.json and apps/www/registry.json
Update apps/www/public/llms.txt and apps/www/public/llms-full.txt
```

### Update Readme Or Project Metadata

Updates project-level documentation or metadata such as README, LICENSE, or badges.

**Frequency**: ~1 times per month

**Steps**:
1. Edit README.md to update badges, instructions, or project description
2. Optionally update LICENSE.md for copyright or legal changes

**Files typically involved**:
- `README.md`
- `LICENSE.md`

**Example commit sequence**:
```
Edit README.md to update badges, instructions, or project description
Optionally update LICENSE.md for copyright or legal changes
```

### Add Blog Posts

Adds new blog posts to the site.

**Frequency**: ~1 times per month

**Steps**:
1. Create new .mdx files in apps/www/content/blog/
2. Commit all new blog post files together

**Files typically involved**:
- `apps/www/content/blog/*.mdx`

**Example commit sequence**:
```
Create new .mdx files in apps/www/content/blog/
Commit all new blog post files together
```

### Update Or Fix Component Documentation

Updates or fixes documentation for existing components, such as installation instructions or usage notes.

**Frequency**: ~2 times per month

**Steps**:
1. Edit relevant .mdx files in apps/www/content/docs/components/
2. Optionally update apps/www/content/docs/installation/index.mdx
3. Optionally update apps/www/config/site.ts if links or commands change

**Files typically involved**:
- `apps/www/content/docs/components/*.mdx`
- `apps/www/content/docs/installation/index.mdx`
- `apps/www/config/site.ts`

**Example commit sequence**:
```
Edit relevant .mdx files in apps/www/content/docs/components/
Optionally update apps/www/content/docs/installation/index.mdx
Optionally update apps/www/config/site.ts if links or commands change
```

### Update Dependencies And Lockfile

Updates npm package dependencies and lockfile, often for security or feature updates.

**Frequency**: ~1 times per month

**Steps**:
1. Edit apps/www/package.json to update dependencies
2. Regenerate pnpm-lock.yaml

**Files typically involved**:
- `apps/www/package.json`
- `pnpm-lock.yaml`

**Example commit sequence**:
```
Edit apps/www/package.json to update dependencies
Regenerate pnpm-lock.yaml
```


## Best Practices

Based on analysis of the codebase, follow these practices:

### Do

- Use conventional commit format (feat:, fix:, etc.)
- Use kebab-case for file names
- Prefer mixed exports

### Don't

- Don't use long relative imports (use aliases)
- Don't write vague commit messages
- Don't deviate from established patterns without discussion

---

*This skill was auto-generated by [ECC Tools](https://ecc.tools). Review and customize as needed for your team.*
