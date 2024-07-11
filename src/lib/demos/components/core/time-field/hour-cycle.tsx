"use client";

import { TimeField } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return <TimeField aria-label="Appointment time" hourCycle={24} />;
}
