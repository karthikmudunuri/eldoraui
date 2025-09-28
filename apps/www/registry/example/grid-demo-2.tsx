"use client"

import { Grid } from "@/registry/eldoraui/grid"

export default function GridDemo2() {
  return (
    <div className="bg-background relative z-10 w-full space-y-8 overflow-hidden rounded-lg border p-8">
      {/* Custom Grid with Different Dimensions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Grid (6x3)</h3>
        <Grid columns={6} rows={3} height="h-32" />
      </div>
    </div>
  )
}
