"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { TextField } from "@/lib/components/core/default/text-field";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { XCircleIcon } from "@/lib/icons";

export default function Demo() {
  const [inputValue, setInputValue] = React.useState("Hello world!");
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-2">
      <TextField prefix={<span>https://</span>} />
      <TextField suffix={<span>@dotui.org</span>} />
      <TextField
        ref={inputRef}
        value={inputValue}
        onChange={setInputValue}
        suffix={
          <Tooltip content="Clear input" placement="bottom" className="text-xs">
            <Button
              variant="quiet"
              shape="square"
              size="sm"
              className="size-6"
              onPress={() => {
                setInputValue("");
                inputRef.current?.focus();
              }}
            >
              <XCircleIcon />
            </Button>
          </Tooltip>
        }
      />
    </div>
  );
}
