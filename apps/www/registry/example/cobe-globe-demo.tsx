"use client"

import { Cobe } from "@/registry/eldoraui/cobe-globe"

export function CobeGlobeDemo() {
  return (
    <div className="bg-background relative z-10 h-[300px] w-full overflow-hidden rounded-lg border sm:h-[550px] md:h-[600px]">
      <Cobe
        variant="default"
        phi={0}
        theta={0.2}
        mapSamples={16000}
        mapBrightness={1.8}
        mapBaseBrightness={0.05}
        diffuse={3}
        dark={1.1}
        baseColor="#ffffff"
        markerColor="#fb6415"
        markerSize={0.05}
        glowColor="#ffffff"
        scale={1.0}
        offsetX={0.0}
        offsetY={0.0}
        opacity={0.7}
      />
    </div>
  )
}
