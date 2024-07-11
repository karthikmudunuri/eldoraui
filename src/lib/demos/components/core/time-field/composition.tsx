"use client";

import React from "react";
import { DateInput, DateSegment } from "@/lib/components/core/default/date-input";
import { Description, Label } from "@/lib/components/core/default/field";
import { InputRoot } from "@/lib/components/core/default/input";
import { TimeFieldRoot } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return (
    <TimeFieldRoot>
      <Label>Meeting time</Label>
      <InputRoot>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </InputRoot>
      <Description>Please select a time between 9 AM and 5 PM.</Description>
    </TimeFieldRoot>
  );
}
