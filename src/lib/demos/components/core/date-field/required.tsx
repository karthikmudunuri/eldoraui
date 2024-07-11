"use client";

import React from "react";
import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DateField label="Event date" isRequired />
      <DateField label="Event date" isRequired necessityIndicator="icon" />
      <DateField label="Event date" isRequired necessityIndicator="label" />
      <DateField label="Event date" necessityIndicator="label" />
    </div>
  );
}
