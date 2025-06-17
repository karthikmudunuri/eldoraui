"use client";

import { Cobe } from "@/registry/eldoraui/cobe";

export default function cobeGlobeDemo() {
  return (
    <div className="relative z-10 h-[600px] w-full overflow-hidden rounded-lg border bg-background">
      <div className="mt-[50px]">
        <Cobe />
      </div>
    </div>
  );
}
