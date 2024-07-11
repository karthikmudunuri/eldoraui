"use client";

import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return (
    <DatePicker
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
