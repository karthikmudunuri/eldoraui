"use client";

import { CobeDraggable } from "@/registry/eldoraui/cobedraggable";

export default function cobeDraggableDemo() {
  return (
    <div className="relative z-10 h-[600px] w-full overflow-hidden rounded-lg border bg-background">
      <CobeDraggable />
    </div>
  );
}
