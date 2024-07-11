"use client";

import React from "react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { RangeCalendar } from "@/lib/components/core/default/range-calendar";

export default function Demo() {
  const [range, setRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
  });
  const isInvalid = range.end.compare(range.start) > 7;
  return (
    <RangeCalendar
      aria-label="Trip dates"
      value={range}
      onChange={setRange}
      isInvalid={isInvalid}
      errorMessage={isInvalid ? "Maximum stay duration is 1 week" : undefined}
    />
  );
}
