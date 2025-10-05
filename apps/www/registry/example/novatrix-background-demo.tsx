"use client"

import Novatrix from "@/registry/eldoraui/novatrix-background"

export default function NovatrixbgDemo() {
  return (
    <div className="bg-background relative z-10 h-[500px] w-full overflow-hidden rounded-lg border">
      <Novatrix color={[1, 1, 1]} amplitude={0.1} speed={1.0} />
    </div>
  )
}
