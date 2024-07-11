import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { TextArea } from "@/lib/components/core/default/text-area";

export default function Demo() {
  return (
    <TextArea
      label="Bio"
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you're having trouble writing your bio, get assisted by our AI."
        />
      }
    />
  );
}
