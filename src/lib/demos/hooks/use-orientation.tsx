"use client";

import React from "react";
import { useOrientation } from "@/lib/hooks/use-orientation";

export default function Demo() {
  const orientation = useOrientation();

  return (
    <section>
      <p className="text-xl font-bold">Orientation</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-fg-muted">Angle</p>
          <p className="text-xl">{orientation.angle}</p>
        </div>
        <div>
          <p className="text-fg-muted">Type</p>
          <p className="text-xl">{orientation.type}</p>
        </div>
      </div>
    </section>
  );
}
