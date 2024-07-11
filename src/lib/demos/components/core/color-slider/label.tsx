import { ColorSlider } from "@/lib/components/core/default/color-slider";

export default function Demo() {
  return <ColorSlider label="Hue" channel="hue" defaultValue="hsl(200, 100%, 50%)" />;
}
