"use client";
import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "@/registry/default/hooks/usemouse";
import { cn } from "@/lib/utils";

export const MainMenusGradientCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
  className,
  children,
}: {
  title: string;
  description: string;
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90"
      ref={parentRef}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute right-2 top-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300 " />
      )}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="absolute inset-px rounded-[19px] bg-neutral-100/80 dark:bg-neutral-900/80" />
      {children && (
        <div
          className={cn(
            "grid relative h-40 place-content-center overflow-hidden rounded-[15px] border-white bg-white/70 dark:border-neutral-950 dark:bg-black/50",
            className,
          )}
        >
          {children}
        </div>
      )}
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};
