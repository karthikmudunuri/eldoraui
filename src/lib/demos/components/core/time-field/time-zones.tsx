"use client";

import { parseAbsoluteToLocal } from "@internationalized/date";
import { TimeField } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return <TimeField defaultValue={parseAbsoluteToLocal("2021-11-07T07:45:00Z")} />;
}
