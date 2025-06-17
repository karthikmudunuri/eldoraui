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
    title: "testimonal carousel",
    description: "A testimonal carousel.",
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
    description: "An Hacker like background.",
    files: [
      {
        path: "registry/eldoraui/hackerbg.tsx",
        type: "registry:ui",
        target: "components/eldoraui/hackerbg.tsx",
      },
    ],
  },
  {
    name: "morphingtext",
    type: "registry:ui",
    title: "Morphing Text",
    description: "A dynamic text morphing component for Eldora UI.",
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
    dependencies: ["framer-motion"],
    files: [
      {
        path: "registry/eldoraui/scrollprogress.tsx",
        type: "registry:ui",
        target: "components/eldoraui/scrollprogress.tsx",
      },
    ],
  },
   {
    name: "scrollbasedvelocity",
    type: "registry:ui",
    title: "scrollbasedvelocity",
    description: "Text animation that changes speed based on scroll position.",
    dependencies: ["framer-motion","clsx"],
    files: [
      {
        path: "registry/eldoraui/scrollbasedvelocity.tsx",
        type: "registry:ui",
        target: "components/eldoraui/scrollbasedvelocity.tsx",
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
    description: "A layout used to showcase the features of a product in a simple and elegant way.",
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
    description: "A layout used to showcase the features of a product in a simple and elegant way.",
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
      "SVG sphere animation using animejs.",
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
      "A card that displays a tweet with the author's name, handle, and profile picture.",
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
      "Component through which we can have digital signatures.",
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
      "A codesnippet from which we can copy commands.",
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
    description: "A 3d shader background using vertex and fragment shader.",
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
    description: "Text animation where the text fades down into view.",
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
    description: "Text animation that smoothly fades text into visibility.",
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
      "An infinite scrolling component.",
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
      "Text animation where the text fades down into view.",
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
      "An animated text component that blurs in the text.",
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
      "Text animation that increases letter spacing gradually.",
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
      "Text animation where each letter pulls up into place.",
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
    description: "An animated scale slider component.",
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
      "Text animation where text slides in from multiple directions.",
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
      "Text animation where letters move apart from each other.",
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
      "Text animation where the text moves in a wavy motion.",
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
      'Text animation where entire words pull up into view.',
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
    description: "A visually engaging button component that responds to hover with dynamic transitions, adapting smoothly between light and dark modes for enhanced user interactivity.",
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
      "programmatically generated icons using marquee and fade effects.",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["marquee"],
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
      "A Simple way to show the steps for users.",
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
      "A modern grid layout designed for visually appealing and organized feature showcases.",
    dependencies: ["clsx","framer-motion"],
    registryDependencies: ["keyboard","logocluster","map"],
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
      "Animated card layout for messages",
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
    description: "An animated hover button.",
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
    description: "An animated button to showcase Github stars.",
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
    description: "A shimmer button component with dynamic styles.",
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
      "Button which Highlights while hovering by a spotlight.",
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
      "A button with a shimmering light which travels around the perimeter.",
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
    description: "These components are used to build the header of the website",
    dependencies: ["framer-motion", "@headlessui/react", "@heroicons/react"],
    registryDependencies: ["link","plusgrid"],
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
    description: "Testimonals slider",
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
      "A globe animation which is Interactive and customizable.",
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
    description: "Testimonal marquee",
    dependencies: ["framer-motion", "lucide-react"],
    registryDependencies: ["marquee"],
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
    description: "A container component that applies a warp animation effect to its children.",
    dependencies: ["clsx","framer-motion"],
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
    dependencies: ["framer-motion"],
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