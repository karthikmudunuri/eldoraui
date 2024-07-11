import React from "react";
import { Combobox } from "@/lib/components/core/default/combobox";
import { Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <Combobox label="Favorite Animal" isDisabled>
      <Item id="red panda">Red Panda</Item>
      <Item id="cat">Cat</Item>
      <Item id="dog">Dog</Item>
      <Item id="aardvark">Aardvark</Item>
      <Item id="kangaroo">Kangaroo</Item>
      <Item id="snake">Snake</Item>
    </Combobox>
  );
}
