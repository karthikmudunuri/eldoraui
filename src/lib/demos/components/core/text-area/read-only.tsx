"use client";

import React from "react";
import { TextArea } from "@/lib/components/core/default/text-area";

export default function Demo() {
  return <TextArea label="Email" isReadOnly value="This is a readonly comment" />;
}
