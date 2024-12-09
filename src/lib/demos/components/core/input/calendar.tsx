"use client"

import React from "react"
import { DateRange } from "react-day-picker"

import { Calendar } from "@/lib/components/core/default/calendarnew"
import { Label } from "@/lib/components/core/default/label"
import { Switch } from "@/lib/components/core/default/switch"

const CalendarHero = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined,
  )
  const [mode, setMode] = React.useState<"single" | "range">("single")
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch
          size="small"
          id="range-switch"
          checked={mode === "single" ? false : true}
          onCheckedChange={() => {
            setMode(mode === "single" ? "range" : "single")
          }}
        />
        <Label htmlFor="range-switch">Range selection & multiple months</Label>
      </div>
      <>
        {mode === "single" && (
          <div className="flex flex-col items-center gap-y-4">
            <Calendar selected={date} onSelect={setDate} />
            <p className="rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
              Selected Date: {date ? date.toLocaleDateString() : "None"}
            </p>
          </div>
        )}
        {mode === "range" && (
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
        )}
      </>
    </div>
  )
}

export default CalendarHero;