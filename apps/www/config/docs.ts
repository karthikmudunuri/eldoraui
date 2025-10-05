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
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
          label: "New",
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
          title: "Testimonal Slider",
          href: "/docs/components/testimonal-slider",
          items: [],
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
    {
      title: "Special Animations",
      items: [
        {
          title: "Animated Frameworks",
          href: "/docs/components/animated-frameworks",
          items: [],
          label: "New",
        },
        {
          title: "Map",
          href: "/docs/components/map",
          items: [],
          label: "New",
        },
        {
          title: "Svg Ripple Effect",
          href: "/docs/components/svg-ripple-effect",
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Blur In Text",
          href: "/docs/components/blur-in-text",
          items: [],
        },
        {
          title: "Fade In Text",
          href: "/docs/components/fade-in-text",
          items: [],
        },
        {
          title: "Fade Down Text",
          href: "/docs/components/fade-down-text",
          items: [],
        },
        {
          title: "Fade Up Text",
          href: "/docs/components/fade-up-text",
          items: [],
        },
        {
          title: "Gradual Spacing Text",
          href: "/docs/components/gradual-spacing-text",
          items: [],
        },
        {
          title: "Letter Pull Up Text",
          href: "/docs/components/letter-pull-up-text",
          items: [],
        },
        {
          title: "Multi Direction Slide Text",
          href: "/docs/components/multi-direction-slide-text",
          items: [],
        },
        {
          title: "Seperate Away Text",
          href: "/docs/components/seperate-away-text",
          items: [],
        },
      ],
    },
  ],
}
