"use client";

import { parseAbsoluteToLocal } from "@internationalized/date";
import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <DatePicker
        label="Hour"
        granularity="hour"
        defaultValue={parseAbsoluteToLocal("2021-04-07T18:45:22Z")}
      />
      <DatePicker
        label="Minute"
        granularity="minute"
        defaultValue={parseAbsoluteToLocal("2021-04-07T18:45:22Z")}
      />
      <DatePicker
        label="Second"
        granularity="second"
        defaultValue={parseAbsoluteToLocal("2021-04-07T18:45:22Z")}
      />
    </div>
  );
}
