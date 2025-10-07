"use client"

import type React from "react"
import { ChevronRight } from "lucide-react"

interface AnimatedShinyButtonProps {
  children: React.ReactNode
  className?: string
  url?: string
}

export function AnimatedShinyButton({
  children,
  className = "",
  url,
}: AnimatedShinyButtonProps) {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&display=swap");

        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }

        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        .shiny-cta,
        .shiny-cta-link {
          --shiny-cta-bg: #000000;
          --shiny-cta-bg-subtle: #1a1818;
          --shiny-cta-fg: #ffffff;
          --shiny-cta-highlight: #67e8f9;
          --shiny-cta-highlight-subtle: #06b6d4;
          --animation: gradient-angle linear infinite;
          --duration: 3s;
          --shadow-size: 2px;
          --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

          isolation: isolate;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          outline-offset: 4px;
          padding: 0.75rem 1.5rem;
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          line-height: 1.2;
          font-weight: 500;
          border: 1px solid transparent;
          border-radius: 0.5rem;
          color: var(--shiny-cta-fg);
          background:
            linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg))
              padding-box,
            conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                transparent,
                var(--shiny-cta-highlight) var(--gradient-percent),
                var(--gradient-shine) calc(var(--gradient-percent) * 2),
                var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
                transparent calc(var(--gradient-percent) * 4)
              )
              border-box;
          box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
          transition: var(--transition);
          transition-property:
            --gradient-angle-offset, --gradient-percent, --gradient-shine;
        }

        /* Link-specific styles */
        .shiny-cta-link {
          display: inline-block;
          text-decoration: none;
        }

        .shiny-cta::before,
        .shiny-cta::after,
        .shiny-cta span::before,
        .shiny-cta-link::before,
        .shiny-cta-link::after,
        .shiny-cta-link span::before {
          content: "";
          pointer-events: none;
          position: absolute;
          inset-inline-start: 50%;
          inset-block-start: 50%;
          translate: -50% -50%;
          z-index: -1;
        }

        .shiny-cta:active,
        .shiny-cta-link:active {
          translate: 0 1px;
        }

        /* Dots pattern */
        .shiny-cta::before,
        .shiny-cta-link::before {
          --size: calc(100% - var(--shadow-size) * 3);
          --position: 2px;
          --space: calc(var(--position) * 2);
          width: var(--size);
          height: var(--size);
          background: radial-gradient(
              circle at var(--position) var(--position),
              white calc(var(--position) / 4),
              transparent 0
            )
            padding-box;
          background-size: var(--space) var(--space);
          background-repeat: space;
          mask-image: conic-gradient(
            from calc(var(--gradient-angle) + 45deg),
            black,
            transparent 10% 90%,
            black
          );
          border-radius: 0.5rem;
          opacity: 0.4;
          z-index: -1;
        }

        /* Inner shimmer */
        .shiny-cta::after,
        .shiny-cta-link::after {
          --animation: shimmer linear infinite;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(
            -50deg,
            transparent,
            var(--shiny-cta-highlight),
            transparent
          );
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: 0.6;
        }

        .shiny-cta span,
        .shiny-cta-link span {
          z-index: 1;
        }

        .shiny-cta span::before,
        .shiny-cta-link span::before {
          --size: calc(100% + 1rem);
          width: var(--size);
          height: var(--size);
          box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
          opacity: 0;
          transition: opacity var(--transition);
          animation: calc(var(--duration) * 1.5) breathe linear infinite;
        }

        /* Animate */
        .shiny-cta,
        .shiny-cta::before,
        .shiny-cta::after,
        .shiny-cta-link,
        .shiny-cta-link::before,
        .shiny-cta-link::after {
          animation:
            var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
        }

        .shiny-cta:is(:hover, :focus-visible),
        .shiny-cta-link:is(:hover, :focus-visible) {
          --gradient-percent: 20%;
          --gradient-angle-offset: 95deg;
          --gradient-shine: var(--shiny-cta-highlight-subtle);
        }

        .shiny-cta:is(:hover, :focus-visible),
        .shiny-cta:is(:hover, :focus-visible)::before,
        .shiny-cta:is(:hover, :focus-visible)::after,
        .shiny-cta-link:is(:hover, :focus-visible),
        .shiny-cta-link:is(:hover, :focus-visible)::before,
        .shiny-cta-link:is(:hover, :focus-visible)::after {
          animation-play-state: running;
        }

        .shiny-cta:is(:hover, :focus-visible) span::before,
        .shiny-cta-link:is(:hover, :focus-visible) span::before {
          opacity: 1;
        }

        @keyframes gradient-angle {
          to {
            --gradient-angle: 360deg;
          }
        }

        @keyframes shimmer {
          to {
            rotate: 360deg;
          }
        }

        @keyframes breathe {
          from,
          to {
            scale: 1;
          }
          50% {
            scale: 1.2;
          }
        }

        /* Light theme overrides */
        @media (prefers-color-scheme: light) {
          .shiny-cta,
          .shiny-cta-link {
            --shiny-cta-bg: #ffffff;
            --shiny-cta-bg-subtle: #f0f0f0;
            --shiny-cta-fg: #000000;
            --shiny-cta-highlight: #06b6d4;
            --shiny-cta-highlight-subtle: #0891b2;
          }
        }
      `}</style>

      {url ? (
        <a href={url} className={`shiny-cta-link group ${className}`}>
          <span className="flex items-center">
            {children}
            <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </span>
        </a>
      ) : (
        <button className={`shiny-cta group ${className}`}>
          <span className="flex items-center">
            {children}
            <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </span>
        </button>
      )}
    </>
  )
}
