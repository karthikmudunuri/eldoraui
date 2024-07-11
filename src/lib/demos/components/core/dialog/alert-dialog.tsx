"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { DialogRoot, Dialog, DialogFooter } from "@/lib/components/core/default/dialog";

export default function Demo() {
  return (
    <DialogRoot>
      <Button variant="danger">Delete project</Button>
      <Dialog
        title="Delete project"
        description="Are you sure you want to delete this project? This action is permanent and cannot be undone."
        role="alertdialog"
        // isDissmissible={false}
      >
        {({ close }) => (
          <>
            <DialogFooter>
              <Button variant="outline" size={{ initial: "lg", sm: "md" }} onPress={close}>
                Cancel
              </Button>
              <Button variant="danger" size={{ initial: "lg", sm: "md" }} onPress={close}>
                Delete project
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </DialogRoot>
  );
}
