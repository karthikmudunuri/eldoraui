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
]
