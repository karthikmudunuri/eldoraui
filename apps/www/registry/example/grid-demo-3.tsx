"use client"

import { Grid } from "@/registry/eldoraui/grid"

export default function GridDemo3() {
  return (
    <div className="bg-background relative z-10 w-full space-y-8 overflow-hidden rounded-lg border p-8">
      {/* Grid without Plus Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Grid without Plus Icons</h3>
        <Grid columns={8} rows={2} height="h-20" showPlusIcons={false} />
      </div>
    </div>
  )
}
