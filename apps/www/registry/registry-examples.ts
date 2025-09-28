import { type Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "safari-browser-demo",
    type: "registry:example",
    title: "safari-browser-demo",
    description: "Example showing a safari-browser-demo component.",
    registryDependencies: ["@eldoraui/safari-browser"],
    files: [
      {
        path: "example/safari-browser-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "macbook-pro-demo",
    type: "registry:example",
    title: "macbook-pro-demo",
    description: "Example showing a macbook-pro-demo component.",
    registryDependencies: ["@eldoraui/macbook-pro"],
    files: [
      {
        path: "example/macbook-pro-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "iphone-17-pro-demo",
    type: "registry:example",
    title: "iphone-17-pro-demo",
    description: "Example showing a iphone-17-pro-demo component.",
    registryDependencies: ["@eldoraui/iphone-17-pro"],
    files: [
      {
        path: "example/iphone-17-pro-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "ipad-demo",
    type: "registry:example",
    title: "ipad-demo",
    description: "Example showing a ipad-demo component.",
    registryDependencies: ["@eldoraui/ipad"],
    files: [
      {
        path: "example/ipad-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
