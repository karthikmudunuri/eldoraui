"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { DialogRoot, Dialog } from "@/lib/components/core/default/dialog";
import { Radio, RadioGroup } from "@/lib/components/core/default/radio-group";

type Type = "modal" | "drawer" | "popover";

export default function Demo() {
  const [type, setType] = React.useState<Type>("modal");
  return (
    <div className="flex w-full items-center">
      <div className="flex flex-1 items-center justify-center">
        <DialogRoot>
          <Button variant="outline">Dialog</Button>
          <Dialog title="Dialog" type={type}>
            <DialogRoot>
              <Button variant="outline">Nested dialog</Button>
              <Dialog title="Nested dialog" type={type}></Dialog>
            </DialogRoot>
          </Dialog>
        </DialogRoot>
      </div>
      <div className="space-y-4 rounded-md border px-10 py-6">
        <RadioGroup label="Type" value={type} onChange={(value) => setType(value as Type)}>
          <Radio value="modal">Modal</Radio>
          <Radio value="drawer">Drawer</Radio>
          <Radio value="popover">Popover</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}
