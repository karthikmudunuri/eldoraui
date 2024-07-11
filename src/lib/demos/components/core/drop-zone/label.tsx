"use client";

import React from "react";
import { DropZone } from "@/lib/components/core/default/drop-zone";
import { Text } from "@/lib/components/core/default/text";
import { UploadIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <div className="flex flex-col gap-4">
      <DropZone aria-label="drag and drop files here">
        <UploadIcon />
      </DropZone>
      <DropZone>
        <UploadIcon />
        <Text slot="label">Drag and drop files here</Text>
      </DropZone>
    </div>
  );
}
