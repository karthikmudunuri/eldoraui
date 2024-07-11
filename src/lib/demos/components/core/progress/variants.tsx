import * as React from "react";
import { Progress } from "@/lib/components/core/default/progress";

const variants = ["default", "success", "accent", "danger", "warning"] as const;

export default function Demo() {
  return (
    <div className="space-y-4">
      {variants.map((variant) => (
        <Progress key={variant} value={75} label={variant} variant={variant} />
      ))}
    </div>
  );
}
