import { RadioGroup, Radio } from "@/lib/components/core/default/radio-group";

export default function Demo() {
  return (
    <RadioGroup defaultValue="sm" label="Size" orientation="horizontal" variant="card">
      <Radio value="sm">
        <div className="flex flex-col gap-1">
          <span className="font-bold">Small</span>
          <span className="text-xs text-fg-muted">Dimension: 128 x 128</span>
        </div>
      </Radio>
      <Radio value="md">
        <div className="flex flex-col gap-1">
          <span className="font-bold">Medium</span>
          <span className="text-xs text-fg-muted">Dimension: 256 x 256</span>
        </div>
      </Radio>
      <Radio value="lg">
        <div className="flex flex-col gap-1">
          <span className="font-bold">Large</span>
          <span className="text-xs text-fg-muted">Dimension: 512 x 512</span>
        </div>
      </Radio>
    </RadioGroup>
  );
}
