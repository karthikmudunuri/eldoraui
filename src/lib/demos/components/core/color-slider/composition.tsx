import {
  ColorSliderOutput,
  ColorSliderRoot,
  ColorSliderTrack,
} from "@/lib/components/core/default/color-slider";
import { ColorThumb } from "@/lib/components/core/default/color-thumb";
import { Label } from "@/lib/components/core/default/field";

export default function Demo() {
  return (
    <ColorSliderRoot channel="hue" defaultValue="hsl(0, 100%, 50%)">
      <div className="flex items-center justify-between">
        <Label>Hue</Label>
        <ColorSliderOutput />
      </div>
      <ColorSliderTrack>
        <ColorThumb />
      </ColorSliderTrack>
    </ColorSliderRoot>
  );
}
