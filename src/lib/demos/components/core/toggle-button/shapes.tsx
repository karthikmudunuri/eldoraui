import { ToggleButton } from "@/lib/components/core/default/toggle-button";
import { PinIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <ToggleButton variant="outline" shape="square" aria-label="Toggle pin">
        <PinIcon className="rotate-45" />
      </ToggleButton>
      <ToggleButton variant="outline" shape="circle" aria-label="Toggle pin">
        <PinIcon className="rotate-45" />
      </ToggleButton>
      <ToggleButton
        variant="accent"
        shape="rectangle"
        prefix={<PinIcon className="rotate-45" />}
        defaultSelected
        aria-label="Toggle pin"
      >
        Pin
      </ToggleButton>
    </div>
  );
}
