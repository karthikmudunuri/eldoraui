"use client";

import { parseZonedDateTime } from "@internationalized/date";
import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return (
    <DatePicker
      label="Appointment time"
      granularity="minute"
      defaultValue={parseZonedDateTime("2022-11-07T10:45[America/Los_Angeles]")}
      hideTimeZone
    />
  );
}
