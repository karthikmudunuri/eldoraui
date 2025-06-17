"use client";

import { CobeDragToLocation } from "@/registry/eldoraui/coberotatetolocation";

export default function CobeDragToLocationDemo() {
  return (
    <div className="relative z-10 h-[700px] w-full overflow-hidden rounded-lg border bg-background">
      <CobeDragToLocation />
    </div>
  );
}
