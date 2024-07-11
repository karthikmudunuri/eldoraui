"use client";

import * as React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Progress } from "@/lib/components/core/default/progress";
import { RotateCwIcon } from "@/lib/icons";

export default function Demo() {
  const [key, setKey] = React.useState(0);
  const restart = () => setKey((prev) => prev + 1);
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Button prefix={<RotateCwIcon />} onPress={restart}>
        Restart animation
      </Button>
      <Progress key={key} duration="30s" />
    </div>
  );
}
