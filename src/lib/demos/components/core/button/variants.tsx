import { Button } from "@/lib/components/core/default/button";

const variants = [
  "default",
  "primary",
  "outline",
  "quiet",
  "success",
  "warning",
  "danger",
  "accent",
] as const;

export default function Demo() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
}
