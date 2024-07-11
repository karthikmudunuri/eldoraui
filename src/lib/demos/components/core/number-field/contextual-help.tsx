import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { NumberField } from "@/lib/components/core/default/number-field";

export default function Demo() {
  return (
    <NumberField
      label="Width"
      defaultValue={1024}
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you need help, please contact support."
        />
      }
    />
  );
}
