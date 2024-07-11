import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { PlusIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip placement="top" content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
      <Tooltip placement="bottom" content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
      <Tooltip placement="left" content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
      <Tooltip placement="right" content="Add to library">
        <Button shape="square">
          <PlusIcon />
        </Button>
      </Tooltip>
    </div>
  );
}
