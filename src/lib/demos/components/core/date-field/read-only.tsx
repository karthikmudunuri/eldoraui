"use client";

import React from "react";
import { CalendarDate } from "@internationalized/date";
import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  return <DateField label="Event date" value={new CalendarDate(1980, 1, 1)} isReadOnly />;
}
