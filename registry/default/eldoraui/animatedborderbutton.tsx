"use client";

import { cn } from "@/lib/utils";

interface ButtonAnimatedBorderProps {
  text?: string;
  className?: string;
}

export function ButtonAnimatedBorder({
  text = "Button",
  className,
}: ButtonAnimatedBorderProps) {
  return (
    <button
      className={cn(
        "group relative grid overflow-hidden rounded px-10 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200",
        className,
      )}
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
      <span className="z-10 text-sm font-medium text-neutral-400">{text}</span>
    </button>
  );
}
