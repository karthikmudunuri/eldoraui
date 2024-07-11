import { Slider } from "@/lib/components/core/default/slider";

export default function Demo() {
  return (
    <Slider
      label="Price"
      formatOptions={{ style: "currency", currency: "JPY" }}
      defaultValue={60}
      valueLabel
    />
  );
}
