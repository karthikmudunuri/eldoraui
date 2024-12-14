"use client";

import { FadeUpStagger } from "@/registry/default/eldoraui/fadeup";

export default function FadeUpDemo() {
  return (
    <FadeUpStagger
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Fade Up"
    />
  );
}
