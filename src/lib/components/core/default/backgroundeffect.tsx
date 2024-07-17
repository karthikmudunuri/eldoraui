
"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils/classes";

export const BackgroundCellAnimation = () => {
return (
  <div className="relative h-screen bg-slate-950 flex justify-center overflow-hidden">
    <BackgroundCellCore />
    <div className="relative z-50 mt-40 pointer-events-none select-none">
      <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
        Background cell animation <br />
        with framer motion
      </h1>
    </div>
  </div>
);
};

const BackgroundCellCore = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const ref = useRef<any>(null);

const handleMouseMove = (event: any) => {
  const rect = ref.current && ref.current.getBoundingClientRect();
  setMousePosition({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  });
};

const size = 300;
return (
  <div
    ref={ref}
    onMouseMove={handleMouseMove}
    className="h-full absolute inset-0"
  >
    <div className="absolute h-[20rem] inset-y-0  overflow-hidden">
      <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div
        className="absolute inset-0 z-20 bg-transparent"
        style={{
          maskImage: `radial-gradient(
            ${size / 4}px circle at center,
           white, transparent
          )`,
          WebkitMaskImage: `radial-gradient(
          ${size / 4}px circle at center,
          white, transparent
        )`,
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
          maskSize: `${size}px`,
          pointerEvents: "none",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <Pattern cellClassName="border-blue-600 relative z-[100]" />
      </div>
      <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
    </div>
  </div>
);
};

const Pattern = ({
  className,
  cellClassName,
  }: {
  className?: string;
  cellClassName?: string;
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<any>(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                 className="bg-[rgba(14,165,233,0.3)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};


