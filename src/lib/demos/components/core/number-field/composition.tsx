import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Description, Label } from "@/lib/components/core/default/field";
import { Group } from "@/lib/components/core/default/group";
import { Input, InputRoot } from "@/lib/components/core/default/input";
import { NumberFieldRoot } from "@/lib/components/core/default/number-field";
import { MinusIcon, PlusIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <NumberFieldRoot>
      <Label>Quantity</Label>
      <Group className="flex items-center gap-2">
        <Button slot="decrement" shape="square">
          <MinusIcon />
        </Button>
        <InputRoot>
          <Input />
        </InputRoot>
        <Button slot="increment" shape="square">
          <PlusIcon />
        </Button>
      </Group>
      <Description>Enter the disired quantity.</Description>
    </NumberFieldRoot>
  );
}
