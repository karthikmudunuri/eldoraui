import React from "react";
import { TextArea } from "@/lib/components/core/default/text-area";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <TextArea isLoading loaderPosition="prefix" />
      <TextArea isLoading loaderPosition="suffix" />
    </div>
  );
}
