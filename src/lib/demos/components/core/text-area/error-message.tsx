"use client";

import React from "react";
import { TextArea } from "@/lib/components/core/default/text-area";

export default function Demo() {
  return (
    <TextArea
      label="Comment"
      isInvalid
      errorMessage="You have exceeded the comment limit for one hour."
    />
  );
}
