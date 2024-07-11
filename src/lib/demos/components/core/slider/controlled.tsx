"use client";

import React from "react";
import { Slider } from "@/lib/components/core/default/slider";

export default function Demo() {
  const [value, setValue] = React.useState(50);
  return (
    <div className="flex flex-col items-center gap-4">
      <Slider label="Opacity" value={value} onChange={(value) => setValue(value as number)} />
      <span className="text-sm text-fg-muted">
        Value: <span className="font-semibold text-fg">{value}</span>
      </span>
    </div>
  );
}
