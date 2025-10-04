"use client"

import { Cobe } from "@/registry/eldoraui/cobe-globe"

export function CobeGlobeDemo2() {
  return (
    <div className="bg-background relative z-10 h-[300px] w-full overflow-hidden rounded-lg border sm:h-[550px] md:h-[600px]">
      <Cobe variant="auto-rotation" />
    </div>
  )
}
