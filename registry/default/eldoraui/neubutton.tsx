"use client";
import { cn } from "@/lib/utils";

interface NeuButtonProps {
  text?: string;
  className?: string;
}

export function NeuButton({ text = "Hover me", className }: NeuButtonProps) {
  return (
    <button
      className={cn(
        "w-fit bg-purple-400 px-6 py-2 font-medium text-white shadow-none transition-all hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[3px_3px_0px_white]",
        className,
      )}
    >
      {text}
    </button>
  );
}
