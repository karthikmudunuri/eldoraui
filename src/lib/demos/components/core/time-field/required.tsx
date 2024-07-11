"use client";

import React from "react";
import { TimeField } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TimeField label="Event time" isRequired />
      <TimeField label="Event time" isRequired necessityIndicator="icon" />
      <TimeField label="Event time" isRequired necessityIndicator="label" />
      <TimeField label="Event time" necessityIndicator="label" />
    </div>
  );
}
