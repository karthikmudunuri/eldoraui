"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { usePrevious } from "@/lib/hooks/use-previous";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "red", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Demo() {
  const [color, setColor] = React.useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    }
    getNewColor();
  };

  return (
    <div className="text-center">
      <Button size="sm" onPress={handleClick}>
        Next
      </Button>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div
          className="flex h-16 w-52 items-center justify-center rounded-lg"
          style={{ background: previousColor ?? undefined }}
        >
          Previous: {previousColor ?? "null"}
        </div>
        <div
          className="flex h-16 w-52 items-center justify-center rounded-lg"
          style={{ background: color }}
        >
          Previous: {color ?? "null"}
        </div>
      </div>
    </div>
  );
}
