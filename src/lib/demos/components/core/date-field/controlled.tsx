"use client";

import React from "react";
import { parseDate } from "@internationalized/date";
import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  const [value, setValue] = React.useState(parseDate("2020-02-03"));
  return (
    <div className="flex flex-col items-center gap-4">
      <DateField aria-label="Event date" value={value} onChange={setValue} />
      <p className="text-sm text-fg-muted">selected date: {value.toString()}</p>
    </div>
  );
}
