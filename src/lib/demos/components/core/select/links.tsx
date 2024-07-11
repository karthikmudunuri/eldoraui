import React from "react";
import { Item } from "@/lib/components/core/default/list-box";
import { Select } from "@/lib/components/core/default/select";

export default function Demo() {
  return (
    <Select label="Project">
      <Item href="/create-project" target="_blank">
        Create new...
      </Item>
      <Item>DotUI</Item>
      <Item>Palettify</Item>
      <Item>Notionfolio</Item>
    </Select>
  );
}
