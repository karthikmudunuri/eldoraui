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
      href: "/docs/templates/saas",
      event: "header_cta_clicked",
      label: "New",
    },
    {
      title: "Blog",
      href: "/blog",
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
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
       
      ],
    },
    {
      title: "Templates",
      items: [

        {
          title: "Saas Marketing",
          href: `/docs/templates/saas`,
          items: [],
          label: "New",
          paid: true,
          event: "template_portfolio_clicked",
        },
        {
          title: "Dev portfolio",
          href: `/docs/templates/devportfolio`,
          items: [],
          label: "",
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
        },
        {
          title: "Bento grid",
          href: `/docs/components/bentogrid`,
          items: [],
        },
        {
          title: "Features",
          href: `/docs/components/features`,
          items: [],
        },
        {
          title: "Testimonals",
          href: `/docs/components/testimonals`,
          items: [],
         
          
        },
        {
          title: "Logo Cloud",
          href: `/docs/components/logocloud`,
          items: [],
         
        },
        {
          title: "Gradient pricing",
          href: `/docs/components/gradientpricing`,
          items: [],
          
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
          
        },
        {
          title: "Dynamic Square",
          href: `/docs/components/dynamicsquare`,
          items: [],
          
        },
        {
          title: "Code Snippet",
          href: `/docs/components/codesnippet`,
          items: [],
        },
        {
          title: "Signature",
          href: `/docs/components/signature`,
          items: [],
        },
        {
          title: "Static Stepper",
          href: `/docs/components/staticstepper`,
          items: [],
        },
        {
          title: "Feature Four",
          href: `/docs/components/featurefour`,
          items: [],
        },
        {
          title: "Animated card",
          href: `/docs/components/animatedcard`,
          items: [],
        },
        {
          title: "Tweet Grid",
          href: `/docs/components/tweetgrid`,
          items: [],
        },
        {
          title: "Wrap Container",
          href: `/docs/components/wrapcontainer`,
          items: [],
        },
        {
          title: "Sphere Animation",
          href: `/docs/components/sphereanimation`,
          items: [],
          label: "",
        },
        {
          title: "Scroll progress",
          href: `/docs/components/scrollprogress`,
          items: [],
        },
        {
          title: "Scratch To Reveal",
          href: `/docs/components/scratchtoreveal`,
          items: [],
        },
        {
          title: "Scale Slider",
          href: `/docs/components/scaleslider`,
          items: [],
        },
       
        {
          title: "Animated Card comment",
          href: `/docs/components/animatedcardcomment`,
          items: [],
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
        },
        {
          title: "Git Star Button",
          href: `/docs/components/gitstarbutton`,
          items: [],
        },
        {
          title: "Interactive Button",
          href: `/docs/components/interactivebutton`,
          items: [],
        },
        {
          title: "Shimmer Button",
          href: `/docs/components/shimmerbutton`,
          items: [],
        },
        {
          title: "Spotlight Button",
          href: `/docs/components/spotlightbutton`,
          items: [],
        },
        {
          title: "Animated Border Button",
          href: `/docs/components/animatedborderbutton`,
          items: [],
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
          label: "",
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
