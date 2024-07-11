"use client";

import React from "react";
import { TextField } from "@/lib/components/core/default/text-field";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField label="Email" isRequired />
      <TextField label="Email" isRequired necessityIndicator="icon" />
      <TextField label="Email" isRequired necessityIndicator="label" />
      <TextField label="Email" necessityIndicator="label" />
    </div>
  );
}
