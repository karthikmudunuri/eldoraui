"use client";

import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { TimeField } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return (
    <TimeField
      label="Appointment"
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
