"use client";

import * as React from "react";
import { ScrollArea } from "@/lib/components/core/default/scroll-area";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { cn } from "@/lib/utils/classes";

export default function Demo() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  return (
    <div className="w-full max-w-sm">
      <p>
        Element{" "}
        <span className={cn(entry?.isIntersecting ? "text-green-700" : "text-yellow-600")}>
          {entry?.isIntersecting ? "inside" : "outside"}
        </span>{" "}
        the viewport
      </p>
      <ScrollArea type="always" className="mt-4 h-32 border">
        <div className="flex h-96 flex-col items-center justify-between py-8">
          <p className="text-fg-muted">Scroll me down!</p>
          <p ref={ref} className="border-4 border-dashed p-4">
            Hello world!
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
