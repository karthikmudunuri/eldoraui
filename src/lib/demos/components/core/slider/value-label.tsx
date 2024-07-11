"use client";

import { Slider } from "@/lib/components/core/default/slider";

export default function Demo() {
  return (
    <div className="space-y-6">
      <Slider defaultValue={50} label="Donuts to buy" valueLabel className="!w-60" />
      <Slider
        defaultValue={50}
        label="Donuts to buy"
        valueLabel={(donuts) => `${donuts[0]} of 100 Donuts`}
        className="!w-60"
      />
    </div>
  );
}
