import * as React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/config/site"
import { Index } from "@/registry/__index__"
import {
  getDemoItem,
  getRegistryComponent,
  getRegistryItem,
} from "@/lib/registry"
import { absoluteUrl } from "@/lib/utils"

import { ComponentPreview } from "./component-preview"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

const getCachedRegistryItem = React.cache(async (name: string) => {
  // Try registry item first, then fallback to demo item (for examples).
  const item = await getRegistryItem(name)
  if (item) {
    return item
  }
  return await getDemoItem(name)
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    name: string
  }>
}): Promise<Metadata> {
  const { name } = await params
  const item = await getCachedRegistryItem(name)

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title: item.name,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/view/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams() {
  const { Index } = await import("@/registry/__index__")
  const params: Array<{ name: string }> = []

  for (const key of Object.keys(Index)) {
    const item = Index[key]
    if (!item || typeof item !== "object") {
      continue
    }

    if (
      [
        "registry:block",
        "registry:component",
        "registry:example",
        "registry:internal",
        "registry:ui",
      ].includes((item as { type?: string }).type ?? "")
    ) {
      params.push({ name: (item as { name: string }).name })
    }
  }

  return params
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    name: string
  }>
}) {
  const { name } = await params

  const item = await getCachedRegistryItem(name)
  // Prefer demo component when viewing a component that has a demo (e.g. github-inline-comments -> github-inline-comments-demo)
  const demoName = `${name}-demo`
  const demoItem = Index[demoName]
  const Component =
    demoItem && typeof (demoItem as { component?: unknown }).component !== "undefined"
      ? getRegistryComponent(demoName)
      : getRegistryComponent(name)

  if (!item || !Component) {
    return notFound()
  }

  return (
    <ComponentPreview>
      <Component />
    </ComponentPreview>
  )
}
