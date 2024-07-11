"use client";

import * as React from "react";
import { Progress } from "@/lib/components/core/default/progress";

export default function Demo() {
  return (
    <Progress
      label="Sending…"
      showValueLabel
      formatOptions={{ style: "currency", currency: "JPY" }}
      value={60}
    />
  );
}
