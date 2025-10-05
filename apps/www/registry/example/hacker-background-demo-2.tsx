"use client"

import { HackerBackground } from "@/registry/eldoraui/hacker-background"

export default function HackerBackgroundDemo2() {
  return (
    <div className="bg-background relative z-10 h-[500px] w-full overflow-hidden rounded-lg border">
      <HackerBackground
        color="#22d3ee"
        fontSize={8}
        speed={1.5}
        className="opacity-80"
      />
    </div>
  )
}
