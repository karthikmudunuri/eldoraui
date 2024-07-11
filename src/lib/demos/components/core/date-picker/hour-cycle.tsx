"use client";

import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return <DatePicker aria-label="Appointment date" granularity="minute" hourCycle={24} />;
}
