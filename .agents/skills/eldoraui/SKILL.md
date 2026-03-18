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

- Average message length: ~45 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/commands/update-component-or-docs.md)
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

**Frequency**: ~20 times per month

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
Add "Holographic Card" component
Change framer-motion for motion
Change framer-motion for motion
```

### Add New Component With Demo And Docs

Adds a new UI component to the library, including its implementation, documentation, demo/example, and registry/config updates.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update implementation file for the new component under apps/www/registry/eldoraui/ or apps/www/registry/blocks/
2. Add or update a demo/example file under apps/www/registry/example/
3. Add or update documentation markdown under apps/www/content/docs/components/
4. Update registry and index files (apps/www/registry.json, apps/www/public/registry.json, apps/www/registry/__index__.tsx, apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts)
5. Update config/docs.ts and possibly config/site.ts
6. Update or add public assets (apps/www/public/r/*.json, apps/www/public/blocks/*, etc.)

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/blocks/*/components/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry.json`
- `apps/www/public/registry.json`
- `apps/www/registry/__index__.tsx`
- `apps/www/registry/registry-examples.ts`
- `apps/www/registry/registry-ui.ts`
- `apps/www/config/docs.ts`
- `apps/www/public/r/*.json`

**Example commit sequence**:
```
Create or update implementation file for the new component under apps/www/registry/eldoraui/ or apps/www/registry/blocks/
Add or update a demo/example file under apps/www/registry/example/
Add or update documentation markdown under apps/www/content/docs/components/
Update registry and index files (apps/www/registry.json, apps/www/public/registry.json, apps/www/registry/__index__.tsx, apps/www/registry/registry-examples.ts, apps/www/registry/registry-ui.ts)
Update config/docs.ts and possibly config/site.ts
Update or add public assets (apps/www/public/r/*.json, apps/www/public/blocks/*, etc.)
```

### Update Readme Or Project Metadata

Updates the README file or project metadata, such as badges or support sections.

**Frequency**: ~1 times per month

**Steps**:
1. Edit README.md to add or update badges, support sections, or other metadata.
2. Commit the changes.

**Files typically involved**:
- `README.md`

**Example commit sequence**:
```
Edit README.md to add or update badges, support sections, or other metadata.
Commit the changes.
```

### Add Or Update Ecc Bundle Commands And Skills

Adds or updates ECC (Eldora Command Center) bundle files, including commands, skills, and agent configurations.

**Frequency**: ~1 times per month

**Steps**:
1. Add or update markdown files for commands under .claude/commands/
2. Add or update skill definitions under .claude/skills/eldoraui/ or .agents/skills/eldoraui/
3. Add or update agent configuration files under .codex/agents/
4. Update supporting metadata/configuration files (.claude/ecc-tools.json, .claude/identity.json, .codex/AGENTS.md, etc.)

**Files typically involved**:
- `.claude/commands/*.md`
- `.claude/skills/eldoraui/SKILL.md`
- `.agents/skills/eldoraui/SKILL.md`
- `.codex/agents/*.toml`
- `.codex/AGENTS.md`
- `.claude/ecc-tools.json`
- `.claude/identity.json`
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`

**Example commit sequence**:
```
Add or update markdown files for commands under .claude/commands/
Add or update skill definitions under .claude/skills/eldoraui/ or .agents/skills/eldoraui/
Add or update agent configuration files under .codex/agents/
Update supporting metadata/configuration files (.claude/ecc-tools.json, .claude/identity.json, .codex/AGENTS.md, etc.)
```

### Fix Or Update Existing Component Or Demo

Fixes bugs or updates in existing components, demos, or documentation, often in response to errors or quality improvements.

**Frequency**: ~2 times per month

**Steps**:
1. Edit implementation files for components or demos (apps/www/registry/eldoraui/, apps/www/registry/blocks/, apps/www/registry/example/).
2. Update related documentation if needed (apps/www/content/docs/components/).
3. Update registry and public asset files if necessary.
4. Update config files (config/docs.ts, config/site.ts) if needed.
5. Commit the changes.

**Files typically involved**:
- `apps/www/registry/eldoraui/*.tsx`
- `apps/www/registry/blocks/*/components/*.tsx`
- `apps/www/registry/example/*.tsx`
- `apps/www/content/docs/components/*.mdx`
- `apps/www/registry.json`
- `apps/www/public/registry.json`
- `apps/www/registry/__index__.tsx`
- `apps/www/registry/registry-examples.ts`
- `apps/www/registry/registry-ui.ts`
- `apps/www/config/docs.ts`
- `apps/www/public/r/*.json`

**Example commit sequence**:
```
Edit implementation files for components or demos (apps/www/registry/eldoraui/, apps/www/registry/blocks/, apps/www/registry/example/).
Update related documentation if needed (apps/www/content/docs/components/).
Update registry and public asset files if necessary.
Update config files (config/docs.ts, config/site.ts) if needed.
Commit the changes.
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
