"use client";

import * as React from "react";
import { Progress } from "@/lib/components/core/default/progress";

export default function Demo() {
  return <Progress minValue={50} maxValue={150} value={100} />;
}
