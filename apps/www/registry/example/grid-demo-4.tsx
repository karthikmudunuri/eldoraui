"use client"

import { Grid } from "@/registry/eldoraui/grid"

export default function GridDemo() {
  return (
    <div className="bg-background relative z-10 w-full space-y-8 overflow-hidden rounded-lg border p-8">
      {/* Large Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Large Grid (12x4)</h3>
        <Grid columns={12} rows={4} height="h-40" />
      </div>
    </div>
  )
}
