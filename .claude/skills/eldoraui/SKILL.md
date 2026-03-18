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

- Average message length: ~43 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/commands/add-blog-posts.md)
```

*Commit message example*

```text
style: format blog posts with prettier
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
feat: add eldoraui ECC bundle (.claude/commands/add-new-component-with-demo-and-docs.md)
```

*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/commands/feature-development.md)
```

*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml)
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

**Frequency**: ~16 times per month

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
feat: add animated list component
fix: update installation command for animated list component
docs: update AGENTS.md
```

### Add New Component With Demo And Docs

Adds a new UI component to the library, including implementation, demo, documentation, and registry updates.

**Frequency**: ~2 times per month

**Steps**:
1. Implement the new component in apps/www/registry/eldoraui/{component-name}.tsx
2. Create demo(s) for the component in apps/www/registry/example/{component-name}-demo.tsx (and possibly numbered variants)
3. Add documentation in apps/www/content/docs/components/{component-name}.mdx
4. Update registry files: apps/www/registry.json, apps/www/public/registry.json, apps/www/public/r/{component-name}.json, apps/www/public/r/{component-name}-demo.json, apps/www/registry/__index__.tsx, apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts
5. Update apps/www/config/docs.ts to register the new component
6. Update apps/www/public/llms-full.txt and apps/www/public/llms.txt

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/example/*-demo*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/config/docs.ts`
- `apps/www/registry.json`
- `apps/www/public/registry.json`
- `apps/www/public/r/*.json`
- `apps/www/registry/__index__.tsx`
- `apps/www/registry/registry-examples.ts`
- `apps/www/registry/registry-ui.ts`
- `apps/www/public/llms-full.txt`
- `apps/www/public/llms.txt`

**Example commit sequence**:
```
Implement the new component in apps/www/registry/eldoraui/{component-name}.tsx
Create demo(s) for the component in apps/www/registry/example/{component-name}-demo.tsx (and possibly numbered variants)
Add documentation in apps/www/content/docs/components/{component-name}.mdx
Update registry files: apps/www/registry.json, apps/www/public/registry.json, apps/www/public/r/{component-name}.json, apps/www/public/r/{component-name}-demo.json, apps/www/registry/__index__.tsx, apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts
Update apps/www/config/docs.ts to register the new component
Update apps/www/public/llms-full.txt and apps/www/public/llms.txt
```

### Add Blog Posts

Adds new blog posts to the site, often in bulk.

**Frequency**: ~1 times per month

**Steps**:
1. Create new .mdx files in apps/www/content/blog/
2. Optionally, format blog posts with prettier

**Files typically involved**:
- `apps/www/content/blog/*.mdx`

**Example commit sequence**:
```
Create new .mdx files in apps/www/content/blog/
Optionally, format blog posts with prettier
```

### Update Readme Or Badges

Updates the README file, often to add or update badges or support sections.

**Frequency**: ~1 times per month

**Steps**:
1. Edit README.md to add or update badges, support sections, or other documentation

**Files typically involved**:
- `README.md`

**Example commit sequence**:
```
Edit README.md to add or update badges, support sections, or other documentation
```

### Dependency Or Security Update

Updates dependencies to fix vulnerabilities or upgrade packages.

**Frequency**: ~1 times per month

**Steps**:
1. Update apps/www/package.json
2. Update pnpm-lock.yaml

**Files typically involved**:
- `apps/www/package.json`
- `pnpm-lock.yaml`

**Example commit sequence**:
```
Update apps/www/package.json
Update pnpm-lock.yaml
```

### Add Legal Or Policy Docs

Adds or updates legal documentation such as privacy policy or terms and conditions.

**Frequency**: ~1 times per month

**Steps**:
1. Create or update .mdx files in apps/www/content/docs/ (privacy-policy.mdx, terms-and-conditions.mdx)

**Files typically involved**:
- `apps/www/content/docs/privacy-policy.mdx`
- `apps/www/content/docs/terms-and-conditions.mdx`

**Example commit sequence**:
```
Create or update .mdx files in apps/www/content/docs/ (privacy-policy.mdx, terms-and-conditions.mdx)
```

### Fix Build Or Bug

Fixes build errors or bugs, often by updating one or more implementation files.

**Frequency**: ~2 times per month

**Steps**:
1. Edit relevant implementation files (e.g., .tsx, .ts, .mdx, config files) to fix the error

**Files typically involved**:
- `apps/www/app/**/*.tsx`
- `apps/www/components/**/*.tsx`
- `apps/www/config/**/*.ts`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry/**/*.tsx`
- `apps/www/public/r/*.json`
- `apps/www/public/registry.json`
- `apps/www/registry.json`

**Example commit sequence**:
```
Edit relevant implementation files (e.g., .tsx, .ts, .mdx, config files) to fix the error
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
