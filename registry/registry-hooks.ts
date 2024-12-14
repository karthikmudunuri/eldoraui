import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "copytoclipboard",
    type: "registry:hook",
    dependencies: ["lucide-react"],
    files: ["hooks/copytoclipboard.tsx"],
  },
  {
    name: "usemouse",
    type: "registry:hook",
    dependencies: ["lucide-react"],
    files: ["hooks/usemouse.tsx"],
  },
];
