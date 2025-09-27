"use client"

import Link from "next/link"
import { toast } from "sonner"

import { siteConfig } from "@/config/site"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Icons } from "@/components/icons"

export function LogoButton() {
  function copyLogoAsSVG() {
    // Copy the static SVG version from public folder
    fetch("/icon.svg")
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader()
        reader.onload = function (event) {
          const svgContent = event.target?.result
          navigator.clipboard.writeText(svgContent as string)
        }
        reader.readAsText(blob)
        toast.success("Logo copied to clipboard")
      })
      .catch(() => {
        toast.error("Failed to copy logo")
      })
  }

  function copyLogoAsPNG() {
    // Copy the static PNG version from public folder
    fetch("/icon.png")
      .then((response) => response.blob())
      .then((blob) => {
        const item = new ClipboardItem({ "image/png": blob })
        navigator.clipboard.write([item])
        toast.success("Logo copied to clipboard")
      })
      .catch(() => {
        toast.error("Failed to copy logo")
      })
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Link href="/" className="relative mr-6 flex items-center">
          <Icons.logo className="h-6 w-auto" />
          <span className="hidden font-bold whitespace-nowrap md:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          className="flex items-center gap-2"
          onClick={() => copyLogoAsSVG()}
        >
          <Icons.logo className="size-4" />
          <span>Copy Logo as SVG</span>
        </ContextMenuItem>
        <ContextMenuItem
          className="flex items-center gap-2"
          onClick={() => copyLogoAsPNG()}
        >
          <Icons.logo className="size-4" />
          <span>Copy Logo as PNG</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
