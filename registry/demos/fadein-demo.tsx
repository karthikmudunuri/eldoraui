"use client";

import StaggeredFade from "@/registry/eldoraui/fadein";

export default function FadeInDemo() {
  return (
    <StaggeredFade
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Fade In"
    />
  );
}
