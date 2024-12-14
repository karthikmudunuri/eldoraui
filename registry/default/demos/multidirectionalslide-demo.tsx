"use client";

import { MultiDirectionSlide } from "@/registry/default/eldoraui/multidirectionslide";

export default function MultiDirectionSlideDemo() {
  return (
    <MultiDirectionSlide
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      textLeft="Multidirectional"
      textRight="Slide"
    />
  );
}
