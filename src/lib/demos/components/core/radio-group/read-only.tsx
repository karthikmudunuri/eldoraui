import { RadioGroup, Radio } from "@/lib/components/core/default/radio-group";

export default function Demo() {
  return (
    <RadioGroup defaultValue="sm" label="Size" isReadOnly>
      <Radio value="sm">Small</Radio>
      <Radio value="md">Medium</Radio>
      <Radio value="lg">Large</Radio>
    </RadioGroup>
  );
}
