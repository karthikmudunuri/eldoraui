import { Button } from "@/lib/components/core/default/button";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { PlusIcon } from "@/lib/icons";

export default function TooltipDemo() {
  return (
    <Tooltip content="Add to library" arrow>
      <Button shape="square">
        <PlusIcon />
      </Button>
    </Tooltip>
  );
}
