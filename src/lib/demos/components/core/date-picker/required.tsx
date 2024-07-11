"use client";

import React from "react";
import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DatePicker label="Event date" isRequired />
      <DatePicker label="Event date" isRequired necessityIndicator="icon" />
      <DatePicker label="Event date" isRequired necessityIndicator="label" />
      <DatePicker label="Event date" necessityIndicator="label" />
    </div>
  );
}
