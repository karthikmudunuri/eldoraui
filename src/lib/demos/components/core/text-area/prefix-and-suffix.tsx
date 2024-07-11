"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { TextArea } from "@/lib/components/core/default/text-area";
import { ToggleButton } from "@/lib/components/core/default/toggle-button";
import { BoldIcon, ItalicIcon } from "@/lib/icons";

export default function Demo() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <TextArea
      label="Comment"
      placeholder="type something here"
      value={inputValue}
      onChange={setInputValue}
      prefix={
        <div className="flex items-center gap-1">
          <Button
            variant="quiet"
            shape="square"
            size="sm"
            className="size-7"
            onPress={() => {
              setInputValue(`${inputValue}👍`);
            }}
          >
            👍
          </Button>
          <Button
            variant="quiet"
            shape="square"
            size="sm"
            className="size-7"
            onPress={() => {
              setInputValue(`${inputValue}❤️`);
            }}
          >
            ❤️
          </Button>
        </div>
      }
      suffix={
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <ToggleButton size="sm" className="size-7">
              <BoldIcon />
            </ToggleButton>
            <ToggleButton size="sm" className="size-7">
              <ItalicIcon />
            </ToggleButton>
          </div>
          <Button variant="primary" size="sm" className="h-7">
            Comment
          </Button>
        </div>
      }
    />
  );
}
