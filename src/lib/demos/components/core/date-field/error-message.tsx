"use client";

import React from "react";
import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  return (
    <DateField label="Meeting" isInvalid errorMessage="Meetings can't be scheduled in the past." />
  );
}
