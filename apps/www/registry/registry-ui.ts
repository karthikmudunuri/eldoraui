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
]
