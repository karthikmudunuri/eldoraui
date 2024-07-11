"use client";

import React from "react";
import { TimeField } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return (
    <TimeField label="Appointment" description="Please select a time between 9 AM and 5 PM." />
  );
}
