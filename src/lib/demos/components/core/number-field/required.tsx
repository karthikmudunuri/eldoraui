import React from "react";
import { NumberField } from "@/lib/components/core/default/number-field";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <NumberField label="Width" isRequired />
      <NumberField label="Width" isRequired necessityIndicator="icon" />
      <NumberField label="Width" isRequired necessityIndicator="label" />
      <NumberField label="Width" necessityIndicator="label" />
    </div>
  );
}
