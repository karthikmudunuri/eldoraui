import { type Metadata } from "next"

import { BlocksNav } from "@/components/blocks-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { SiteBanner } from "@/components/site-banner"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const title = "Building Blocks for the Web"
const description =
  "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteBanner />
      <SiteHeader />
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <PageNav id="blocks">
        <BlocksNav />
        {/* <Button asChild variant="secondary" size="sm">
            <Link href="/docs/blocks">Add a block</Link>
          </Button> */}
      </PageNav>
      <div className="container-wrapper section-soft flex-1 md:py-12">
        <div className="container">{children}</div>
      </div>
      <SiteFooter />
      <div className="before:animate-rainbow pointer-events-none absolute inset-0 h-24 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-4/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-size-[200%] before:opacity-20 before:filter-[blur(calc(4*1rem))]" />
    </>
  )
}
