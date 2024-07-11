import { Description, Label } from "@/lib/components/core/default/field";
import { SliderControls, SliderRoot, SliderValueLabel } from "@/lib/components/core/default/slider";

export default function Demo() {
  return (
    <SliderRoot defaultValue={50}>
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <SliderValueLabel />
      </div>
      <SliderControls />
      <Description>Adjust the volume.</Description>
    </SliderRoot>
  );
}
