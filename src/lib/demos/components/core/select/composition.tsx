import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Item, ListBox } from "@/lib/components/core/default/list-box";
import { Overlay } from "@/lib/components/core/default/overlay";
import { SelectRoot, SelectValue } from "@/lib/components/core/default/select";
import { ChevronsUpDownIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <SelectRoot>
      <Button variant="outline" suffix={<ChevronsUpDownIcon className="text-fg-muted" />}>
        <SelectValue />
      </Button>
      <Overlay type="popover">
        <ListBox>
          <Item>Perplexity</Item>
          <Item>Replicate</Item>
          <Item>Together AI</Item>
          <Item>ElevenLabs</Item>
        </ListBox>
      </Overlay>
    </SelectRoot>
  );
}
