import { NavItem, NavItemWithChildren } from "@/types"

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Templates",
      href: "https://pro.eldoraui.site",
      event: "header_cta_clicked",
      label: "",
    },
    {
      title: "Showcase",
      href: "/showcase",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "MCP",
          href: "/docs/mcp",
          items: [],
          label: "",
        },
        {
          title: "Story",
          href: "/docs/story",
          items: [],
          label: "New",
        },
        {
          title: "Legacy",
          href: "/docs/legacy",
          items: [],
          label: "",
        },
      ],
    },
    {
      title: "Mockups",
      items: [
        {
          title: "Safari Browser",
          href: "/docs/components/safari-browser",
          items: [],
          label: "New",
        },
        {
          title: "MacBook Pro",
          href: "/docs/components/macbook-pro",
          items: [],
          label: "New",
        },
        {
          title: "iPhone 17 Pro",
          href: "/docs/components/iphone-17-pro",
          items: [],
          label: "New",
        },
        {
          title: "iPad",
          href: "/docs/components/ipad",
          items: [],
          label: "New",
        },
        {
          title: "Browser",
          href: "/docs/components/browser",
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Animated Badge",
          href: "/docs/components/animated-badge",
          items: [],
          label: "New",
        },
        {
          title: "Clerk OTP",
          href: "/docs/components/clerk-otp",
          items: [],
          label: "New",
        },
        {
          title: "Terminal",
          href: "/docs/components/terminal",
          items: [],
          label: "New",
        },
        {
          title: "Grid",
          href: "/docs/components/grid",
          items: [],
          label: "New",
        },
        {
          title: "Cobe Globe",
          href: "/docs/components/cobe-globe",
          items: [],
        },
        {
          title: "Integrations",
          href: "/docs/components/integrations",
          items: [],
        },
        {
          title: "Github Inline Comments",
          href: "/docs/components/github-inline-comments",
          items: [],
          label: "New",
        },
      ],
    },
  ],
}
