import { ColorField } from "@/lib/components/core/default/color-field";
import { PaletteIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ColorField prefix={<PaletteIcon />} />
      <ColorField suffix={<PaletteIcon />} />
    </div>
  );
}
