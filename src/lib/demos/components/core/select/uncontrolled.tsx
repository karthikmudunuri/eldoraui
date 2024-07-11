import React from "react";
import { Item } from "@/lib/components/core/default/list-box";
import { Select } from "@/lib/components/core/default/select";

export default function Demo() {
  return (
    <Select defaultSelectedKey="eleven-labs">
      <Item id="perplexity">Perplexity</Item>
      <Item id="replicate">Replicate</Item>
      <Item id="together-ai">Together AI</Item>
      <Item id="eleven-labs">ElevenLabs</Item>
    </Select>
  );
}
