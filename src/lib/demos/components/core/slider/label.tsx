import { Slider } from "@/lib/components/core/default/slider";

export default function Demo() {
  return (
    <div className="space-y-4">
      <Slider defaultValue={50} label="Opacity" />
      <Slider defaultValue={50} aria-label="Opacity" />
    </div>
  );
}
