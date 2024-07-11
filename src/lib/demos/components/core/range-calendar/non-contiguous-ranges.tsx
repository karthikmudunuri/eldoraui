"use client";

import { type DateValue, getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/lib/components/core/default/range-calendar";

export default function Demo() {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const isDateUnavailable = (date: DateValue) =>
    disabledRanges.some(
      (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  return (
    <RangeCalendar
      aria-label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
      allowsNonContiguousRanges
    />
  );
}
