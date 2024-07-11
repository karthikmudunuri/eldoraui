import { Button } from "@/lib/components/core/default/button";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { PlusIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <Tooltip content="Add to library">
      <Button shape="square">
        <PlusIcon />
      </Button>
    </Tooltip>
  );
}
