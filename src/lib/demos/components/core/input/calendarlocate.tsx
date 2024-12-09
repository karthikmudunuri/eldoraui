"use client"

import React from "react"
import { fr } from "date-fns/locale"
import { Calendar } from "@/lib/components/core/default/calendarnew"

const CalendarLocaleExample = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Calendar locale={fr} selected={date} onSelect={setDate} />
      <p className="rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        Date sélectionnée: {date ? date.toLocaleDateString() : "None"}
      </p>
    </div>
  )
}

export default CalendarLocaleExample