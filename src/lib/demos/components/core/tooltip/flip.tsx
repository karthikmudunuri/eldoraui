"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Switch } from "@/lib/components/core/default/switch";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { PlusIcon } from "@/lib/icons";

export default function Demo() {
  const [shouldFlip, setShouldFlip] = React.useState(false);
  return (
    <div className="flex flex-col items-center gap-10">
      <Tooltip shouldFlip={shouldFlip} content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
      <Switch isSelected={shouldFlip} onChange={(isSelected) => setShouldFlip(isSelected)}>
        Should flip
      </Switch>
    </div>
  );
}
