"use client";

import * as React from "react";
import {
  composeRenderProps,
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  CalendarGridBody as AriaCalendarGridBody,
  type CalendarProps as AriaCalendarProps,
  type CalendarGridProps as AriaCalendarGridProps,
  type CalendarGridHeaderProps as AriaCalendarGridHeaderProps,
  type CalendarHeaderCellProps as AriaCalendarHeaderCellProps,
  type CalendarGridBodyProps as AriaCalendarGridBodyProps,
  type CalendarCellProps as AriaCalendarCellProps,
  type DateValue,
  CalendarContext as AriaCalendarContext,
  useSlottedContext,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { Button, buttonStyles } from "./button";
import { Heading } from "./heading";
import { Text } from "./text";

const calendarStyles = tv({
  slots: {
    root: "",
    header: "mb-4 flex items-center justify-between gap-2",
    grid: "w-full border-collapse",
    gridHeader: "mb-4",
    gridHeaderCell: "text-xs font-normal text-fg-muted",
    gridBody: "[&>tr>td]:p-0",
    cell: "",
  },
  variants: {
    standalone: {
      true: {
        root: "border bg-bg rounded-md p-3",
      },
      false: {
        root: "rounded-[inherit]",
      },
    },
    range: {
      false: {
        cell: [
          buttonStyles({
            variant: "quiet",
            shape: "square",
            size: "sm",
          }),
          "my-1 selected:bg-bg-primary selected:text-fg-onPrimary disabled:cursor-default disabled:bg-transparent",
          "selected:invalid:bg-bg-danger selected:invalid:text-fg-onDanger",
          "unavailable:line-through unavailable:hover:bg-transparent unavailable:cursor-default unavailable:text-fg-muted",
          "outside-month:hidden",
        ],
      },
      true: {
        cell: [
          "relative my-1 flex size-8 items-center justify-center rounded-md text-sm font-normal leading-normal disabled:cursor-default disabled:bg-transparent disabled:text-fg-disabled",
          "after:absolute after:inset-0 after:transition-colors after:content-[''] selected:after:bg-bg-primary/10",
          "before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:transition-colors before:content-[''] hover:before:bg-bg-inverse/10",
          "outline-none before:border before:border-transparent before:ring-0 before:ring-border-focus focus-visible:z-50 focus-visible:before:border-border focus-visible:before:ring-2 focus-visible:before:ring-offset-2 focus-visible:before:ring-offset-bg",
          "selection-start:after:rounded-l-[inherit] selection-end:after:rounded-r-[inherit]",
          "selection-start:pressed:before:bg-primary/90 selection-start:text-fg-onPrimary selection-start:before:bg-bg-primary",
          "selection-end:pressed:before:bg-primary/90 selection-end:text-fg-onPrimary selection-end:before:bg-bg-primary",
          "selected:invalid:after:bg-bg-danger selected:invalid:[&:not([data-selection-start])]:[&:not([data-selection-end])]:text-fg-onDanger",
          "unavailable:line-through unavailable:hover:before:bg-transparent unavailable:cursor-default unavailable:text-fg-muted",
          "outside-month:hidden",
        ],
      },
    },
  },
  defaultVariants: {
    range: false,
  },
});

interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, "visibleDuration"> {
  visibleMonths?: number;
  errorMessage?: string;
}
const Calendar = <T extends DateValue>({
  errorMessage,
  visibleMonths = 1,
  ...props
}: CalendarProps<T>) => {
  visibleMonths = Math.min(Math.max(visibleMonths, 1), 3);

  return (
    <CalendarRoot visibleDuration={{ months: visibleMonths }} {...props}>
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
                <CalendarGridBody>{(date) => <CalendarCell date={date} />}</CalendarGridBody>
              </CalendarGrid>
            ))}
          </div>
          {isInvalid && errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        </>
      )}
    </CalendarRoot>
  );
};

type CalendarRootProps<T extends DateValue> = AriaCalendarProps<T>;
const CalendarRoot = <T extends DateValue>(props: CalendarRootProps<T>) => {
  const CalendarContext = useSlottedContext(AriaCalendarContext);
  const standalone = Object.keys(CalendarContext ?? {}).length === 0;
  const { root } = calendarStyles({ standalone });
  return (
    <AriaCalendar
      {...props}
      className={composeRenderProps(props.className, (className) => root({ className }))}
    />
  );
};

type CalendarHeaderProps = React.HTMLAttributes<HTMLElement>;
const CalendarHeader = ({ className, ...props }: CalendarHeaderProps) => {
  const { header } = calendarStyles();
  return <header className={header({ className })} {...props} />;
};

type CalendarGridProps = AriaCalendarGridProps;
const CalendarGrid = ({ className, ...props }: CalendarGridProps) => {
  const { grid } = calendarStyles();
  return <AriaCalendarGrid className={grid({ className })} {...props} />;
};

type CalendarGridHeaderProps = AriaCalendarGridHeaderProps;
const CalendarGridHeader = ({ className, ...props }: CalendarGridHeaderProps) => {
  const { gridHeader } = calendarStyles();
  return <AriaCalendarGridHeader className={gridHeader({ className })} {...props} />;
};

type CalendarHeaderCellProps = AriaCalendarHeaderCellProps;
const CalendarHeaderCell = ({ className, ...props }: CalendarHeaderCellProps) => {
  const { gridHeaderCell } = calendarStyles();
  return <AriaCalendarHeaderCell className={gridHeaderCell({ className })} {...props} />;
};

type CalendarGridBodyProps = AriaCalendarGridBodyProps;
const CalendarGridBody = ({ className, ...props }: CalendarGridBodyProps) => {
  const { gridBody } = calendarStyles();
  return <AriaCalendarGridBody className={gridBody({ className })} {...props} />;
};

type CalendarCellProps = AriaCalendarCellProps & { range?: boolean };
const CalendarCell = ({ range, ...props }: CalendarCellProps) => {
  const { cell } = calendarStyles({ range });
  return (
    <AriaCalendarCell
      {...props}
      className={composeRenderProps(props.className, (className) => cell({ className }))}
    />
  );
};

export type {
  CalendarProps,
  CalendarRootProps,
  CalendarGridProps,
  CalendarGridHeaderProps,
  CalendarHeaderCellProps,
  CalendarGridBodyProps,
  CalendarCellProps,
};
export {
  Calendar,
  CalendarRoot,
  CalendarHeader,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  CalendarCell,
  calendarStyles,
};
