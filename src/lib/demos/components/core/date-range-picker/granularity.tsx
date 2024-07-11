"use client";

import { parseAbsoluteToLocal } from "@internationalized/date";
import { DateRangePicker } from "@/lib/components/core/default/date-range-picker";

export default function Demo() {
  const dates = {
    start: parseAbsoluteToLocal("2021-04-07T18:45:22Z"),
    end: parseAbsoluteToLocal("2021-04-08T20:00:00Z"),
  };
  return (
    <div className="flex flex-col gap-4">
      <DateRangePicker label="Hour" granularity="hour" defaultValue={dates} />
      <DateRangePicker label="Minute" granularity="minute" defaultValue={dates} />
      <DateRangePicker label="Second" granularity="second" defaultValue={dates} />
    </div>
  );
}
