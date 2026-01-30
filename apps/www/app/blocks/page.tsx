import Link from "next/link"

import { Button } from "@/components/ui/button"
import { BlockDisplay } from "@/components/block-display"

export const dynamic = "force-static"
export const revalidate = false

// NOTE: With a single style, we only need to reference block names.
const FEATURED_BLOCKS = ["logo-cloud-01", "cta-02", "testimonal-02"]

export default async function BlocksPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {FEATURED_BLOCKS.map((name) => (
        <BlockDisplay name={name} key={name} />
      ))}
      <div className="container-wrapper">
        <div className="container flex justify-center py-6">
          <Button asChild variant="outline">
            <Link href="/blocks/header">Browse more blocks</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
