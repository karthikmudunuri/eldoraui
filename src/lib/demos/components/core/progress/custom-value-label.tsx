"use client";

import * as React from "react";
import { Progress } from "@/lib/components/core/default/progress";

export default function Demo() {
  return <Progress label="Feeding…" showValueLabel valueLabel="30 of 100 dogs" value={30} />;
}
