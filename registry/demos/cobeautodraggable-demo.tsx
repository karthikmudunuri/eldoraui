"use client";

import { CobeDraggableAuto } from "@/registry/eldoraui/cobeautodraggable";

export default function CobeDraggableAutoDemo() {
  return (
    <div className="relative z-10 h-[600px] w-full overflow-hidden rounded-lg border bg-background">
      <CobeDraggableAuto />
    </div>
  );
}
