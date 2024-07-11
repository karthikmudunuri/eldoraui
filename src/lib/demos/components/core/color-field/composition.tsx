"use client";

import React from "react";
import { ColorFieldRoot } from "@/lib/components/core/default/color-field";
import { Description, FieldError, Label } from "@/lib/components/core/default/field";
import { Input, InputRoot } from "@/lib/components/core/default/input";

export default function Demo() {
  return (
    <ColorFieldRoot>
      <Label>Background</Label>
      <InputRoot>
        <Input />
      </InputRoot>
      <Description>Enter a background color.</Description>
      <FieldError />
    </ColorFieldRoot>
  );
}
