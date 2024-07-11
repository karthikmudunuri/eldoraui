import React from "react";
import { Combobox } from "@/lib/components/core/default/combobox";
import { Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <Combobox label="Favorite Animal" isLoading>
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </Combobox>
  );
}
