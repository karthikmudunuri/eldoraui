"use client";

import React from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { type DateRange } from "react-aria-components";
import { RangeCalendar } from "@/lib/components/core/default/range-calendar";

export default function Demo() {
  const [range, setRange] = React.useState<DateRange>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 }),
  });
  return (
    <div className="flex flex-col items-center gap-6">
      <RangeCalendar aria-label="Date (controlled)" value={range} onChange={setRange} />
      <p className="text-sm text-fg-muted">
        Start date: {range?.start.toString()}
        <br />
        End date: {range?.end.toString()}
      </p>
    </div>
  );
}
