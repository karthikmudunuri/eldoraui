"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { DialogRoot, Dialog, DialogFooter } from "@/lib/components/core/default/dialog";
import { Radio, RadioGroup } from "@/lib/components/core/default/radio-group";
import { TextField } from "@/lib/components/core/default/text-field";

type Type = "modal" | "drawer" | "popover";

export default function Demo() {
  const [type, setType] = React.useState<Type>("modal");
  const [mobileType, setMobileType] = React.useState<Type>("drawer");
  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex flex-1 items-center justify-center">
        <DialogRoot>
          <Button variant="outline">Edit username</Button>
          <Dialog title="Edit username">
            {({ close }) => (
              <>
                <div className="space-y-4">
                  <TextField autoFocus label="Name" defaultValue="Mehdi" className="w-full" />
                  <TextField label="Username" defaultValue="@mehdibha_" className="w-full" />
                </div>
                <DialogFooter>
                  <Button variant="outline" size={{ initial: "lg", sm: "md" }} onPress={close}>
                    Cancel
                  </Button>
                  <Button variant="primary" size={{ initial: "lg", sm: "md" }} onPress={close}>
                    Save changes
                  </Button>
                </DialogFooter>
              </>
            )}
          </Dialog>
        </DialogRoot>
      </div>
      <div className="flex items-start gap-6 rounded-md border px-10 py-6">
        <RadioGroup label="Type" value={type} onChange={(value) => setType(value as Type)}>
          <Radio value="modal">Modal</Radio>
          <Radio value="drawer">Drawer</Radio>
          <Radio value="popover">Popover</Radio>
        </RadioGroup>
        <RadioGroup
          label="Mobile type"
          value={mobileType}
          onChange={(value) => setMobileType(value as Type)}
        >
          <Radio value="modal">Modal</Radio>
          <Radio value="drawer">Drawer</Radio>
          <Radio value="popover">Popover</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}
