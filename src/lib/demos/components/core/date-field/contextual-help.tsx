"use client";

import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  return (
    <DateField
      label="Appointment"
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you're having trouble, contact our customer
      support team for help."
        />
      }
    />
  );
}
