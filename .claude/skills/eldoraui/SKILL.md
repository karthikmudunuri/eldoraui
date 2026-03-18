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
style: format blog posts with prettier
```

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

**Frequency**: ~10 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `apps/www/components/sections/*`
- `apps/www/components/*`
- `apps/www/config/*`
- `**/*.test.*`
- `**/api/**`

**Example commit sequence**:
```
feat: add live button components
feat: add animated shiny button component with demo
chore: update copyright information and discord link in README
```

### Add New Component With Demo And Docs

Adds a new UI component to the library, including implementation, demo, documentation, and registry integration.

**Frequency**: ~2 times per month

**Steps**:
1. Implement component in apps/www/registry/eldoraui/{component-name}.tsx
2. Create demo(s) in apps/www/registry/example/{component-name}-demo.tsx
3. Add documentation in apps/www/content/docs/components/{component-name}.mdx
4. Update registry files: apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts, apps/www/registry/__index__.tsx
5. Update apps/www/config/docs.ts to register the component
6. Add or update JSON metadata in apps/www/public/r/{component-name}.json and related demo JSONs
7. Update public registry files: apps/www/public/registry.json, apps/www/registry.json
8. Update apps/www/public/llms.txt and apps/www/public/llms-full.txt

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry/registry-examples.ts`
- `apps/www/registry/registry-ui.ts`
- `apps/www/registry/__index__.tsx`
- `apps/www/config/docs.ts`
- `apps/www/public/r/*.json`
- `apps/www/public/registry.json`
- `apps/www/registry.json`
- `apps/www/public/llms.txt`
- `apps/www/public/llms-full.txt`

**Example commit sequence**:
```
Implement component in apps/www/registry/eldoraui/{component-name}.tsx
Create demo(s) in apps/www/registry/example/{component-name}-demo.tsx
Add documentation in apps/www/content/docs/components/{component-name}.mdx
Update registry files: apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts, apps/www/registry/__index__.tsx
Update apps/www/config/docs.ts to register the component
Add or update JSON metadata in apps/www/public/r/{component-name}.json and related demo JSONs
Update public registry files: apps/www/public/registry.json, apps/www/registry.json
Update apps/www/public/llms.txt and apps/www/public/llms-full.txt
```

### Add Blog Posts

Adds new blog posts to the website content.

**Frequency**: ~1 times per month

**Steps**:
1. Add new .mdx files to apps/www/content/blog/
2. Optionally, format all blog posts with Prettier

**Files typically involved**:
- `apps/www/content/blog/*.mdx`

**Example commit sequence**:
```
Add new .mdx files to apps/www/content/blog/
Optionally, format all blog posts with Prettier
```

### Update Readme Or Project Metadata

Updates the README or project metadata such as badges, copyright, or support info.

**Frequency**: ~2 times per month

**Steps**:
1. Edit README.md
2. Optionally edit LICENSE.md

**Files typically involved**:
- `README.md`
- `LICENSE.md`

**Example commit sequence**:
```
Edit README.md
Optionally edit LICENSE.md
```

### Update Or Fix Component Documentation

Makes small updates or fixes to documentation for existing components.

**Frequency**: ~2 times per month

**Steps**:
1. Edit one or more apps/www/content/docs/components/*.mdx files
2. Optionally update apps/www/config/docs.ts

**Files typically involved**:
- `apps/www/content/docs/components/*.mdx`
- `apps/www/config/docs.ts`

**Example commit sequence**:
```
Edit one or more apps/www/content/docs/components/*.mdx files
Optionally update apps/www/config/docs.ts
```

### Update Dependencies And Lockfile

Updates dependencies in package.json and synchronizes the lockfile, often for security patches.

**Frequency**: ~1 times per month

**Steps**:
1. Edit apps/www/package.json
2. Edit pnpm-lock.yaml

**Files typically involved**:
- `apps/www/package.json`
- `pnpm-lock.yaml`

**Example commit sequence**:
```
Edit apps/www/package.json
Edit pnpm-lock.yaml
```

### Fix Build Or Bug

Fixes build errors or bugs, often by editing one or a few files related to the error.

**Frequency**: ~2 times per month

**Steps**:
1. Edit the file(s) causing the error (often in apps/www/app/, apps/www/components/, or registry files)
2. Commit with a message indicating a fix

**Files typically involved**:
- `apps/www/app/**/*.tsx`
- `apps/www/components/**/*.tsx`
- `apps/www/registry/**/*.tsx`
- `apps/www/config/**/*.ts`
- `apps/www/content/docs/**/*.mdx`

**Example commit sequence**:
```
Edit the file(s) causing the error (often in apps/www/app/, apps/www/components/, or registry files)
Commit with a message indicating a fix
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
