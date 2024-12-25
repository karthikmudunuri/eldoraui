import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "dynamicsquare",
    type: "registry:ui",
    files: ["eldoraui/dynamicsquare.tsx"],
  },
  {
    name: "features",
    type: "registry:ui",
    dependencies: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-accordion",
    ],
    files: ["eldoraui/features.tsx"],
  },
  {
    name: "carousel",
    type: "registry:ui",
    dependencies: ["embla-carousel-react", "lucide-react"],
    files: ["eldoraui/carousel.tsx"],
  },
  {
    name: "hackerbg",
    type: "registry:ui",
    files: ["eldoraui/hackerbg.tsx"],
  },
  {
    name: "plusgrid",
    type: "registry:ui",
    dependencies: ["clsx"],
    files: ["eldoraui/plusgrid.tsx"],
  },
  {
    name: "marquee",
    type: "registry:ui",
    files: ["eldoraui/marquee.tsx"],
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
    name: "link",
    type: "registry:ui",
    dependencies: ["@headlessui/react"],
    files: ["ui/link.tsx"],
  },
  {
    name: "featurefour",
    type: "registry:ui",
    files: ["eldoraui/featurefour.tsx"],
  },
  {
    name: "animatedcard",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["eldoraui/animatedcard.tsx"],
  },
  {
    name: "warpcontainer",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/warpanimationcontainer.tsx"],
  },
  {
    name: "tweetgrid",
    type: "registry:ui",
    dependencies: ["react-tweet"],
    files: ["eldoraui/tweetgrid.tsx"],
  },
  {
    name: "signature",
    type: "registry:ui",
    dependencies: ["@uiw/react-signature", "lucide-react"],
    files: ["eldoraui/signature.tsx"],
  },
  {
    name: "codesnippet",
    type: "registry:ui",
    dependencies: ["sooner", "lucide-react"],
    files: ["eldoraui/codesnippet.tsx"],
  },
  {
    name: "novatrix",
    type: "registry:ui",
    dependencies: ["ogl"],
    files: ["eldoraui/novatrix.tsx"],
  },
  {
    name: "fadedown",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/fadedown.tsx"],
  },
  {
    name: "fadein",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/fadein.tsx"],
  },
  {
    name: "fadeup",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/fadeup.tsx"],
  },
  {
    name: "blurin",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/blurin.tsx"],
  },
  {
    name: "gradualspacing",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/gradualspacing.tsx"],
  },
  {
    name: "letterpullup",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/letterpullup.tsx"],
  },
  {
    name: "morphingtext",
    type: "registry:ui",
    files: ["eldoraui/morphingtext.tsx"],
  },
  {
    name: "scrollprogress",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/scrollprogress.tsx"],
  },
  {
    name: "scaleslider",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/scaleslider.tsx"],
  },
  {
    name: "scratchtoreveal",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/scratchtoreveal.tsx"],
  },
  {
    name: "multidirectionslide",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/multidirectionslide.tsx"],
  },
  {
    name: "scrollbasedvelocity",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/scrollbasedvelocity.tsx"],
  },
  {
    name: "seperateaway",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/seperateaway.tsx"],
  },
  {
    name: "wavytext",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/wavytext.tsx"],
  },
  {
    name: "wordpullup",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/wordpullup.tsx"],
  },
  {
    name: "interactivebutton",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["eldoraui/interactivebutton.tsx"],
  },
  {
    name: "integrations",
    type: "registry:ui",
    dependencies: ["lucide-react", "framer-motion"],
    files: ["eldoraui/integrations.tsx"],
  },
  {
    name: "staticstepper",
    type: "registry:ui",
    files: ["eldoraui/staticstepper.tsx"],
  },
  {
    name: "bentogrid",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/bentocard.tsx"],
  },
  {
    name: "cardcomment",
    type: "registry:ui",
    files: ["eldoraui/animatedcardcomment.tsx"],
  },
  {
    name: "hoverme",
    type: "registry:ui",
    files: ["eldoraui/hoverme.tsx"],
  },
  {
    name: "gitstarbutton",
    type: "registry:ui",
    files: ["eldoraui/gitstarbutton.tsx"],
  },
  {
    name: "shimmerbutton",
    type: "registry:ui",
    files: ["eldoraui/shimmerbutton.tsx"],
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
    name: "colorchangingbutton",
    type: "registry:ui",
    files: ["eldoraui/colorchangingbutton.tsx"],
  },
  {
    name: "spotlightbutton",
    type: "registry:ui",
    files: ["eldoraui/spotlightbutton.tsx"],
  },
  {
    name: "animatedborderbutton",
    type: "registry:ui",
    files: ["eldoraui/animatedborderbutton.tsx"],
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
    dependencies: ["framer-motion", "@headlessui/react", "@heroicons/react"],
    files: ["eldoraui/header.tsx"],
  },
  {
    name: "testimonalslider",
    type: "registry:ui",
    dependencies: ["@headlessui/react"],
    files: ["eldoraui/testimonalslider.tsx"],
  },
  {
    name: "cobe",
    type: "registry:ui",
    dependencies: ["cobe"],
    files: ["eldoraui/cobeglobe.jsx"],
  },
  {
    name: "cobedraggable",
    type: "registry:ui",
    dependencies: ["cobe"],
    files: ["eldoraui/cobedraggable.jsx"],
  },
  {
    name: "cobeautodraggable",
    type: "registry:ui",
    dependencies: ["cobe"],
    files: ["eldoraui/cobeautodraggable.jsx"],
  },
  {
    name: "coberotatetolocation",
    type: "registry:ui",
    dependencies: ["cobe"],
    files: ["eldoraui/coberotatetolocation.jsx"],
  },
  {
    name: "cobescaled",
    type: "registry:ui",
    dependencies: ["cobe"],
    files: ["eldoraui/cobescaled.jsx"],
  },
  {
    name: "testimonals",
    type: "registry:ui",
    dependencies: ["framer-motion", "lucide-react"],
    files: ["eldoraui/testimonals.tsx"],
  },

  {
    name: "keyboard",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/keyboard.tsx"],
  },
  {
    name: "logocluster",
    type: "registry:ui",
    dependencies: ["framer-motion", "clsx"],
    files: ["eldoraui/logocluster.tsx"],
  },
  {
    name: "map",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/map.tsx"],
  },
];
