"use client";

import React from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Calendar } from "@/lib/components/core/default/calendar";

export default function Demo() {
  return <Calendar aria-label="Appointment date" defaultValue={today(getLocalTimeZone())} />;
}
