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

- Average message length: ~50 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/commands/add-or-update-eldoraui-command-md.md)
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
feat: add eldoraui ECC bundle (.claude/commands/add-eldoraui-ecc-bundle.md)
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

**Frequency**: ~30 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `.claude/commands/*`

**Example commit sequence**:
```
feat: add eldoraui ECC bundle (.codex/AGENTS.md)
feat: add eldoraui ECC bundle (.codex/agents/explorer.toml)
feat: add eldoraui ECC bundle (.codex/agents/reviewer.toml)
```

### Add Eldoraui Ecc Bundle

Adds or updates the eldoraui ECC bundle, which includes commands, skills, agent configs, instincts, and documentation.

**Frequency**: ~4 times per month

**Steps**:
1. Add or update .claude/commands/*.md files related to eldoraui commands (e.g., add-eldoraui-ecc-bundle.md, feature-development.md, add-or-update-eldoraui-command-md.md, update-readme-badge-or-section.md, update-readme-or-project-metadata.md, add-new-component-with-demo-and-docs.md, update-component-or-docs.md)
2. Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
3. Add or update .codex/agents/*.toml files (docs-researcher.toml, reviewer.toml, explorer.toml)
4. Add or update .codex/AGENTS.md
5. Add or update .codex/config.toml
6. Add or update .claude/identity.json
7. Add or update .agents/skills/eldoraui/agents/openai.yaml
8. Add or update .agents/skills/eldoraui/SKILL.md
9. Add or update .claude/skills/eldoraui/SKILL.md
10. Add or update .claude/ecc-tools.json

**Files typically involved**:
- `.claude/commands/*.md`
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`
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
Add or update .claude/commands/*.md files related to eldoraui commands (e.g., add-eldoraui-ecc-bundle.md, feature-development.md, add-or-update-eldoraui-command-md.md, update-readme-badge-or-section.md, update-readme-or-project-metadata.md, add-new-component-with-demo-and-docs.md, update-component-or-docs.md)
Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
Add or update .codex/agents/*.toml files (docs-researcher.toml, reviewer.toml, explorer.toml)
Add or update .codex/AGENTS.md
Add or update .codex/config.toml
Add or update .claude/identity.json
Add or update .agents/skills/eldoraui/agents/openai.yaml
Add or update .agents/skills/eldoraui/SKILL.md
Add or update .claude/skills/eldoraui/SKILL.md
Add or update .claude/ecc-tools.json
```

### Add Or Update Eldoraui Command Docs

Adds or updates documentation for eldoraui-related commands in the .claude/commands directory.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update a .claude/commands/*.md file for the specific command (e.g., add-eldoraui-ecc-bundle.md, feature-development.md, add-or-update-eldoraui-command-md.md, update-readme-badge-or-section.md, update-readme-or-project-metadata.md, add-new-component-with-demo-and-docs.md, update-component-or-docs.md)

**Files typically involved**:
- `.claude/commands/*.md`

**Example commit sequence**:
```
Add or update a .claude/commands/*.md file for the specific command (e.g., add-eldoraui-ecc-bundle.md, feature-development.md, add-or-update-eldoraui-command-md.md, update-readme-badge-or-section.md, update-readme-or-project-metadata.md, add-new-component-with-demo-and-docs.md, update-component-or-docs.md)
```

### Update Eldoraui Instincts

Adds or updates the eldoraui instincts YAML file, which likely defines behavioral patterns or configuration for the agent.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml

**Files typically involved**:
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`

**Example commit sequence**:
```
Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
```

### Update Codex Agents And Docs

Adds or updates agent configuration files and documentation in the .codex directory.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update .codex/agents/*.toml files (docs-researcher.toml, reviewer.toml, explorer.toml)
2. Add or update .codex/AGENTS.md

**Files typically involved**:
- `.codex/agents/*.toml`
- `.codex/AGENTS.md`

**Example commit sequence**:
```
Add or update .codex/agents/*.toml files (docs-researcher.toml, reviewer.toml, explorer.toml)
Add or update .codex/AGENTS.md
```

### Update Eldoraui Skill Docs

Adds or updates SKILL.md documentation for eldoraui skills in both .agents and .claude directories.

**Frequency**: ~2 times per month

**Steps**:
1. Add or update .agents/skills/eldoraui/SKILL.md
2. Add or update .claude/skills/eldoraui/SKILL.md

**Files typically involved**:
- `.agents/skills/eldoraui/SKILL.md`
- `.claude/skills/eldoraui/SKILL.md`

**Example commit sequence**:
```
Add or update .agents/skills/eldoraui/SKILL.md
Add or update .claude/skills/eldoraui/SKILL.md
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
