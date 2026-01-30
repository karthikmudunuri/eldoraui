import Link from "next/link"
import { ChevronDownIcon, SquareArrowOutUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { PingDot } from "@/components/ping-dot"

import { ThemeSwitcher } from "./theme-toggler"

const linksPro = [
  {
    group: "Product",
    items: [
      {
        title: "AI",
        href: "#",
      },
      {
        title: "Enterprise",
        href: "#",
      },
      {
        title: "Fluid Compute",
        href: "#",
      },
      {
        title: "Next.js",
        href: "#",
      },
      {
        title: "Observability",
        href: "#",
      },
      {
        title: "Previews",
        href: "#",
      },
      {
        title: "Rendering",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
      {
        title: "Turbo",
        href: "#",
      },
      {
        title: "Domains",
        href: "#",
      },
    ],
  },
]

const linksRes = [
  {
    group: "Resources",
    items: [
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Guides",
        href: "#",
      },
      {
        title: "Academy",
        href: "#",
      },
      {
        title: "Help",
        href: "#",
      },
      {
        title: "Integrations",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Resources",
        href: "#",
      },
      {
        title: "Solution Partners",
        href: "#",
      },
      {
        title: "Startups",
        href: "#",
      },
      {
        title: "Templates",
        href: "#",
      },
    ],
  },
]

const linksCom = [
  {
    group: "Company",
    items: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Events",
        href: "#",
      },
      {
        title: "Partners",
        href: "#",
      },
      {
        title: "Shipped",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="">
          <div className="grid grid-cols-2 gap-14 md:grid-cols-3 lg:grid-cols-5">
            <div className="grid gap-3">
              {linksPro.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground block duration-150 hover:text-cyan-500"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <Link
                    href={"#"}
                    className="text-muted-foreground flex items-center gap-1 text-sm duration-150 hover:text-cyan-500"
                  >
                    v0
                    <SquareArrowOutUpRightIcon strokeWidth={2} size={16} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksRes.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>
                  <Link
                    href={"#"}
                    className="text-muted-foreground flex items-center gap-1 text-sm duration-150 hover:text-cyan-500"
                  >
                    Community
                    <SquareArrowOutUpRightIcon strokeWidth={2} size={16} />
                  </Link>
                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground block duration-150 hover:text-cyan-500"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-muted-foreground flex items-center gap-1 text-sm hover:text-cyan-500">
                      SDKs by Vercel{" "}
                      <ChevronDownIcon strokeWidth={2} size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="w-60 p-1"
                    >
                      <DropdownMenuItem className="h-10 px-4">
                        AI SDK{" "}
                        <SquareArrowOutUpRightIcon strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Flags SDK{" "}
                        <SquareArrowOutUpRightIcon strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Chat SDK{" "}
                        <SquareArrowOutUpRightIcon strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Streamdown AI{" "}
                        <SquareArrowOutUpRightIcon strokeWidth={2} size={16} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              {linksCom.map((link, index) => (
                <div key={index} className="space-y-3 text-sm">
                  <span className="block font-medium">{link.group}</span>

                  {link.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground block duration-150 hover:text-cyan-500"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-muted-foreground flex items-center gap-1 text-sm hover:text-cyan-500">
                      Legal <ChevronDownIcon strokeWidth={2} size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="top"
                      align="end"
                      className="w-60 p-1"
                    >
                      <DropdownMenuItem className="h-10 px-4">
                        Cookie Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Cookie Preferences
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        DMCA Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        DORA Addendum
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        DPA
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-16 px-4">
                        Domain Name Registration and Services Terms
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Event Code of Conduct
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Event Terms and Conditions
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Inactivity Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Job Applicant Privacy Notice
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Privacy Policy
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        SLA
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Sub-processors
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Support Terms
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Terms of Service
                      </DropdownMenuItem>
                      <DropdownMenuItem className="h-10 px-4">
                        Trademark Policy
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
            <div className="grid gap-3">
              <div className="space-y-3 text-sm">
                <span className="block font-medium">Social</span>
                <Link
                  href="#"
                  className="text-muted-foreground block duration-150 hover:text-cyan-500"
                >
                  <span className="flex items-center gap-2">Github</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground block duration-150 hover:text-cyan-500"
                >
                  <span className="flex items-center gap-2">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground block duration-150 hover:text-cyan-500"
                >
                  <span className="flex items-center gap-2">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground block duration-150 hover:text-cyan-500"
                >
                  <span className="flex items-center gap-2">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 py-6">
          <Button
            className="cursor-pointer text-cyan-500 hover:text-cyan-500"
            variant={"ghost"}
          >
            <PingDot />
            All systems normal.
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}
