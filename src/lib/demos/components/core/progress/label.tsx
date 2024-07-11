"use client";

import * as React from "react";
import { Progress } from "@/lib/components/core/default/progress";

export default function Demo() {
  return (
    <div className="space-y-4">
      <Progress aria-label="Loading" value={75} />
      <Progress label="Loading..." value={75} />
    </div>
  );
}
