"use client";

import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { TextField } from "@/lib/components/core/default/text-field";

export default function Demo() {
  return (
    <TextField
      label="Password"
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you're having trouble accessing your account, contact our customer
      support team for help."
        />
      }
    />
  );
}
