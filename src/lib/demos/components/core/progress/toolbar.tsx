"use client";

import * as React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Input, InputRoot } from "@/lib/components/core/default/input";
import { Progress } from "@/lib/components/core/default/progress";
import { TextFieldRoot } from "@/lib/components/core/default/text-field";
import { ALargeSmallIcon, RotateCwIcon } from "@/lib/icons";

export default function Demo() {
  const [key, setKey] = React.useState(0);
  const refresh = () => setKey((key) => key + 1);
  return (
    <TextFieldRoot key={key} defaultValue="https://dotui.org">
      <InputRoot className="relative h-10 overflow-hidden px-1 pb-0.5">
        <Button size="sm" variant="quiet" shape="square" className="size-7">
          <ALargeSmallIcon />
        </Button>
        <Input className="text-center" />
        <Button onPress={refresh} size="sm" variant="quiet" shape="square" className="size-7">
          <RotateCwIcon />
        </Button>
        <Progress
          value={50}
          size="sm"
          variant="accent"
          duration="5s"
          className="absolute bottom-0 left-0 right-0"
        />
      </InputRoot>
    </TextFieldRoot>
  );
}
