"use client";

import { Button } from "@/lib/components/core/default/button";
import { SearchField } from "@/lib/components/core/default/search-field";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { XCircleIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <SearchField
      defaultValue="Hello world!"
      prefix="🔍"
      suffix={({ isEmpty, isDisabled }) => {
        if (isEmpty || isDisabled) return null;
        return (
          <Tooltip content="Clear input" className="text-xs">
            <Button variant="quiet" shape="square" size="sm" className="size-6">
              <XCircleIcon />
            </Button>
          </Tooltip>
        );
      }}
    />
  );
}
