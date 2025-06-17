"use client";
import { cn } from "@/lib/utils";

export function MotionButton({
  text = "Button",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none",
        className,
      )}
    >
      {text}
    </button>
  );
}
