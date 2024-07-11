"use client";

import { useWindowSize } from "@/lib/hooks/use-window-size";

export default function Demo() {
  const size = useWindowSize();

  return (
    <div>
      <p className="text-center text-xl font-bold">Resize your window</p>
      <div className="mt-4 grid grid-cols-2 gap-8">
        <div>
          <p className="text-fg-muted">width</p>
          <p className="text-xl">{size.width}px</p>
        </div>
        <div>
          <p className="text-fg-muted">height</p>
          <p className="text-xl">{size.height}px</p>
        </div>
      </div>
    </div>
  );
}
