import React from "react";
import { RadioGroup, Radio } from "@/lib/components/core/default/radio-group";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <RadioGroup defaultValue="sm" label="Size" isRequired>
        <Radio value="sm">Small</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
      <RadioGroup defaultValue="sm" label="Size" isRequired necessityIndicator="icon">
        <Radio value="sm">Small</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
      <RadioGroup defaultValue="sm" label="Size" isRequired necessityIndicator="label">
        <Radio value="sm">Small</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
      <RadioGroup defaultValue="sm" label="Size" necessityIndicator="label">
        <Radio value="sm">Small</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
    </div>
  );
}
