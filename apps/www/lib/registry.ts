import fs from "node:fs/promises"
import { tmpdir } from "os"
import path from "path"
import * as React from "react"
import { RegistryItem, registryItemSchema } from "shadcn/schema"
import { Project, ScriptKind } from "ts-morph"

import { Index } from "@/registry/__index__"

// Fumadocs zod v4 compat type fix. Temporary.
export interface RegistryItemFile {
  path: string
  content: string
  type: RegistryItem["type"]
  target: string
}

interface RegistryFile {
  path: string
  type: RegistryItem["type"]
  target: string
}

interface RegistryIndexItem {
  name: string
  description: string
  type: RegistryItem["type"]
  registryDependencies?: string[]
  files: Array<{
    path: string
    type: RegistryItem["type"]
    target: string
  }>
  component: React.LazyExoticComponent<React.ComponentType<unknown>> | null
  meta?: unknown
}

export function getRegistryComponent(name: string) {
  const item = Index[name] as RegistryIndexItem
  return item?.component
}

export async function getDemoItem(name: string) {
  // EldoraUI uses a single flat registry index (no styles).
  // Most "demo" content is already present as `registry:example` items, so
  // `getRegistryItem` usually covers it. This helper exists as a fallback for
  // non-registry examples.
  const item = await getRegistryItem(name)
  if (item) {
    return item
  }

  return null
}

export async function getRegistryItem(name: string) {
  const item = Index[name] as RegistryIndexItem

  if (!item) {
    return null
  }

  // Convert all file paths to object.
  // TODO: remove when we migrate to new registry.
  if (item.files) {
    item.files = item.files.map(
      (
        file:
          | string
          | { path: string; type: RegistryItem["type"]; target: string }
      ) =>
        typeof file === "string"
          ? { path: file, type: item.type, target: "" }
          : file
    )
  }

  // Fail early before doing expensive file operations.
  const result = registryItemSchema.safeParse(item)
  if (!result.success) {
    return null
  }

  let files: typeof result.data.files = []
  if (item.files) {
    for (const file of item.files) {
      const content = await getFileContent(file)
      const relativePath = path.relative(process.cwd(), file.path)

      files.push({
        ...file,
        path: relativePath,
        content,
      })
    }
  }

  // Fix file paths.
  files = fixFilePaths(files as RegistryItemFile[])

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
  })

  if (!parsed.success) {
    console.error(parsed.error.message)
    return null
  }

  return parsed.data
}

async function getFileContent(file: RegistryFile) {
  const raw = await fs.readFile(file.path, "utf-8")

  const project = new Project({
    compilerOptions: {},
  })

  const tempFile = await createTempSourceFile(file.path)
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  })

  // Remove meta variables.
  // removeVariable(sourceFile, "iframeHeight")
  // removeVariable(sourceFile, "containerClassName")
  // removeVariable(sourceFile, "description")

  let code = sourceFile.getFullText()

  // Some registry items uses default export.
  // We want to use named export instead.
  // TODO: do we really need this? - @shadcn.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export")
  }

  // Fix imports.
  code = fixImport(code)

  return code
}

function getFileTarget(file: RegistryFile) {
  let target = file.target

  if (!target || target === "") {
    const fileName = file.path.split("/").pop()
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`
    }
  }

  return target ?? ""
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"))
  return path.join(dir, filename)
}

function fixFilePaths(files: RegistryItemFile[]) {
  if (!files) {
    return []
  }

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0].path
  const firstFilePathDir = path.dirname(firstFilePath)

  return files.map((file) => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    }
  })
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`
    }

    return match
  }

  return content.replace(regex, replacement)
}

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = []

  for (const file of files) {
    const path = file.target ?? file.path
    const parts = path.split("/")
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find((node) => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!
        }
      } else {
        const newNode: FileTree = isFile
          ? { name: part, path }
          : { name: part, children: [] }

        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  return root
}
