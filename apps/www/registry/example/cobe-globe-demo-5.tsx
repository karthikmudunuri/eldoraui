"use client"

import { Cobe } from "@/registry/eldoraui/cobe-globe"

export function CobeGlobeDemo5() {
  return (
    <div className="bg-background relative z-10 h-[100px] w-full overflow-hidden rounded-lg border sm:md:h-[200px]">
      <Cobe variant="scaled" />
    </div>
  )
}
