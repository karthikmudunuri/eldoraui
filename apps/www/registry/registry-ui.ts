import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "safari-browser",
    type: "registry:ui",
    title: "safari-browser",
    description: "A safari browser component.",
    files: [
      {
        path: "eldoraui/safari-browser.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "macbook-pro",
    type: "registry:ui",
    title: "macbook-pro",
    description: "A MacBook Pro SVG component.",
    files: [
      {
        path: "eldoraui/macbook-pro.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "iphone-17-pro",
    type: "registry:ui",
    title: "iphone-17-pro",
    description: "An iPhone 17 Pro SVG component.",
    files: [
      {
        path: "eldoraui/iphone-17-pro.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "ipad",
    type: "registry:ui",
    title: "ipad",
    description: "An iPad SVG component.",
    files: [
      {
        path: "eldoraui/ipad.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "browser",
    type: "registry:ui",
    title: "browser",
    description: "A browser SVG component.",
    files: [
      {
        path: "eldoraui/browser.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "cobe-globe",
    type: "registry:ui",
    title: "cobe-globe",
    description: "A cobe globe component.",
    dependencies: ["react-spring", "cobe"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "eldoraui/cobe-globe.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "github-inline-comments",
    type: "registry:ui",
    title: "github-inline-comments",
    description: "A github inline comments component.",
    registryDependencies: [
      "button",
      "utils",
      "tooltip",
      "badge",
      "textarea",
      "separator",
      "avatar",
    ],
    dependencies: ["react", "lucide-react"],
    files: [
      {
        path: "eldoraui/github-inline-comments.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-badge",
    type: "registry:ui",
    title: "animated-badge",
    description: "An animated badge component.",
    dependencies: ["motion", "lucide-react"],
    files: [
      {
        path: "eldoraui/animated-badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "grid",
    type: "registry:ui",
    title: "grid",
    description: "A grid component.",
    dependencies: ["react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/grid.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "clerk-otp",
    type: "registry:ui",
    title: "clerk-otp",
    description: "A clerk OTP component.",
    dependencies: ["react", "motion"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/clerk-otp.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "marquee",
    type: "registry:ui",
    title: "marquee",
    description:
      "A performant, customizable marquee (scrolling text/content) component.",
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/marquee.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-marquee": "marquee var(--duration) infinite linear",
        "animate-marquee-vertical":
          "marquee-vertical var(--duration) linear infinite",
      },
    },
    css: {
      "@keyframes marquee": {
        from: {
          transform: "translateX(0)",
        },
        to: {
          transform: "translateX(calc(-100% - var(--gap)))",
        },
      },
      "@keyframes marquee-vertical": {
        from: {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(calc(-100% - var(--gap)))",
        },
      },
    },
  },
  {
    name: "integrations",
    type: "registry:ui",
    title: "integrations",
    description: "An integrations component.",
    dependencies: ["react", "motion", "lucide-react"],
    registryDependencies: ["utils", "marquee"],
    files: [
      {
        path: "eldoraui/integrations.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "terminal",
    type: "registry:ui",
    title: "terminal",
    description: "A terminal component.",
    dependencies: ["react", "lucide-react", "react-icons/go"],
    files: [
      {
        path: "eldoraui/terminal.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "testimonal-slider",
    type: "registry:ui",
    title: "testimonal-slider",
    description: "A testimonial slider component.",
    dependencies: ["react", "@headlessui/react"],
    files: [
      {
        path: "eldoraui/testimonal-slider.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "map",
    type: "registry:ui",
    title: "map",
    description: "An animated map component with location markers.",
    dependencies: ["motion"],
    files: [
      {
        path: "eldoraui/map.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "svg-ripple-effect",
    type: "registry:ui",
    title: "svg-ripple-effect",
    description: "An SVG ripple effect component.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/svg-ripple-effect.tsx",
        type: "registry:ui",
      },
    ],
  },
]
