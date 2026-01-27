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
      href: "/docs/templates/portfolio",
      event: "header_cta_clicked",
      label: "",
    },
    {
      title: "Blocks",
      href: "/blocks",
      label: "New",
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
          title: "Story",
          href: "/docs/story",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Templates",
      items: [
        {
          title: "Portfolio",
          href: `/docs/templates/portfolio`,
          items: [],
          label: "",
          event: "template_portfolio_clicked",
        },
      ],
    },
    {
      title: "Mockups",
      items: [
        {
          title: "Browser",
          href: "/docs/components/browser",
          items: [],
        },
        {
          title: "iPad",
          href: "/docs/components/ipad",
          items: [],
        },
        {
          title: "iPhone 17 Pro",
          href: "/docs/components/iphone-17-pro",
          items: [],
        },
        {
          title: "MacBook Pro",
          href: "/docs/components/macbook-pro",
          items: [],
        },
        {
          title: "Safari Browser",
          href: "/docs/components/safari-browser",
          items: [],
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
        },
        {
          title: "Animated List",
          href: "/docs/components/animated-list",
          items: [],
        },
        {
          title: "Card Flip Hover",
          href: "/docs/components/card-flip-hover",
          items: [],
        },
        {
          title: "Clerk OTP",
          href: "/docs/components/clerk-otp",
          items: [],
        },
        {
          title: "Cobe Globe",
          href: "/docs/components/cobe-globe",
          items: [],
        },
        {
          title: "Github Inline Comments",
          href: "/docs/components/github-inline-comments",
          items: [],
        },
        {
          title: "Grid",
          href: "/docs/components/grid",
          items: [],
        },
        {
          title: "Integrations",
          href: "/docs/components/integrations",
          items: [],
        },
        {
          title: "Terminal",
          href: "/docs/components/terminal",
          items: [],
        },
        {
          title: "Testimonal Slider",
          href: "/docs/components/testimonal-slider",
          items: [],
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
        },
        {
          title: "Logo Timeline",
          href: "/docs/components/logo-timeline",
          items: [],
        },
        {
          title: "Map",
          href: "/docs/components/map",
          items: [],
        },
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Animated Shiny Button",
          href: "/docs/components/animated-shiny-button",
          items: [],
        },
        {
          title: "Live Button",
          href: "/docs/components/live-button",
          items: [],
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
          title: "Dock Text",
          href: "/docs/components/dock-text",
          items: [],
        },
        {
          title: "Fade Text",
          href: "/docs/components/fade-text",
          items: [],
        },
        {
          title: "Font Weight Text",
          href: "/docs/components/font-weight-text",
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
          title: "Scale Letter Text",
          href: "/docs/components/scale-letter-text",
          items: [],
        },
        {
          title: "Seperate Away Text",
          href: "/docs/components/seperate-away-text",
          items: [],
        },
        {
          title: "Wavy Text",
          href: "/docs/components/wavy-text",
          items: [],
        },
        {
          title: "Word Pull Up Text",
          href: "/docs/components/word-pull-up-text",
          items: [],
        },
      ],
    },
    {
      title: "Backgrounds",
      items: [
        {
          title: "Hacker Background",
          href: "/docs/components/hacker-background",
          items: [],
        },
        {
          title: "Novatrix Background",
          href: "/docs/components/novatrix-background",
          items: [],
        },
      ],
    },
  ],
}
