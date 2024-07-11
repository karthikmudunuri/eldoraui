"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/lib/components/core/default/range-calendar";

export default function Demo() {
  return <RangeCalendar aria-label="Appointment date" minValue={today(getLocalTimeZone())} />;
}
