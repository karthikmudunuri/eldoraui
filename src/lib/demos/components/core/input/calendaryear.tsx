"use client"

import React from "react"
import { Calendar } from "@/lib/components/core/default/calendarnew"

const CalendarYearNavigationExample = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Calendar enableYearNavigation selected={date} onSelect={setDate} />
      <p className="rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        Selected Date: {date ? date.toLocaleDateString() : "None"}
      </p>
    </div>
  )
}

export default CalendarYearNavigationExample;