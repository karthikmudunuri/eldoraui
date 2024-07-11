"use client";

import { Button } from "@/lib/components/core/default/button";
import {
  CalendarHeader,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  CalendarCell,
} from "@/lib/components/core/default/calendar";
import { Heading } from "@/lib/components/core/default/heading";
import { RangeCalendarRoot } from "@/lib/components/core/default/range-calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <RangeCalendarRoot>
      <CalendarHeader>
        <Button slot="previous" variant="outline" shape="square" size="sm">
          <ChevronLeftIcon />
        </Button>
        <Heading className="text-sm" />
        <Button slot="next" variant="outline" shape="square" size="sm">
          <ChevronRightIcon />
        </Button>
      </CalendarHeader>
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => (
            <CalendarCell date={date} range>
              {({ formattedDate }) => <span className="z-20">{formattedDate}</span>}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </RangeCalendarRoot>
  );
}
