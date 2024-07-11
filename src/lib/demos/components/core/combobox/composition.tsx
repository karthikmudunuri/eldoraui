import React from "react";
import { ComboboxRoot, ComboboxTrigger } from "@/lib/components/core/default/combobox";
import { Description, FieldError, Label } from "@/lib/components/core/default/field";
import { Item, ListBox } from "@/lib/components/core/default/list-box";
import { Overlay } from "@/lib/components/core/default/overlay";

export default function Demo() {
  return (
    <ComboboxRoot>
      <Label>Framework</Label>
      <ComboboxTrigger />
      <Description>Please choose a framework.</Description>
      <FieldError />
      <Overlay type="popover">
        <ListBox>
          <Item>Next.js</Item>
          <Item>Remix</Item>
          <Item>Gatsby</Item>
          <Item></Item>
        </ListBox>
      </Overlay>
    </ComboboxRoot>
  );
}
