import React from "react";
import { DropZone } from "@/lib/components/core/default/drop-zone";
import { UploadIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <DropZone>
      <UploadIcon />
    </DropZone>
  );
}
