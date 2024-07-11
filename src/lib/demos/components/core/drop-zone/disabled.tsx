import React from "react";
import { DropZone } from "@/lib/components/core/default/drop-zone";
import { Text } from "@/lib/components/core/default/text";
import { UploadIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <DropZone isDisabled>
      <UploadIcon />
      <Text slot="label">Drag and drop files here</Text>
    </DropZone>
  );
}
