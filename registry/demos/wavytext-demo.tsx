"use client";

import { WavyText } from "@/registry/eldoraui/wavytext";

export default function WavyTextDemo() {
  return (
    <WavyText
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Wavy Text"
    />
  );
}
