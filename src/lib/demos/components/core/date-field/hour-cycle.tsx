"use client";

import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  return <DateField aria-label="Appointment date" granularity="minute" hourCycle={24} />;
}
