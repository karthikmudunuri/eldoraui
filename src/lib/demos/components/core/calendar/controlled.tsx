"use client";

import React from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useDateFormatter } from "react-aria";
import { Calendar } from "@/lib/components/core/default/calendar";

export default function Demo() {
  const [value, setValue] = React.useState(today(getLocalTimeZone()));
  const formatter = useDateFormatter({ dateStyle: "full" });
  return (
    <div className="flex flex-col items-center gap-6">
      <Calendar aria-label="Date (controlled)" value={value} onChange={setValue} />
      <p className="text-sm text-fg-muted">
        Selected date: {formatter.format(value.toDate(getLocalTimeZone()))}
      </p>
    </div>
  );
}
