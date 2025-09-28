"use client"

import { Cobe } from "@/registry/eldoraui/cobe-globe"

export function CobeGlobeDemo() {
  return (
    <div className="bg-background relative z-10 h-[600px] w-full overflow-hidden rounded-lg border">
      <Cobe variant="default" />
    </div>
  )
}
