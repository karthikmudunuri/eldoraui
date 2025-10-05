"use client"

import { FadeUpText } from "@/registry/eldoraui/fade-up-text"

export function FadeUpTextDemo() {
  return (
    <FadeUpText
      className="font-display text-center text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-[5rem] dark:text-white"
      text="Fade Up"
    />
  )
}
