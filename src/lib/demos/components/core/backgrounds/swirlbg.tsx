"use client";
import React from "react";
import Swirl from "@/lib/components/core/default/swirl";

export default function SwirlEfffectdemo() {
  return (
    <div className="h-screen w-screen overflow-hidden">
    <Swirl
      particleCount={500}
      baseTTL={150}
      rangeTTL={300}
      baseSpeed={0.5}
      rangeSpeed={1.5}
      baseSize={3}
      rangeSize={8}
      baseHue={120}
      rangeHue={90}
      backgroundColor="black"
      className="absolute top-0 left-0"
      containerClassName="relative h-full w-full"
    >
      <h1 className="absolute top-1/2 left-1/2 text-white text-4xl font-bold transform -translate-x-1/2 -translate-y-1/2">
        Dynamic Swirl Effect
      </h1>
    </Swirl>
  </div>
  );
}

