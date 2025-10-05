"use client"

import { WavyText } from "@/registry/eldoraui/wavy-text"

export function WavyTextDemo() {
  return (
    <WavyText
      className="font-display text-center text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-[5rem] dark:text-white"
      text="Wavy Text"
    />
  )
}
