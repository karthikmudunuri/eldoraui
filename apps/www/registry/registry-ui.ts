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
]
