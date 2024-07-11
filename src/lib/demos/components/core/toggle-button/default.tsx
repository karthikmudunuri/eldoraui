import { ToggleButton } from "@/lib/components/core/default/toggle-button";
import { PinIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <ToggleButton aria-label="Toggle pin">
      <PinIcon className="rotate-45" />
    </ToggleButton>
  );
}
