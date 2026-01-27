"use server"

import { registryItemSchema, type RegistryItem } from "shadcn/schema"

type BlockType = Extract<
  RegistryItem["type"],
  "registry:block" | "registry:internal"
>

export async function getAllBlockIds(
  types: BlockType[] = ["registry:block", "registry:internal"],
  categories: string[] = []
): Promise<string[]> {
  const blocks = await getAllBlocks(types, categories)

  return blocks.map((block) => block.name)
}

export async function getAllBlocks(
  types: BlockType[] = ["registry:block", "registry:internal"],
  categories: string[] = []
): Promise<RegistryItem[]> {
  const { Index } = await import("@/registry/__index__")

  // Collect all blocks from the flat registry index.
  const allBlocks: RegistryItem[] = []

  for (const key of Object.keys(Index)) {
    const item = Index[key] as RegistryItem | undefined
    if (item) {
      allBlocks.push(item)
    }
  }

  // Validate each block.
  const validatedBlocks: RegistryItem[] = allBlocks
    .map((block) => {
      const result = registryItemSchema.safeParse(block)
      return result.success ? (result.data as RegistryItem) : null
    })
    .filter((block): block is RegistryItem => block !== null)

  return validatedBlocks.filter((block) => {
    if (!types.includes(block.type as BlockType)) {
      return false
    }

    if (categories.length > 0) {
      const blockCategories = block.categories ?? []
      const hasCategoryMatch = blockCategories.some((category: string) =>
        categories.includes(category)
      )
      if (!hasCategoryMatch) {
        return false
      }
    }

    return !block.name.startsWith("chart-")
  })
}
