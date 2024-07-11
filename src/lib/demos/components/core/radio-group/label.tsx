import { RadioGroup, Radio } from "@/lib/components/core/default/radio-group";

export default function Demo() {
  return (
    <div className="flex items-center gap-10">
      <RadioGroup defaultValue="sm" label="Size">
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
      <RadioGroup defaultValue="sm" aria-label="Size">
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
      </RadioGroup>
    </div>
  );
}
