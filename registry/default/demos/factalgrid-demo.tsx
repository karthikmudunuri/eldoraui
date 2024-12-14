"use client";

import { FractalDotGrid } from "../eldoraui/factalgrid";

export default function FractalGridDemo() {
  return (
    <div className="relative z-10 h-[500px] w-full overflow-hidden rounded-lg border bg-background">
      <FractalDotGrid
        dotSize={4}
        dotSpacing={20}
        dotOpacity={0.3}
        waveIntensity={30}
        waveRadius={200}
        dotColor="rgba(100, 100, 255, 1)"
        glowColor="rgba(100, 100, 255, 1)"
        enableNoise={true}
        noiseOpacity={0.03}
        initialPerformance="medium"
      />
    </div>
  );
}
