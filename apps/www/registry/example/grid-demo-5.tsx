"use client"

import { Grid } from "@/registry/eldoraui/grid"

export default function GridDemo() {
  return (
    <div className="bg-background relative z-10 w-full space-y-8 overflow-hidden rounded-lg border p-8">
      {/* Grid with Custom Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Grid with Custom Content</h3>
        <Grid columns={4} rows={2} height="h-32" className="bg-muted/20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="text-muted-foreground flex items-center justify-center border-r border-b text-sm font-medium"
            >
              {i + 1}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  )
}
