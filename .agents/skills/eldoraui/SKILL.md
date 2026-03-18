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

- Average message length: ~44 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/commands/update-readme-or-project-metadata.md)
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

*Commit message example*

```text
feat: add eldoraui ECC bundle (.codex/agents/docs-researcher.toml)
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

Adds a new UI component to the library, including implementation, documentation, demo, and registry updates.

**Frequency**: ~2 times per month

**Steps**:
1. Implement the component in apps/www/registry/eldoraui/{component}.tsx
2. Create demo(s) in apps/www/registry/example/{component-demo}.tsx
3. Add documentation in apps/www/content/docs/components/{component}.mdx
4. Update registry index in apps/www/registry/__index__.tsx
5. Update registry-examples and registry-ui as needed
6. Update apps/www/config/docs.ts to register the component
7. Add JSON metadata in apps/www/public/r/{component}.json and/or apps/www/public/r/{component-demo}.json
8. Update apps/www/public/registry.json and apps/www/registry.json

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry/__index__.tsx`
- `apps/www/registry/registry-examples.ts`
- `apps/www/registry/registry-ui.ts`
- `apps/www/config/docs.ts`
- `apps/www/public/r/*.json`
- `apps/www/public/registry.json`
- `apps/www/registry.json`

**Example commit sequence**:
```
Implement the component in apps/www/registry/eldoraui/{component}.tsx
Create demo(s) in apps/www/registry/example/{component-demo}.tsx
Add documentation in apps/www/content/docs/components/{component}.mdx
Update registry index in apps/www/registry/__index__.tsx
Update registry-examples and registry-ui as needed
Update apps/www/config/docs.ts to register the component
Add JSON metadata in apps/www/public/r/{component}.json and/or apps/www/public/r/{component-demo}.json
Update apps/www/public/registry.json and apps/www/registry.json
```

### Update Component Or Docs

Updates an existing component, its documentation, or related registry/config files.

**Frequency**: ~2 times per month

**Steps**:
1. Edit component implementation in apps/www/registry/eldoraui/{component}.tsx or related files
2. Update documentation in apps/www/content/docs/components/{component}.mdx
3. Update registry or config files as needed (e.g., apps/www/config/docs.ts, apps/www/registry/__index__.tsx)
4. Update JSON metadata if necessary

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/config/docs.ts`
- `apps/www/registry/__index__.tsx`
- `apps/www/public/r/*.json`

**Example commit sequence**:
```
Edit component implementation in apps/www/registry/eldoraui/{component}.tsx or related files
Update documentation in apps/www/content/docs/components/{component}.mdx
Update registry or config files as needed (e.g., apps/www/config/docs.ts, apps/www/registry/__index__.tsx)
Update JSON metadata if necessary
```

### Add Multiple Content Items

Bulk adds new content items such as blog posts or documentation files.

**Frequency**: ~1 times per month

**Steps**:
1. Add multiple new files under apps/www/content/blog/*.mdx or apps/www/content/docs/*.mdx
2. Commit all new content files in a single commit

**Files typically involved**:
- `apps/www/content/blog/*.mdx`
- `apps/www/content/docs/*.mdx`

**Example commit sequence**:
```
Add multiple new files under apps/www/content/blog/*.mdx or apps/www/content/docs/*.mdx
Commit all new content files in a single commit
```

### Dependency Or Security Update

Updates dependencies or patches security vulnerabilities, often in package.json and lock files.

**Frequency**: ~1 times per month

**Steps**:
1. Update apps/www/package.json
2. Update pnpm-lock.yaml
3. Commit changes

**Files typically involved**:
- `apps/www/package.json`
- `pnpm-lock.yaml`

**Example commit sequence**:
```
Update apps/www/package.json
Update pnpm-lock.yaml
Commit changes
```

### Add Or Update Readme Or Project Metadata

Updates or adds project-level documentation or metadata files, such as README.md or AGENTS.md.

**Frequency**: ~1 times per month

**Steps**:
1. Edit README.md or AGENTS.md or similar project-level docs
2. Commit changes

**Files typically involved**:
- `README.md`
- `AGENTS.md`

**Example commit sequence**:
```
Edit README.md or AGENTS.md or similar project-level docs
Commit changes
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
