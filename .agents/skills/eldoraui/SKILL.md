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

- Average message length: ~47 characters
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

**Frequency**: ~26 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `apps/www/content/blog/*`
- `.claude/commands/*`

**Example commit sequence**:
```
Add Vercel support section to README
Update Vercel OSS Program badge in README
feat: add 10 blog posts to increase component library value
```

### Add Eldoraui Ecc Bundle

Adds or updates a set of configuration, command, skill, and agent files related to the eldoraui ECC bundle across multiple subdirectories.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update files in .claude/commands/ (e.g., add-new-component-with-demo-and-docs.md, update-readme-or-project-metadata.md, feature-development.md, update-component-or-docs.md)
2. Add or update files in .claude/homunculus/instincts/inherited/ (e.g., eldoraui-instincts.yaml)
3. Add or update files in .codex/agents/ (e.g., docs-researcher.toml, reviewer.toml, explorer.toml)
4. Add or update .codex/AGENTS.md and .codex/config.toml
5. Add or update .claude/identity.json
6. Add or update .agents/skills/eldoraui/ (e.g., agents/openai.yaml, SKILL.md)
7. Add or update .claude/skills/eldoraui/SKILL.md
8. Add or update .claude/ecc-tools.json

**Files typically involved**:
- `.claude/commands/*.md`
- `.claude/homunculus/instincts/inherited/*.yaml`
- `.codex/agents/*.toml`
- `.codex/AGENTS.md`
- `.codex/config.toml`
- `.claude/identity.json`
- `.agents/skills/eldoraui/agents/openai.yaml`
- `.agents/skills/eldoraui/SKILL.md`
- `.claude/skills/eldoraui/SKILL.md`
- `.claude/ecc-tools.json`

**Example commit sequence**:
```
Add or update files in .claude/commands/ (e.g., add-new-component-with-demo-and-docs.md, update-readme-or-project-metadata.md, feature-development.md, update-component-or-docs.md)
Add or update files in .claude/homunculus/instincts/inherited/ (e.g., eldoraui-instincts.yaml)
Add or update files in .codex/agents/ (e.g., docs-researcher.toml, reviewer.toml, explorer.toml)
Add or update .codex/AGENTS.md and .codex/config.toml
Add or update .claude/identity.json
Add or update .agents/skills/eldoraui/ (e.g., agents/openai.yaml, SKILL.md)
Add or update .claude/skills/eldoraui/SKILL.md
Add or update .claude/ecc-tools.json
```

### Update Readme Badge Or Section

Updates the README.md file to add or modify badges or support sections (e.g., Vercel OSS Program badge, support section).

**Frequency**: ~1 times per month

**Steps**:
1. Edit README.md to add or update a badge
2. Edit README.md to add or update a support section

**Files typically involved**:
- `README.md`

**Example commit sequence**:
```
Edit README.md to add or update a badge
Edit README.md to add or update a support section
```

### Fix Ui Component Or Config

Fixes bugs or updates in UI components, configuration, or content files, often involving multiple related files for a specific feature or section.

**Frequency**: ~2 times per month

**Steps**:
1. Edit one or more component files (e.g., site-banner.tsx, analytics.tsx, block-image.tsx, block-viewer.tsx)
2. Edit related config or content files if necessary (e.g., site.ts, registry/blocks/*, content/docs/*)
3. Commit with a descriptive fix message

**Files typically involved**:
- `apps/www/components/*.tsx`
- `apps/www/config/*.ts`
- `apps/www/registry/blocks/*/components/*.tsx`
- `apps/www/registry/blocks/*/page.tsx`
- `apps/www/content/docs/*.mdx`
- `apps/www/app/og/route.tsx`

**Example commit sequence**:
```
Edit one or more component files (e.g., site-banner.tsx, analytics.tsx, block-image.tsx, block-viewer.tsx)
Edit related config or content files if necessary (e.g., site.ts, registry/blocks/*, content/docs/*)
Commit with a descriptive fix message
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
