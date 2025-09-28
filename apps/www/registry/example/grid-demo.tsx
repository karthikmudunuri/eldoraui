"use client"

import { Grid } from "@/registry/eldoraui/grid"

export default function GridDemo() {
  return (
    <div className="bg-background relative z-10 w-full space-y-8 overflow-hidden rounded-lg border p-8">
      {/* Basic Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Grid</h3>
        <Grid columns={9} rows={2} height="h-24" />
      </div>
    </div>
  )
}
