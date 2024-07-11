"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { NumberField } from "@/lib/components/core/default/number-field";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { PlusIcon } from "@/lib/icons";

export default function Demo() {
  const [offset, setOffset] = React.useState(10);
  return (
    <div className="flex flex-col items-center gap-10">
      <Tooltip offset={offset} content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
      <NumberField
        label="Offset"
        value={offset}
        onChange={(value) => setOffset(value)}
        className="max-w-[150px]"
      />
    </div>
  );
}
