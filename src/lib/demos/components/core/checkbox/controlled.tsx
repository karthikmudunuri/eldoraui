"use client";

import React from "react";
import { Checkbox } from "@/lib/components/core/default/checkbox";

export default function Demo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="flex flex-col items-center gap-4">
      <Checkbox isSelected={checked} onChange={setChecked}>
        I accept the terms and conditions
      </Checkbox>
      <p className="text-xs text-fg-muted">
        <span className="font-bold">Checked:</span> {checked ? "true" : "false"}
      </p>
    </div>
  );
}
