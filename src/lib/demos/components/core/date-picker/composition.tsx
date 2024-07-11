"use client";

import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Calendar } from "@/lib/components/core/default/calendar";
import { DateInput, DateSegment } from "@/lib/components/core/default/date-input";
import { DatePickerRoot } from "@/lib/components/core/default/date-picker";
import { DialogContent } from "@/lib/components/core/default/dialog";
import { Description, FieldError, Label } from "@/lib/components/core/default/field";
import { InputRoot } from "@/lib/components/core/default/input";
import { Overlay } from "@/lib/components/core/default/overlay";
import { CalendarIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <DatePickerRoot>
      <Label>Meeting date</Label>
      <InputRoot
        suffix={
          <Button variant="default" size="sm" shape="square" className="size-7">
            <CalendarIcon />
          </Button>
        }
        className="pr-1"
      >
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </InputRoot>
      <Description>Please select a date.</Description>
      <FieldError />
      <Overlay type="popover" mobileType="drawer">
        <DialogContent>
          <Calendar />
        </DialogContent>
      </Overlay>
    </DatePickerRoot>
  );
}
