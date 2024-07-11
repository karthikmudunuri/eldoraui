"use client";

import React from "react";
import { TextArea } from "@/lib/components/core/default/text-area";

export default function Demo() {
  return (
    <TextArea
      isRequired
      necessityIndicator="icon"
      label="Description"
      placeholder="Type your message here"
    />
  );
}
