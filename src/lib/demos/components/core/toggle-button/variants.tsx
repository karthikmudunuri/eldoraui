import { ToggleButton } from "@/lib/components/core/default/toggle-button";
import { PinIcon } from "@/lib/icons";

const variants = ["quiet", "outline", "accent"] as const;

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      {variants.map((variant) => (
        <ToggleButton
          key={variant}
          variant={variant}
          defaultSelected={variant === "accent"}
          aria-label="Toggle pin"
        >
          <PinIcon className="rotate-45" />
        </ToggleButton>
      ))}
    </div>
  );
}
