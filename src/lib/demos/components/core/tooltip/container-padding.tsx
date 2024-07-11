"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { NumberField } from "@/lib/components/core/default/number-field";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { PlusIcon } from "@/lib/icons";

export default function Demo() {
  const [containerPadding, setContainerPadding] = React.useState(12);
  return (
    <div className="flex flex-col items-center gap-10">
      <Tooltip containerPadding={containerPadding} content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
      <NumberField
        label="Container padding"
        value={containerPadding}
        onChange={(value) => setContainerPadding(value)}
        className="max-w-[150px]"
      />
    </div>
  );
}
