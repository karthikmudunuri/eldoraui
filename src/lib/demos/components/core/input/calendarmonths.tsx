"use client"

import React from "react"
import { DateRange } from "react-day-picker"
import { Calendar } from "@/lib/components/core/default/calendarnew"

const CalendarRangeExample = () => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined,
  )
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Calendar
        mode="range"
        numberOfMonths={2}
        selected={dateRange}
        onSelect={setDateRange}
      />
      <p className="rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.from?.toLocaleDateString()} – ${dateRange.to?.toLocaleDateString() ?? ""}`
          : "None"}
      </p>
    </div>
  )
}

export default CalendarRangeExample;