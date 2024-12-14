import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "dynamicsquare",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/dynamicsquare.tsx"],
  },
  {
    name: "features",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/features.tsx"],
  },
  {
    name: "carousel",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/carousel.tsx"],
  },
  {
    name: "hackerbg",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/hackerbg.tsx"],
  },
  {
    name: "plusgrid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
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
    dependencies: ["framer-motion"],
    files: ["ui/link.tsx"],
  },
  {
    name: "swirl",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/swirlbg.tsx"],
  },
  {
    name: "worldmap",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/worldmap.tsx"],
  },
  {
    name: "featurefour",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/featurefour.tsx"],
  },
  {
    name: "animatedcard",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/animatedcard.tsx"],
  },
  {
    name: "factalgrid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/factalgrid.tsx"],
  },
  {
    name: "wrapcontainer",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/wrapanimationcontainer.tsx"],
  },
  {
    name: "tweetgrid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/tweetgrid.tsx"],
  },
  {
    name: "signature",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/signature.tsx"],
  },
  {
    name: "codesnippet",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/codesnippet.tsx"],
  },
  {
    name: "novatrix",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/novatrix.tsx"],
  },
  {
    name: "fadedown",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/fadedown.tsx"],
  },
  {
    name: "fadein",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/fadein.tsx"],
  },
  {
    name: "fadeup",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/fadeup.tsx"],
  },
  {
    name: "blurin",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/blurin.tsx"],
  },
  {
    name: "gradualspacing",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/gradualspacing.tsx"],
  },
  {
    name: "letterpullup",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/letterpullup.tsx"],
  },
  {
    name: "morphingtext",
    type: "registry:ui",
    dependencies: ["framer-motion"],
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
    dependencies: ["framer-motion"],
    files: ["eldoraui/multidirectionslide.tsx"],
  },
  {
    name: "scrollbasedvelocity",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/scrollbasedvelocity.tsx"],
  },
  {
    name: "seperateaway",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/seperateaway.tsx"],
  },
  {
    name: "wavytext",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/wavytext.tsx"],
  },
  {
    name: "wordpullup",
    type: "registry:ui",
    dependencies: ["framer-motion"],
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
    dependencies: ["lucide-react"],
    files: ["eldoraui/integrations.tsx"],
  },
  {
    name: "staticstepper",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["eldoraui/staticstepper.tsx"],
  },
  {
    name: "bentogrid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/bentocard.tsx"],
  },
  {
    name: "cardcomment",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/animatedcardcomment.tsx"],
  },
  {
    name: "ledcard",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/animatedledcard.tsx"],
  },
  {
    name: "hoverme",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/hoverme.tsx"],
  },
  {
    name: "gitstarbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/gitstarbutton.tsx"],
  },
  {
    name: "shimmerbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/shimmerbutton.tsx"],
  },
  {
    name: "neubutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/neubutton.tsx"],
  },
  {
    name: "colorchangingbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/colorchangingbutton.tsx"],
  },
  {
    name: "spotlightbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/spotlightbutton.tsx"],
  },
  {
    name: "motionbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/motionbutton.tsx"],
  },
  {
    name: "shinybutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/shinybutton.tsx"],
  },
  {
    name: "animatedborderbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/animatedborderbutton.tsx"],
  },
  {
    name: "hoverupbutton",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/hoverupbutton.tsx"],
  },
  {
    name: "header",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/header.tsx"],
  },
  {
    name: "testimonalslider",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/testimonalslider.tsx"],
  },
  {
    name: "cobe",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/cobeglobe.jsx"],
  },
  {
    name: "cobedraggable",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/cobedraggable.jsx"],
  },
  {
    name: "cobeautodraggable",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/cobeautodraggable.jsx"],
  },
  {
    name: "coberotatetolocation",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/coberotatetolocation.jsx"],
  },
  {
    name: "cobescaled",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/cobescaled.jsx"],
  },
  {
    name: "testimonals",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/testimonals.tsx"],
  },

  {
    name: "keyboard",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/keyboard.tsx"],
  },
  {
    name: "sparklestitle",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/sparklestitle.tsx"],
  },
  {
    name: "logocluster",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/logocluster.tsx"],
  },
  {
    name: "map",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["eldoraui/map.tsx"],
  },
  {
    name: "backgroundlight",
    type: "registry:ui",
    files: ["eldoraui/backgroundlight.tsx"],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              "background-light": "background-light 60s linear infinite",
            },
            keyframes: {
              "background-light": {
                from: {
                  backgroundPosition: "50% 50%, 50% 50%",
                },
                to: {
                  backgroundPosition: "350% 50%, 350% 50%",
                },
              },
            },
          },
        },
      },
    },
  },
];
