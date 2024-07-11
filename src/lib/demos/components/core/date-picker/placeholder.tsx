"use client";

import { CalendarDate } from "@internationalized/date";
import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return <DatePicker label="Meeting date" placeholderValue={new CalendarDate(1980, 1, 1)} />;
}
