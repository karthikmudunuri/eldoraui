"use client";

import { DateRangePicker } from "@/lib/components/core/default/date-range-picker";

export default function Demo() {
  return <DateRangePicker aria-label="Appointment date" granularity="minute" hourCycle={24} />;
}
