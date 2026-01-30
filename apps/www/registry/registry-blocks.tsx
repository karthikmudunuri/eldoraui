import { type Registry } from "shadcn/schema"

export const block: Registry["items"] = [
  {
    name: "header-01",
    description: "A simple header.",
    type: "registry:block",
    dependencies: ["motion/react", "lucide-react", "next-themes"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/header-01/page.tsx",
        target: "app/header/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/header-01/components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header-01/components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header-01/components/theme-toggle.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header-01/lib/nav-links.ts",
        type: "registry:lib",
      },
    ],
    categories: ["header"],
  },
  {
    name: "header-02",
    description: "A simple header.",
    type: "registry:block",
    dependencies: ["motion/react", "lucide-react", "next-themes"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/header-02/page.tsx",
        target: "app/header-02/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/header-02/components/navbar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
  },
  {
    name: "logo-cloud-01",
    description: "A simple logo cloud.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "blocks/logo-cloud-01/page.tsx",
        target: "app/logo-cloud/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-cloud-01/components/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
  },
  {
    name: "logo-cloud-02",
    description: "A logo cloud with flex wrap layout.",
    type: "registry:block",
    dependencies: [],
    files: [
      {
        path: "blocks/logo-cloud-02/page.tsx",
        target: "app/logo-cloud/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-cloud-02/components/logo-cloud-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
  },
  {
    name: "logo-cloud-03",
    description: "A logo cloud with marquee effect.",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["marquee"],
    files: [
      {
        path: "blocks/logo-cloud-03/page.tsx",
        target: "app/logo-cloud/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-cloud-03/components/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
  },
  {
    name: "logo-cloud-04",
    description: "A logo cloud with motion.",
    type: "registry:block",
    dependencies: ["motion/react"],
    files: [
      {
        path: "blocks/logo-cloud-04/page.tsx",
        target: "app/logo-cloud/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-cloud-04/components/logo-cloud-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
  },
  {
    name: "testimonal-01",
    description: "A testimonial slider.",
    type: "registry:block",
    dependencies: ["react-icons/md"],
    files: [
      {
        path: "blocks/testimonal-01/page.tsx",
        target: "app/testimonial/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/testimonal-01/components/carousel.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/testimonal-01/components/section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
  {
    name: "testimonal-02",
    description: "A testimonial marquee.",
    type: "registry:block",
    dependencies: ["motion/react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/testimonal-02/page.tsx",
        target: "app/testimonial/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/testimonal-02/components/marquee.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/testimonal-02/components/testimonals.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
  {
    name: "testimonal-03",
    description: "A testimonial card grid.",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "blocks/testimonal-03/page.tsx",
        target: "app/testimonial/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/testimonal-03/components/testimonal-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
  {
    name: "features-01",
    description: "Features section with accordion and image carousel.",
    type: "registry:block",
    dependencies: ["motion/react", "@radix-ui/react-accordion", "lucide-react"],
    files: [
      {
        path: "blocks/features-01/page.tsx",
        target: "app/features/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/features-01/components/features.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/features-01/components/section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
  },
  {
    name: "cta-01",
    description: "CTA with heading, grid background, and animated side lines.",
    type: "registry:block",
    dependencies: ["motion/react", "next-themes"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/cta-01/page.tsx",
        target: "app/cta/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-01/components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
  },
  {
    name: "cta-02",
    description: "CTA with heading, button, and orbiting app icons.",
    type: "registry:block",
    dependencies: ["motion/react", "next-themes"],
    registryDependencies: ["button", "grid", "utils"],
    files: [
      {
        path: "blocks/cta-02/page.tsx",
        target: "app/cta/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-02/components/cta-02.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/cta-02/components/orbiting-circle.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
  },
  {
    name: "cta-03",
    description: "CTA with heading, button, and ripple background.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/cta-03/page.tsx",
        target: "app/cta/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-03/components/cta-03.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/cta-03/components/ripple-bg.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
  },
  {
    name: "pricing-01",
    description: "A pricing section.",
    type: "registry:block",
    dependencies: ["motion/react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/pricing-01/page.tsx",
        target: "app/pricing/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/pricing-01/components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-02",
    description: "A pricing table with a dropdown menu.",
    type: "registry:block",
    dependencies: ["motion/react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/pricing-02/page.tsx",
        target: "app/pricing/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/pricing-02/components/pricing-table.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "footer-01",
    description: "A footer.",
    type: "registry:block",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "blocks/footer-01/page.tsx",
        target: "app/footer/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/footer-01/components/footer.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer-01/components/theme-toggler.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
  },
]
