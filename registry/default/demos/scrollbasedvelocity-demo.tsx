"use client";

import { VelocityScroll } from "@/registry/default/eldoraui/scrollbasedvelocity";

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Eldora UI"
      default_velocity={5}
    />
  );
}
