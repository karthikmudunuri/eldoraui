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

- Average message length: ~48 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add eldoraui ECC bundle (.claude/commands/update-readme-badge-or-section.md)
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

Adds a new ECC (Eldoraui Component Collection) bundle, which includes configuration, agent definitions, skills, commands, and documentation files for the eldoraui system.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update .claude/commands/*.md files (such as add-new-component-with-demo-and-docs.md, feature-development.md, update-readme-or-project-metadata.md, update-component-or-docs.md, update-readme-badge-or-section.md)
2. Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
3. Add or update .codex/agents/*.toml files (such as docs-researcher.toml, reviewer.toml, explorer.toml)
4. Add or update .codex/AGENTS.md and .codex/config.toml
5. Add or update .claude/identity.json
6. Add or update .agents/skills/eldoraui/agents/openai.yaml
7. Add or update .agents/skills/eldoraui/SKILL.md
8. Add or update .claude/skills/eldoraui/SKILL.md
9. Add or update .claude/ecc-tools.json

**Files typically involved**:
- `.claude/commands/add-new-component-with-demo-and-docs.md`
- `.claude/commands/feature-development.md`
- `.claude/commands/update-readme-or-project-metadata.md`
- `.claude/commands/update-component-or-docs.md`
- `.claude/commands/update-readme-badge-or-section.md`
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`
- `.codex/agents/docs-researcher.toml`
- `.codex/agents/reviewer.toml`
- `.codex/agents/explorer.toml`
- `.codex/AGENTS.md`
- `.codex/config.toml`
- `.claude/identity.json`
- `.agents/skills/eldoraui/agents/openai.yaml`
- `.agents/skills/eldoraui/SKILL.md`
- `.claude/skills/eldoraui/SKILL.md`
- `.claude/ecc-tools.json`

**Example commit sequence**:
```
Add or update .claude/commands/*.md files (such as add-new-component-with-demo-and-docs.md, feature-development.md, update-readme-or-project-metadata.md, update-component-or-docs.md, update-readme-badge-or-section.md)
Add or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
Add or update .codex/agents/*.toml files (such as docs-researcher.toml, reviewer.toml, explorer.toml)
Add or update .codex/AGENTS.md and .codex/config.toml
Add or update .claude/identity.json
Add or update .agents/skills/eldoraui/agents/openai.yaml
Add or update .agents/skills/eldoraui/SKILL.md
Add or update .claude/skills/eldoraui/SKILL.md
Add or update .claude/ecc-tools.json
```

### Add Or Update Eldoraui Command Md

Adds or updates command documentation Markdown files for eldoraui, describing workflows or features.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update .claude/commands/*.md file(s) relevant to the workflow (e.g., add-new-component-with-demo-and-docs.md, feature-development.md, update-readme-or-project-metadata.md, update-component-or-docs.md, update-readme-badge-or-section.md)

**Files typically involved**:
- `.claude/commands/add-new-component-with-demo-and-docs.md`
- `.claude/commands/feature-development.md`
- `.claude/commands/update-readme-or-project-metadata.md`
- `.claude/commands/update-component-or-docs.md`
- `.claude/commands/update-readme-badge-or-section.md`

**Example commit sequence**:
```
Create or update .claude/commands/*.md file(s) relevant to the workflow (e.g., add-new-component-with-demo-and-docs.md, feature-development.md, update-readme-or-project-metadata.md, update-component-or-docs.md, update-readme-badge-or-section.md)
```

### Add Or Update Codex Agents

Adds or updates agent configuration files in the .codex/agents directory, defining agent behaviors for eldoraui.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update .codex/agents/*.toml files (such as docs-researcher.toml, reviewer.toml, explorer.toml)
2. Update .codex/AGENTS.md to document the available agents

**Files typically involved**:
- `.codex/agents/docs-researcher.toml`
- `.codex/agents/reviewer.toml`
- `.codex/agents/explorer.toml`
- `.codex/AGENTS.md`

**Example commit sequence**:
```
Create or update .codex/agents/*.toml files (such as docs-researcher.toml, reviewer.toml, explorer.toml)
Update .codex/AGENTS.md to document the available agents
```

### Add Or Update Eldoraui Skill Md

Adds or updates SKILL.md documentation files for eldoraui skills in both .agents and .claude directories.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update .agents/skills/eldoraui/SKILL.md
2. Create or update .claude/skills/eldoraui/SKILL.md

**Files typically involved**:
- `.agents/skills/eldoraui/SKILL.md`
- `.claude/skills/eldoraui/SKILL.md`

**Example commit sequence**:
```
Create or update .agents/skills/eldoraui/SKILL.md
Create or update .claude/skills/eldoraui/SKILL.md
```

### Add Or Update Eldoraui Instincts

Adds or updates the eldoraui instincts YAML file, which may define behavioral patterns or defaults.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml

**Files typically involved**:
- `.claude/homunculus/instincts/inherited/eldoraui-instincts.yaml`

**Example commit sequence**:
```
Create or update .claude/homunculus/instincts/inherited/eldoraui-instincts.yaml
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
