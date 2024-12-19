"use client"

import * as React from "react"

import { useConfig } from "@/registry/default/hooks/useconfig"
import { Style } from "@/registry/registry-styles"

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: Style["name"]
}

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const [config] = useConfig()

  if (!styleName || config.style === styleName) {
    return <>{children}</>
  }

  return null
}