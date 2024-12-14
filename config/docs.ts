import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Templates",
      href: "/docs/templates/devportfolio",
      event: "header_cta_clicked",
      label: "New",
    }
   
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "Next.js",
              href: `/docs/installation/next`,
              items: [],
            },
            {
              title: "Vite",
              href: `/docs/installation/vite`,
              items: [],
            },
            {
              title: "Remix",
              href: `/docs/installation/remix`,
              items: [],
            },
            {
              title: "Astro",
              href: `/docs/installation/astro`,
              items: [],
            },
            {
              title: "Laravel",
              href: `/docs/installation/laravel`,
              items: [],
            },
            {
              title: "Gatsby",
              href: `/docs/installation/gatsby`,
              items: [],
            },
            {
              title: "Manual",
              href: `/docs/installation/manual`,
              items: [],
            },
          ],
        },
       
      ],
    },
    {
      title: "Templates",
      items: [
       
        {
          title: "Dev portfolio",
          href: `/docs/templates/devportfolio`,
          items: [],
          label: "New",
          event: "template_saas_clicked",
        },
        {
          title: "Portfolio",
          href: `/docs/templates/portfolio`,
          items: [],
          label: "",
          event: "template_portfolio_clicked",
        },
        {
          title: "Saas",
          href: `/`,
          items: [],
          disabled: true,
          label: "Coming soon",
          event: "template_portfolio_clicked",
        },
        {
          title: "Startup",
          href: `/`,
          items: [],
          disabled: true,
          label: "Coming soon",
          event: "template_portfolio_clicked",
        },
      ],
    },
    {
      title: "Sections",
      items: [
        {
          title: "Header",
          href: `/docs/components/header`,
          items: [],
          label: "New",
        },
        {
          title: "Bento grid",
          href: `/docs/components/bentogrid`,
          items: [],
          label: "New",
        },
        {
          title: "Features",
          href: `/docs/components/features`,
          items: [],
          label: "New",
        },
        {
          title: "Testimonals",
          href: `/docs/components/testimonals`,
          items: [],
          no: 2,
          label: "New",
          
        },
        {
          title: "Logo Cloud",
          href: `/docs/components/logocloud`,
          items: [],
          label: "New",
          no: 2,
        },
        {
          title: "Gradient pricing",
          href: `/docs/components/gradientpricing`,
          items: [],
          label: "New",
          no: 2,
        },
        
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Testimonal Slider",
          href: `/docs/components/testimonalslider`,
          items: [],
          label: "New",
        },
       
        {
          title: "Cobe globe",
          href: `/docs/components/cobe-globe`,
          items: [],
        },
        {
          title: "Integrations",
          href: `/docs/components/integrations`,
          items: [],
          label: "New",
        },
        {
          title: "Dynamic Square",
          href: `/docs/components/dynamicsquare`,
          items: [],
          label: "New",
        },
        {
          title: "Code Snippet",
          href: `/docs/components/codesnippet`,
          items: [],
          label: "New",
        },
        {
          title: "Signature",
          href: `/docs/components/signature`,
          items: [],
          label: "New",
        },
        {
          title: "Static Stepper",
          href: `/docs/components/staticstepper`,
          items: [],
          label: "New",
        },
        {
          title: "Feature Four",
          href: `/docs/components/featurefour`,
          items: [],
          label: "New",
        },
        {
          title: "Animated card",
          href: `/docs/components/animatedcard`,
          items: [],
          label: "New",
        },
        {
          title: "Tweet Grid",
          href: `/docs/components/tweetgrid`,
          items: [],
          label: "New",
        },
        {
          title: "Wrap Container",
          href: `/docs/components/wrapcontainer`,
          items: [],
          label: "New",
        },
        {
          title: "Scroll progress",
          href: `/docs/components/scrollprogress`,
          items: [],
          label: "New",
        },
        {
          title: "Scratch To Reveal",
          href: `/docs/components/scratchtoreveal`,
          items: [],
          label: "New",
        },
        {
          title: "Scale Slider",
          href: `/docs/components/scaleslider`,
          items: [],
          label: "New",
        },
       
        {
          title: "Animated Card comment",
          href: `/docs/components/animatedcardcomment`,
          items: [],
          label: "New",
        },
       
        
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Hover me Button",
          href: `/docs/components/hovermebutton`,
          items: [],
          label: "New",
        },
        {
          title: "Git Star Button",
          href: `/docs/components/gitstarbutton`,
          items: [],
          label: "New",
        },
        {
          title: "Interactive Button",
          href: `/docs/components/interactivebutton`,
          items: [],
          label: "New",
        },
        {
          title: "Shimmer Button",
          href: `/docs/components/shimmerbutton`,
          items: [],
          label: "New",
        },
        {
          title: "Color changing Button",
          href: `/docs/components/colorchangingbutton`,
          items: [],
          label: "New",
        },
        {
          title: "Spotlight Button",
          href: `/docs/components/spotlightbutton`,
          items: [],
          label: "New",
        },
        {
          title: "Animated Border Button",
          href: `/docs/components/animatedborderbutton`,
          items: [],
          label: "New",
        },
      
        
      ],
    },
   
    {
      title: "Text Animations",
      items: [
        {
          title: "Blur In",
          href: `/docs/components/blurin`,
          items: [],
        },
        {
          title: "Morphing Text",
          href: `/docs/components/morphingtext`,
          items: [],
          label: "New",
        },
        {
          title: "Fade In",
          href: `/docs/components/fadein`,
          items: [],
        },
        {
          title: "Fade Down",
          href: `/docs/components/fadedown`,
          items: [],
          label: "",
        },
        {
          title: "Fade Up",
          href: `/docs/components/fadeup`,
          items: [],
          label: "",
        },
        {
          title: "Gradual Spacing",
          href: `/docs/components/gradualspacing`,
          items: [],
          label: "",
        },
        {
          title: "Letter Pull Up",
          href: `/docs/components/letterpullup`,
          items: [],
          label: "",
        },
        {
          title: "Multi Directional Slide",
          href: `/docs/components/multidirectionalslide`,
          items: [],
          label: "",
        },
        {
          title: "Scroll Based Velocity",
          href: `/docs/components/scrollbasedvelocity`,
          items: [],
          label: "",
        },
        {
          title: "Seperate Away",
          href: `/docs/components/seperateaway`,
          items: [],
          label: "",
        },
        {
          title: "Wavy Text",
          href: `/docs/components/wavytext`,
          items: [],
          label: "",
        },
        {
          title: "Word Pull Up",
          href: `/docs/components/wordpullup`,
          items: [],
          label: "",
        },
       
      ],
    },
    
    {
      title: "Backgrounds",
      items: [
        {
          title: "Novatrix Background",
          href: `/docs/components/novatrixbg`,
          items: [],
          label: "New",
        },
        {
          title: "Hacker Background",
          href: `/docs/components/hackerbg`,
          items: [],
        },
      ],
    },
  ],
};
