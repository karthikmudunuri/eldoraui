"use client";

import React from "react";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import { useDateFormatter } from "react-aria";
import { DateRangePicker } from "@/lib/components/core/default/date-range-picker";

export default function Demo() {
  const [value, setValue] = React.useState({
    start: parseDate("2024-02-03"),
    end: parseDate("2024-02-08"),
  });
  const formatter = useDateFormatter({ dateStyle: "long" });

  return (
    <div className="flex flex-col items-center gap-4">
      <DateRangePicker label="Controlled" value={value} onChange={setValue} />
      <p className="text-sm text-fg-muted">
        Selected date:{" "}
        {value
          ? formatter.formatRange(
              value.start.toDate(getLocalTimeZone()),
              value.end.toDate(getLocalTimeZone())
            )
          : "--"}
      </p>
    </div>
  );
}
