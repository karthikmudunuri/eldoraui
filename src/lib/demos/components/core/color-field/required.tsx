"use client";

import React from "react";
import { ColorField } from "@/lib/components/core/default/color-field";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ColorField label="Color" isRequired />
      <ColorField label="Color" isRequired necessityIndicator="icon" />
      <ColorField label="Color" isRequired necessityIndicator="label" />
      <ColorField label="Color" necessityIndicator="label" />
    </div>
  );
}
