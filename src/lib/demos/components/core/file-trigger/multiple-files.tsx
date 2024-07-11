"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { FileTrigger } from "@/lib/components/core/default/file-trigger";
import { UploadIcon } from "@/lib/icons";

export default function FileTriggerDemo() {
  const [files, setFiles] = React.useState<string[] | null>(null);
  return (
    <div className="flex flex-col items-center gap-4">
      <FileTrigger
        onSelect={(e) => {
          if (e) {
            const files = Array.from(e);
            const filenames = files.map((file) => file.name);
            setFiles(filenames);
          }
        }}
        allowsMultiple
      >
        <Button prefix={<UploadIcon />}>Upload</Button>
      </FileTrigger>
      {files && (
        <p>
          You selected <span className="font-semibold">{files.join(", ")}</span>
        </p>
      )}
    </div>
  );
}
