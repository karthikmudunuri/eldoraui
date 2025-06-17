"use client";
import { cn } from "@/lib/utils";

export function ButtonBackgroundShine({
  text = "Button",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "inline-flex animate-shine items-center justify-center rounded border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 py-4 text-sm font-medium text-neutral-400 transition-colors",
        className,
      )}
    >
      {text}
    </button>
  );
}
