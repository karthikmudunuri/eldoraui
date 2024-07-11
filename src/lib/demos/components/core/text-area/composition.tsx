import React from "react";
import { Description, Label } from "@/lib/components/core/default/field";
import { TextAreaInput, InputRoot } from "@/lib/components/core/default/input";
import { TextFieldRoot } from "@/lib/components/core/default/text-field";

export default function Demo() {
  return (
    <TextFieldRoot>
      <Label>Comment</Label>
      <InputRoot multiline>
        <TextAreaInput />
      </InputRoot>
      <Description>Enter your comment.</Description>
    </TextFieldRoot>
  );
}
