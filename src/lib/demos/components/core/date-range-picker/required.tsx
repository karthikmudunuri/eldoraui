"use client";

import React from "react";
import { DateRangePicker } from "@/lib/components/core/default/date-range-picker";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DateRangePicker label="Event date" isRequired />
      <DateRangePicker label="Event date" isRequired necessityIndicator="icon" />
      <DateRangePicker label="Event date" isRequired necessityIndicator="label" />
      <DateRangePicker label="Event date" necessityIndicator="label" />
    </div>
  );
}
