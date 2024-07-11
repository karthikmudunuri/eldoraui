import { Label, Description } from "@/lib/components/core/default/field";
import {
  SliderFiller,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValueLabel,
} from "@/lib/components/core/default/slider";
import { Volume1Icon, Volume2Icon } from "@/lib/icons";

export default function Demo() {
  return (
    <SliderRoot defaultValue={50}>
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <SliderValueLabel />
      </div>
      <div className="flex items-center gap-2">
        <Volume1Icon />
        <SliderTrack>
          <SliderFiller />
          <SliderThumb />
        </SliderTrack>
        <Volume2Icon />
      </div>
      <Description>Adjust the volume.</Description>
    </SliderRoot>
  );
}
