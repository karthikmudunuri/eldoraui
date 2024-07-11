import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { DropZone } from "@/lib/components/core/default/drop-zone";
import { FileTrigger } from "@/lib/components/core/default/file-trigger";
import { Text } from "@/lib/components/core/default/text";
import { UploadIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <DropZone className="space-y-1">
      <UploadIcon />
      <Text slot="label">Drag and drop files here</Text>
      <FileTrigger>
        <Button>Select files</Button>
      </FileTrigger>
    </DropZone>
  );
}
