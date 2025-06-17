import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "dynamicsquare",
    type: "registry:ui",
    title: "Dynamic Square",
    description:
      "A layout used to showcase the features of a product in a simple and elegant way.",
    files: [
      {
        path: "registry/eldoraui/dynamicsquare.tsx",
        type: "registry:ui",
        target: "components/eldoraui/dynamicsquare.tsx",
      },
    ],
  },
  {
    name: "features",
    type: "registry:ui",
    title: "Features",
    description: "A layout used to showcase the features of a product in a simple and elegant way.",
    dependencies: ["framer-motion", "lucide-react", "@radix-ui/react-accordion"],
    files: [
      {
        path: "registry/eldoraui/features.tsx",
        type: "registry:ui",
        target: "components/eldoraui/features.tsx",
      },
    ],
  },
  {
    name: "carousel",
    type: "registry:ui",
    title: "carousel",
    description: "A card with a time warping background effect.",
    dependencies: ["embla-carousel-react", "lucide-react"],
    files: [
      {
        path: "registry/eldoraui/carousel.tsx",
        type: "registry:ui",
        target: "components/eldoraui/carousel.tsx",
      },
    ],
  },
  {
    name: "hackerbg",
    type: "registry:ui",
    title: "hackerbg",
    description: "A text component with a moving line shadow.",
    files: [
      {
        path: "registry/eldoraui/hackerbg.tsx",
        type: "registry:ui",
        target: "components/eldoraui/hackerbg.tsx",
      },
    ],
  },
  {
    name: "morphing-text",
    type: "registry:ui",
    title: "Morphing Text",
    description: "A dynamic text morphing component for Magic UI.",
    files: [
      {
        path: "registry/eldoraui/morphingtext.tsx",
        type: "registry:ui",
        target: "components/eldoraui/morphingtext.tsx",
      },
    ],
  },
  {
    name: "scrollprogress",
    type: "registry:ui",
    title: "Scroll Progress",
    description: "Animated Scroll Progress for your pages",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/scrollprogress.tsx",
        type: "registry:ui",
        target: "components/eldoraui/scrollprogress.tsx",
      },
    ],
  },
  {
    name: "plusgrid",
    type: "registry:ui",
    title: "plusgrid",
    description:
      "A interactive component that enables zooming into images, videos and other elements.",
    files: [
      {
        path: "registry/eldoraui/plusgrid.tsx",
        type: "registry:ui",
        target: "components/eldoraui/plusgrid.tsx",
      },
    ],
  },
  {
    name: "link",
    type: "registry:ui",
    title: "link",
    description:
      "A component that displays a pointer when hovering over an element",
    dependencies: ["@headlessui/react"],
    files: [
      {
        path: "registry/eldoraui/link.tsx",
        type: "registry:ui",
        target: "components/eldoraui/link.tsx",
      },
    ],
  },
  {
    name: "featurefour",
    type: "registry:ui",
    title: "featurefour",
    description: "A beautiful neon card effect",
    files: [
      {
        path: "registry/eldoraui/featurefour.tsx",
        type: "registry:ui",
        target: "components/eldoraui/featurefour.tsx",
      },
    ],
  },
  {
    name: "animatedcard",
    type: "registry:ui",
    title: "animatedcard",
    description: "A meteor shower effect.",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "registry/eldoraui/animatedcard.tsx",
        type: "registry:ui",
        target: "components/eldoraui/animatedcard.tsx",
      },
    ],
  },
  {
    name: "sphereanimation",
    type: "registry:ui",
    title: "sphereanimation",
    description:
      "A background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
    dependencies: ["animejs"],
    files: [
      {
        path: "registry/eldoraui/sphere-animation.tsx",
        type: "registry:ui",
        target: "components/eldoraui/sphere-animation.tsx",
      },
    ],
  },
  {
    name: "tweetgrid",
    type: "registry:ui",
    title: "tweetgrid",
    description:
      "A interactive background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
    dependencies: ["react-tweet"],
    files: [
      {
        path: "registry/eldoraui/tweetgrid.tsx",
        type: "registry:ui",
        target: "components/eldoraui/tweetgrid.tsx",
      },
    ],
  },
  {
    name: "signature",
    type: "registry:ui",
    title: "signature",
    description:
      "A background dot pattern made with SVGs, fully customizable using Tailwind CSS.",
    dependencies: ["@uiw/react-signature", "lucide-react"],
    files: [
      {
        path: "registry/eldoraui/signature.tsx",
        type: "registry:ui",
        target: "components/eldoraui/signature.tsx",
      },
    ],
  },
  {
    name: "codesnippet",
    type: "registry:ui",
    title: "codesnippet",
    description:
      "A flickering grid background made with SVGs, fully customizable using Tailwind CSS.",
    dependencies: ["sooner", "lucide-react"],
    files: [
      {
        path: "registry/eldoraui/codesnippet.tsx",
        type: "registry:ui",
        target: "components/eldoraui/codesnippet.tsx",
      },
    ],
  },
  {
    name: "novatrix",
    type: "registry:ui",
    title: "novatrix",
    description: "A hero video dialog component.",
    dependencies: ["ogl"],
    files: [
      {
        path: "registry/eldoraui/novatrix.tsx",
        type: "registry:ui",
        target: "components/eldoraui/novatrix.tsx",
      },
    ],
  },
  {
    name: "fadedown",
    type: "registry:ui",
    title: "fadedown",
    description: "A component which compares two code snippets.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/fadedown.tsx",
        type: "registry:ui",
        target: "components/eldoraui/fadedown.tsx",
      },
    ],
  },
  {
    name: "fadein",
    type: "registry:ui",
    title: "fadein",
    description: "Copy code to clipboard",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/fadein.tsx",
        type: "registry:ui",
        target: "components/eldoraui/fadein.tsx",
      },
    ],
  },
  {
    name: "marquee",
    type: "registry:ui",
    title: "Marquee",
    description:
      "An infinite scrolling component that can be used to display text, images, or videos.",
    files: [
      {
        path: "registry/eldoraui/marquee.tsx",
        type: "registry:ui",
        target: "components/eldoraui/marquee.tsx",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              marquee: {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(calc(-100% - var(--gap)))" },
              },
              "marquee-vertical": {
                from: { transform: "translateY(0)" },
                to: { transform: "translateY(calc(-100% - var(--gap)))" },
              },
            },
            animation: {
              marquee: "marquee var(--duration) infinite linear",
              "marquee-vertical":
                "marquee-vertical var(--duration) linear infinite",
            },
          },
        },
      },
    },
  },
  {
    name: "fadeup",
    type: "registry:ui",
    title: "fadeup",
    description:
      "An autorotating, interactive, and highly performant globe made using WebGL.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/fadeup.tsx",
        type: "registry:ui",
        target: "components/eldoraui/fadeup.tsx",
      },
    ],
  },
  {
    name: "blurin",
    type: "registry:ui",
    title: "blurin",
    description:
      "A card that displays a tweet with the author's name, handle, and profile picture.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/blurin.tsx",
        type: "registry:ui",
        target: "components/eldoraui/blurin.tsx",
      },
    ],
  },
  {
    name: "gradualspacing",
    type: "registry:ui",
    title: "gradualspacing",
    description:
      "A client-side version of the tweet card that displays a tweet with the author's name, handle, and profile picture.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/gradualspacing.tsx",
        type: "registry:ui",
        target: "components/eldoraui/gradualspacing.tsx",
      },
    ],
  },
  {
    name: "letterpullup",
    type: "registry:ui",
    title: "letterpullup",
    description:
      "Bento grid is a layout used to showcase the features of a product in a simple and elegant way.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/letterpullup.tsx",
        type: "registry:ui",
        target: "components/eldoraui/letterpullup.tsx",
      },
    ],
  },
  {
    name: "scrollprogress",
    type: "registry:ui",
    title: "scrollprogress",
    description:
      "Particles are a fun way to add some visual flair to your website. They can be used to create a sense of depth, movement, and interactivity.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/scrollprogress.tsx",
        type: "registry:ui",
        target: "components/eldoraui/scrollprogress.tsx",
      },
    ],
  },
  {
    name: "scaleslider",
    type: "registry:ui",
    title: "scaleslider",
    description: "Animate numbers to count up or down to a target number",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "registry/eldoraui/scaleslider.tsx",
        type: "registry:ui",
        target: "components/eldoraui/scaleslider.tsx",
      },
    ],
  },
  {
    name: "multidirectionslide",
    type: "registry:ui",
    title: "multidirectionslide",
    description:
      "A list that animates each item in sequence with a delay. Used to showcase notifications or events on your landing page.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/multidirectionslide.tsx",
        type: "registry:ui",
        target: "components/eldoraui/multidirectionslide.tsx",
      },
    ],
  },
  {
    name: "seperateaway",
    type: "registry:ui",
    title: "seperateaway",
    description:
      "A animated background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/seperateaway.tsx",
        type: "registry:ui",
        target: "components/eldoraui/seperateaway.tsx",
      },
    ],
  },
  {
    name: "wavytext",
    type: "registry:ui",
    title: "wavytext",
    description:
      "An animated beam of light which travels along the border of its container.",
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/wavytext.tsx",
        type: "registry:ui",
        target: "components/eldoraui/wavytext.tsx",
      },
    ],
  },
  {
    name: "wordpullup",
    type: "registry:ui",
    title: "wordpullup",
    description:
      'An animated beam of light which travels along a path. Useful for showcasing the "integration" features of a website.',
    dependencies: ["framer-motion", "clsx"],
    files: [
      {
        path: "registry/eldoraui/wordpullup.tsx",
        type: "registry:ui",
        target: "components/eldoraui/wordpullup.tsx",
      },
    ],
  },
  {
    name: "interactivebutton",
    type: "registry:ui",
    title: "interactivebutton",
    description: "Fade in text as you scroll down the page.",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "registry/eldoraui/interactivebutton.tsx",
        type: "registry:ui",
        target: "components/eldoraui/interactivebutton.tsx",
      },
    ],
  },
  {
    name: "integrations",
    type: "registry:ui",
    title: "integrations",
    description:
      "A text animation that scrambles letters before revealing the final text.",
    dependencies: ["lucide-react", "framer-motion"],
    files: [
      {
        path: "registry/eldoraui/integrations.tsx",
        type: "registry:ui",
        target: "components/eldoraui/integrations.tsx",
      },
    ],
  },
  {
    name: "staticstepper",
    type: "registry:ui",
    title: "staticstepper",
    description:
      "An animated gradient background which transitions between colors for text.",
    files: [
      {
        path: "registry/eldoraui/staticstepper.tsx",
        type: "registry:ui",
        target: "components/eldoraui/staticstepper.tsx",
      },
    ],
  },
  {
    name: "bentogrid",
    type: "registry:ui",
    title: "bentogrid",
    description:
      "A collection of circles which move in orbit along a circular path",
    registryDependencies:["https://eldoraui.site/r/keyboard","https://eldoraui.site/r/logocluster","https://eldoraui.site/r/map"],
    files: [
      {
        path: "registry/eldoraui/bentocard.tsx",
        type: "registry:ui",
        target: "components/eldoraui/bentocard.tsx",
      },
    ],
  },
  {
    name: "cardcomment",
    type: "registry:ui",
    title: "cardcomment",
    description:
      "An implementation of the MacOS dock using react + tailwindcss + motion",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/animatedcardcomment.tsx",
        type: "registry:ui",
        target: "components/eldoraui/animatedcardcomment.tsx",
      },
    ],
  },
  {
    name: "hoverme",
    type: "registry:ui",
    title: "hoverme",
    description: "A vertical rotation of words",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/hoverme.tsx",
        type: "registry:ui",
        target: "components/eldoraui/hoverme.tsx",
      },
    ],
  },
  {
    name: "gitstarbutton",
    type: "registry:ui",
    title: "gitstarbutton",
    description: "Overlapping circles of avatars.",
    files: [
      {
        path: "registry/eldoraui/gitstarbutton.tsx",
        type: "registry:ui",
        target: "components/eldoraui/gitstarbutton.tsx",
      },
    ],
  },
  {
    name: "shimmerbutton",
    type: "registry:ui",
    title: "shimmerbutton",
    description: "Characters appearing in typed animation",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/shimmerbutton.tsx",
        type: "registry:ui",
        target: "components/eldoraui/shimmerbutton.tsx",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              "shine-infinite": "shineInfinite 2s ease-in-out infinite",
            },
            keyframes: {
              shineInfinite: {
                "0%": { transform: "skew(-12deg) translateX(-100%)" },
                "100%": { transform: "skew(-12deg) translateX(100%)" },
              },
            },
          },
        },
      },
    },
  },
  {
    name: "spotlightbutton",
    type: "registry:ui",
    title: "spotlightbutton",
    description:
      "A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/spotlightbutton.tsx",
        type: "registry:ui",
        target: "components/eldoraui/spotlightbutton.tsx",
      },
    ],
  },
  {
    name: "animatedborderbutton",
    type: "registry:ui",
    title: "animatedborderbuttont",
    description:
      "The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/animatedborderbutton.tsx",
        type: "registry:ui",
        target: "components/eldoraui/animatedborderbutton.tsx",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              flip: "flip 6s infinite steps(2, end)",
              rotate: "rotate 3s linear infinite both",
            },
            keyframes: {
              flip: {
                to: {
                  transform: "rotate(360deg)",
                },
              },
              rotate: {
                to: {
                  transform: "rotate(90deg)",
                },
              },
            },
          },
        },
      },
    },
  },
  {
    name: "header",
    type: "registry:ui",
    title: "header",
    description: "Text flipping character animation",
    dependencies: ["framer-motion", "@headlessui/react", "@heroicons/react"],
    files: [
      {
        path: "registry/eldoraui/header.tsx",
        type: "registry:ui",
        target: "components/eldoraui/header.tsx",
      },
    ],
  },
  {
    name: "testimonalslider",
    type: "registry:ui",
    title: "testimonalslider",
    description: "An interactive 3D tag cloud component",
    dependencies: [],
    files: [
      {
        path: "registry/eldoraui/testimonalslider.tsx",
        type: "registry:ui",
        target: "components/eldoraui/testimonalslider.tsx",
      },
    ],
  },
  {
    name: "cobe",
    type: "registry:ui",
    title: "cobe",
    description:
      "A text animation component that animates text using a variety of different animations.",
    dependencies: ["cobe"],
    files: [
      {
        path: "registry/eldoraui/cobe.tsx",
        type: "registry:ui",
        target: "components/eldoraui/cobe.tsx",
      },
    ],
  },
  {
    name: "testimonals",
    type: "registry:ui",
    title: "testimonals",
    description: "Scrolling text whose speed changes based on scroll speed",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: "registry/eldoraui/testimonals.tsx",
        type: "registry:ui",
        target: "components/eldoraui/testimonals.tsx",
      },
    ],
  },
  {
    name: "warpcontainer",
    type: "registry:ui",
    title: "warpcontainer",
    description: "A card with a time warping background effect.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/wrapanimationcontainer.tsx",
        type: "registry:ui",
        target: "components/eldoraui/wrapanimationcontainer.tsx",
      },
    ],
  },
  {
    name: "scratchtoreveal",
    type: "registry:ui",
    title: "Scratch To Reveal",
    description:
      "The ScratchToReveal component creates an interactive scratch-off effect with customizable dimensions and animations, revealing hidden content beneath.",
    dependencies: ["motion"],
    files: [
      {
        path: "registry/eldoraui/scratchtoreveal.tsx",
        type: "registry:ui",
        target: "components/eldoraui/scratchtoreveal.tsx",
      },
    ],
  },
  {
    name: "keyboard",
    type: "registry:ui",
    title: "keyboard",
    description:
      "A shiny button component with dynamic styles in the dark mode or light mode.",
    dependencies: ["motion","clsx"],
    files: [
      {
        path: "registry/eldoraui/keyboard.tsx",
        type: "registry:ui",
        target: "components/eldoraui/keyboard.tsx",
      },
    ],
  },
  {
    name: "logocluster",
    type: "registry:ui",
    title: "logocluster",
    description: "Sliding box animation that reveals text behind it.",
    dependencies: ["motion","clsx"],
    files: [
      {
        path: "registry/eldoraui/logocluster.tsx",
        type: "registry:ui",
        target: "components/eldoraui/logocluster.tsx",
      },
    ],
  },
  {
    name: "map",
    type: "registry:ui",
    title: "map",
    description: "Shine border is an animated background border effect.",
    dependencies: ["motion","clsx"],
    files: [
      {
        path: "registry/eldoraui/map.tsx",
        type: "registry:ui",
        target: "components/eldoraui/map.tsx",
      },
    ],
  },
]