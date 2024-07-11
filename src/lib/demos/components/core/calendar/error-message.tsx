"use client";

import React from "react";
import { today, isWeekend, getLocalTimeZone } from "@internationalized/date";
import { useLocale } from "react-aria";
import { Calendar } from "@/lib/components/core/default/calendar";

export default function Demo() {
  const [date, setDate] = React.useState(today(getLocalTimeZone()));
  const { locale } = useLocale();
  const isInvalid = isWeekend(date, locale);
  return (
    <Calendar
      value={date}
      onChange={setDate}
      isInvalid={isInvalid}
      errorMessage={"We are closed on weekends"}
    />
  );
}
