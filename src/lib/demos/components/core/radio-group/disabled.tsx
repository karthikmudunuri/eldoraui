import { RadioGroup, Radio } from "@/lib/components/core/default/radio-group";

export default function Demo() {
  return (
    <div className="flex gap-10">
      <RadioGroup defaultValue="sm" label="Size" isDisabled>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
      <RadioGroup label="Size" defaultValue="sm">
        <Radio value="sm">Small</Radio>
        <Radio value="md" isDisabled>
          Medium
        </Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
    </div>
  );
}
