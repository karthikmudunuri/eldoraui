import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { DialogRoot, Dialog } from "@/lib/components/core/default/dialog";
import { TextField } from "@/lib/components/core/default/text-field";

export default function Demo() {
  return (
    <DialogRoot>
      <Button variant="outline">Edit username</Button>
      <Dialog title="Edit username">
        <TextField label="Username" defaultValue="@mehdibha_" />
      </Dialog>
    </DialogRoot>
  );
}
