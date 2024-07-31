"use client"

import React from "react"
import { DateRange } from "react-day-picker"
import { Calendar } from "@/lib/components/core/default/calendarnew"

const CalendarDropdownExample = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  
  return (
    <div className="flex flex-col items-center gap-y-4">
        <Calendar 
            selected={date} 
            onSelect={setDate} 
            captionLayout="dropdown-buttons"
            fromYear={1990}
            toYear={2024}
        />
      <p className="rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        Selected Range:{" "}
        {date
          ? `${date.toLocaleDateString()}`
          : "None"}
      </p>
    </div>
  )
}

export default CalendarDropdownExample;