import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { Item } from "@/lib/components/core/default/list-box";
import { Select } from "@/lib/components/core/default/select";

export default function SelectDemo() {
  return (
    <Select
      label="Provider"
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you're having trouble, get assisted by our AI."
        />
      }
    >
      <Item>Perplexity</Item>
      <Item>Replicate</Item>
      <Item>Together AI</Item>
      <Item>ElevenLabs</Item>
    </Select>
  );
}
