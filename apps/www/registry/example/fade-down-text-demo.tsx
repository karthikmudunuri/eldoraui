"use client"

import { FadeDownText } from "@/registry/eldoraui/fade-down-text"

export function FadeDownTextDemo() {
  return (
    <FadeDownText
      className="font-display text-center text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-[5rem] dark:text-white"
      text="Fade Down"
    />
  )
}
