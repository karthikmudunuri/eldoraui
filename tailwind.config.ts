import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { fontFamily } from "tailwindcss/defaultTheme";

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    data: {
      mobile: 'mobile~="true"',
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      
      colors: {
        bg: {
          DEFAULT: "hsl(var(--color-bg))",
          inverse: "hsl(var(--color-bg-inverse))",
          surface: "hsl(var(--color-bg-surface))",
          muted: "hsl(var(--color-bg-muted))",
          disabled: "hsl(var(--color-bg-disabled))",
          overlay: "hsl(var(--color-bg-overlay))",
          tooltip: "hsl(var(--color-bg-tooltip))",
          neutral: {
            DEFAULT: "hsl(var(--color-bg-neutral))",
            hover: "hsl(var(--color-bg-neutral-hover))",
            active: "hsl(var(--color-bg-neutral-active))",
          },
          primary: {
            DEFAULT: "hsl(var(--color-bg-primary))",
            hover: "hsl(var(--color-bg-primary-hover))",
            active: "hsl(var(--color-bg-primary-active))",
          },
          success: {
            DEFAULT: "hsl(var(--color-bg-success))",
            hover: "hsl(var(--color-bg-success-hover))",
            active: "hsl(var(--color-bg-success-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-success-muted))",
              hover: "hsl(var(--color-bg-success-muted-hover))",
              active: "hsl(var(--color-bg-success-muted-active))",
            },
          },
          danger: {
            DEFAULT: "hsl(var(--color-bg-danger))",
            hover: "hsl(var(--color-bg-danger-hover))",
            active: "hsl(var(--color-bg-danger-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-danger-muted))",
              hover: "hsl(var(--color-bg-danger-muted-hover))",
              active: "hsl(var(--color-bg-danger-muted-active))",
            },
          },
          warning: {
            DEFAULT: "hsl(var(--color-bg-warning))",
            hover: "hsl(var(--color-bg-warning-hover))",
            active: "hsl(var(--color-bg-warning-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-warning-muted))",
              hover: "hsl(var(--color-bg-warning-muted-hover))",
              active: "hsl(var(--color-bg-warning-muted-active))",
            },
          },
          accent: {
            DEFAULT: "hsl(var(--color-bg-accent))",
            hover: "hsl(var(--color-bg-accent-hover))",
            active: "hsl(var(--color-bg-accent-active))",
            muted: {
              DEFAULT: "hsl(var(--color-bg-accent-muted))",
              hover: "hsl(var(--color-bg-accent-muted-hover))",
              active: "hsl(var(--color-bg-accent-muted-active))",
            },
          },
        },
        fg: {
          DEFAULT: "hsl(var(--color-fg))",
          muted: {
            DEFAULT: "hsl(var(--color-fg-muted))",
            inverse: "hsl(var(--color-fg-muted-inverse))",
          },
          inverse: "hsl(var(--color-fg-inverse))",
          disabled: "hsl(var(--color-fg-disabled))",
          link: {
            DEFAULT: "hsl(var(--color-fg-link))",
            hover: "hsl(var(--color-fg-link-hover))",
            active: "hsl(var(--color-fg-link-active))",
            visited: "hsl(var(--color-fg-link-visited))",
          },
          accent: "hsl(var(--color-fg-accent))",
          success: "hsl(var(--color-fg-success))",
          warning: "hsl(var(--color-fg-warning))",
          danger: "hsl(var(--color-fg-danger))",
          info: "hsl(var(--color-fg-info))",
          onAccent: "hsl(var(--color-fg-onAccent))",
          onNeutral: "hsl(var(--color-fg-onNeutral))",
          onPrimary: "hsl(var(--color-fg-onPrimary))",
          onSuccess: "hsl(var(--color-fg-onSuccess))",
          onMutedSuccess: "hsl(var(--color-fg-onMutedSuccess))",
          onDanger: "hsl(var(--color-fg-onDanger))",
          onMutedDanger: "hsl(var(--color-fg-onMutedDanger))",
          onWarning: "hsl(var(--color-fg-onWarning))",
          onMutedWarning: "hsl(var(--color-fg-onMutedWarning))",
          onTooltip: "hsl(var(--color-fg-onTooltip))",
        },
        border: {
          DEFAULT: "hsl(var(--color-border))",
          field: "hsl(var(--color-border-field))",
          control: "hsl(var(--color-border-control))",
          hover: "hsl(var(--color-border-hover))",
          active: "hsl(var(--color-border-active))",
          disabled: "hsl(var(--color-border-disabled))",
          danger: "hsl(var(--color-border-danger))",
          success: "hsl(var(--color-border-success))",
          warning: "hsl(var(--color-border-warning))",
          info: "hsl(var(--color-border-info))",
          secondary: "hsl(var(--color-border-secondary))",
          focus: "hsl(var(--color-border-focus))",
          inverse: "hsl(var(--color-border-inverse))",
        },
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.32,0.72,0,1)",
      },
      transitionDuration: {
        "3000": "3000ms",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(108deg, rgba(8,148,255,1) 0%, rgba(255,46,84,1) 70%, rgba(255,144,4,1) 100%)",
        // gradient: "linear-gradient(108deg,#0894FF,#C959DD 34%,#FF2E54 68%,#FF9004)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", ...fontFamily.sans],
        josephin: ["var(--font-josephin)", ...fontFamily.sans],
        inter: ['var(--font-inter)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1200": "1200ms",
      },
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "progress-grow": {
          "0%": {
            transform: "scaleX(0.01)",
          },
          "20%": {
            transform: "scaleX(0.1)",
          },
          "30%": {
            transform: "scaleX(0.6)",
          },
          "40%,50%": {
            transform: "scaleX(0.9)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        "progress-pulse": {
          "0%": {
            "mask-position": "200% center",
          },
          "100%": {
            "mask-position": "0% center",
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },  
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fade-in': 'fade-in 1s ease-in-out forwards',
        'slide-in': 'slide-in 1s ease-in-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "progress-indeterminate":
          "progress-grow var(--progress-duration) 1 both normal, progress-pulse 1s ease var(--progress-duration) infinite normal none running",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transitionOpacity: ['group-hover'],
    },
  },
  plugins: [require("tailwindcss-animate"),
     require("tailwindcss-react-aria-components"),
     addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    ],
} satisfies Config;

export default withTV(config);
