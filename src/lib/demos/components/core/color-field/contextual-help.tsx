import React from "react";
import { ColorField } from "@/lib/components/core/default/color-field";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";

export default function Demo() {
  return (
    <ColorField
      label="Color"
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you're having trouble, contact our customer
      support team for help."
        />
      }
    />
  );
}
