"use client";

import React from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/lib/components/core/default/range-calendar";

export default function Demo() {
  return (
    <RangeCalendar
      aria-label="Date (controlled)"
      defaultValue={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
      }}
    />
  );
}
