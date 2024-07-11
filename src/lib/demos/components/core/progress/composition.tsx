"use client";

import * as React from "react";
import { Label } from "react-aria-components";
import {
  ProgressIndicator,
  ProgressRoot,
  ProgressValueLabel,
} from "@/lib/components/core/default/progress";

export default function Demo() {
  return (
    <ProgressRoot value={50} className="flex-row items-center gap-4">
      <Label>Progress</Label>
      <ProgressIndicator />
      <ProgressValueLabel />
    </ProgressRoot>
  );
}
