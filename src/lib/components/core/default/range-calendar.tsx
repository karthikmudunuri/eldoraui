"use client";

import * as React from "react";
import {
  composeRenderProps,
  RangeCalendar as AriaRangeCalendar,
  type RangeCalendarProps as AriaRangeCalendarProps,
  type DateValue,
  RangeCalendarContext as AriaRangeCalendarContext,
  useSlottedContext,
} from "react-aria-components";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { Button } from "./button";
import {
  CalendarHeader,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  CalendarCell,
  calendarStyles,
} from "./calendar";
import { Heading } from "./heading";
import { Text } from "./text";

interface RangeCalendarProps<T extends DateValue>
  extends Omit<AriaRangeCalendarProps<T>, "visibleDuration"> {
  visibleMonths?: number;
  errorMessage?: string;
}
const RangeCalendar = <T extends DateValue>({
  visibleMonths = 1,
  errorMessage,
  ...props
}: RangeCalendarProps<T>) => {
  visibleMonths = Math.min(Math.max(visibleMonths, 1), 3);
  return (
    <RangeCalendarRoot visibleDuration={{ months: visibleMonths }} {...props}>
      {({ isInvalid }) => (
        <>
          <CalendarHeader>
            <Button slot="previous" variant="outline" shape="square" size="sm">
              <ChevronLeftIcon />
            </Button>
            <Heading className="text-sm" />
            <Button slot="next" variant="outline" shape="square" size="sm">
              <ChevronRightIcon />
            </Button>
          </CalendarHeader>
          <div className="flex items-start gap-4">
            {Array.from({ length: visibleMonths }).map((_, index) => (
              <CalendarGrid key={index} offset={index === 0 ? undefined : { months: index }}>
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
            ))}
          </div>
          {isInvalid && errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        </>
      )}
    </RangeCalendarRoot>
  );
};

type RangeCalendarRootProps<T extends DateValue> = AriaRangeCalendarProps<T>;
const RangeCalendarRoot = <T extends DateValue>(props: RangeCalendarRootProps<T>) => {
  const CalendarContext = useSlottedContext(AriaRangeCalendarContext);
  const standalone = Object.keys(CalendarContext ?? {}).length === 0;
  const { root } = calendarStyles({ standalone });
  return (
    <AriaRangeCalendar
      className={composeRenderProps(props.className, (className) => root({ className }))}
      {...props}
    />
  );
};

export type { RangeCalendarProps, RangeCalendarRootProps };
export { RangeCalendar, RangeCalendarRoot };
