import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "safari-browser",
    type: "registry:ui",
    title: "safari-browser",
    description: "A safari browser component.",
    dependencies: ["react"],
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
    dependencies: ["react"],
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
    dependencies: ["react"],
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
    dependencies: ["react"],
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
    dependencies: ["react", "lucide-react"],
    registryDependencies: [
      "utils",
      "button",
      "badge",
      "card",
      "separator",
      "input",
    ],
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
    dependencies: ["react-spring", "cobe", "react"],
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
    registryDependencies: ["utils"],
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
  {
    name: "animated-frameworks",
    type: "registry:ui",
    title: "animated-frameworks",
    description: "An animated frameworks component.",
    dependencies: ["motion", "react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/animated-frameworks.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "blur-in-text",
    type: "registry:ui",
    title: "blur-in-text",
    description: "A blur in text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/blur-in-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "fade-text",
    type: "registry:ui",
    title: "fade-text",
    description:
      "A combined fade text component with support for in, up, and down directions.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/fade-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "gradual-spacing-text",
    type: "registry:ui",
    title: "gradual-spacing-text",
    description: "A gradual spacing text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/gradual-spacing-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "letter-pull-up-text",
    type: "registry:ui",
    title: "letter-pull-up-text",
    description: "A letter pull up text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/letter-pull-up-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "multi-direction-slide-text",
    type: "registry:ui",
    title: "multi-direction-slide-text",
    description: "A multi direction slide text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/multi-direction-slide-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "seperate-away-text",
    type: "registry:ui",
    title: "seperate-away-text",
    description: "A seperate away text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/seperate-away-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "wavy-text",
    type: "registry:ui",
    title: "wavy-text",
    description: "A wavy text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/wavy-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "word-pull-up-text",
    type: "registry:ui",
    title: "word-pull-up-text",
    description: "A word pull up text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "eldoraui/word-pull-up-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "novatrix-background",
    type: "registry:ui",
    title: "novatrix-background",
    description: "A novatrix background component.",
    dependencies: ["react", "ogl"],
    files: [
      {
        path: "eldoraui/novatrix-background.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "hacker-background",
    type: "registry:ui",
    title: "hacker-background",
    description: "A hacker background component.",
    dependencies: ["react"],
    files: [
      {
        path: "eldoraui/hacker-background.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card-flip-hover",
    type: "registry:ui",
    title: "card-flip-hover",
    description: "A card flip hover component.",
    dependencies: ["react"],
    files: [
      {
        path: "eldoraui/card-flip-hover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scale-letter-text",
    type: "registry:ui",
    title: "scale-letter-text",
    description: "A scale letter text component.",
    dependencies: ["react"],
    files: [
      {
        path: "eldoraui/scale-letter-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "font-weight-text",
    type: "registry:ui",
    title: "font-weight-text",
    description: "A font weight text component.",
    dependencies: ["react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/font-weight-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-grid-pattern",
    type: "registry:ui",
    title: "animated-grid-pattern",
    description: "An animated grid pattern component.",
    dependencies: ["react", "three", "react-three-fiber"],
    files: [
      {
        path: "eldoraui/animated-grid-pattern.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "live-button",
    type: "registry:ui",
    title: "live-button",
    description: "A live button component.",
    dependencies: ["react"],
    files: [
      {
        path: "eldoraui/live-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-shiny-button",
    type: "registry:ui",
    title: "animated-shiny-button",
    description: "An animated shiny button component.",
    dependencies: ["react"],
    files: [
      {
        path: "eldoraui/animated-shiny-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-list",
    type: "registry:ui",
    title: "animated-list",
    description: "An animated list component.",
    dependencies: ["react"],
    files: [
      {
        path: "eldoraui/animated-list.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "orbit-rotation",
    type: "registry:ui",
    title: "orbit-rotation",
    description: "An orbit rotation component with customizable icons.",
    dependencies: ["react", "react-icons"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "eldoraui/orbit-rotation.tsx",
        type: "registry:ui",
      },
    ],
    css: {
      "@keyframes orbit-spin": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
]
