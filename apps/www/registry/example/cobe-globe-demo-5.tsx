"use client"

import { Cobe } from "@/registry/eldoraui/cobe-globe"

export function CobeGlobeDemo5() {
  return (
    <div className="bg-background relative z-10 h-[200px] w-full overflow-hidden rounded-lg border">
      <Cobe variant="scaled" />
    </div>
  )
}
