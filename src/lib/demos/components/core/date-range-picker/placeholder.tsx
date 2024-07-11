"use client";

import { CalendarDate } from "@internationalized/date";
import { DateRangePicker } from "@/lib/components/core/default/date-range-picker";

export default function Demo() {
  return <DateRangePicker label="Meeting date" placeholderValue={new CalendarDate(1980, 1, 1)} />;
}
