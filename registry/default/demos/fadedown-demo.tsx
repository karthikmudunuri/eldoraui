"use client";

import { FadeDown } from "@/registry/default/eldoraui/fadedown";

export default function FadeDownDemo() {
  return (
    <FadeDown
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Fade Down"
    />
  );
}
