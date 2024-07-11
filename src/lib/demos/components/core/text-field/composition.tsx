import React from "react";
import { Description, Label } from "@/lib/components/core/default/field";
import { Input, InputRoot } from "@/lib/components/core/default/input";
import { TextFieldRoot } from "@/lib/components/core/default/text-field";

export default function Demo() {
  return (
    <TextFieldRoot>
      <Label>Email</Label>
      <InputRoot>
        <Input />
      </InputRoot>
      <Description>Enter your email.</Description>
    </TextFieldRoot>
  );
}
