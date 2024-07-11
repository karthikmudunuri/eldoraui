"use client";

import React from "react";
import { useConfig } from "@/hooks/use-config";
import { useMounted } from "@/lib/hooks/use-mounted";
import type { ThemeMode } from "@/types/theme";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export function ThemeWrapper(props: ThemeWrapperProps) {
  const { children, fallback } = props;
  const { mode, theme } = useConfig();
  const mounted = useMounted();

  function transformHSL(hslString: string) {
    const hslValues = hslString.match(/(\d+)(deg)?,\s*(\d+)%?,\s*(\d+)%/);
    if (hslValues) {
      const [, h, , s, l] = hslValues;
      return `${h} ${s}% ${l}%`;
    }
    return hslString;
  }

  const getCssVars = () => {
    const palettes: ThemeMode["palettes"] = theme[mode].palettes;
    const cssVars: Record<string, string> = {};
    Object.keys(palettes).forEach((paletteName) => {
      const colors = palettes[paletteName as keyof typeof palettes].colors;
      Object.keys(colors).forEach((colorKey) => {
        cssVars[`--color-${paletteName}-${colorKey}`] = transformHSL(
          colors[colorKey as unknown as keyof typeof colors]
        );
      });
    });
    return cssVars;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const styles = {
    ...getCssVars(),
    "--color-bg": "var(--color-neutral-100)",
    "--color-bg-muted": "var(--color-neutral-200)",
    "--color-bg-inverse": "var(--color-neutral-1000)",
    "--color-bg-disabled": "var(--color-neutral-400)",

    "--color-bg-neutral": "var(--color-neutral-300)",
    "--color-bg-neutral-hover": "var(--color-neutral-400)",
    "--color-bg-neutral-active": "var(--color-neutral-500)",

    "--color-bg-primary": "var(--color-neutral-1000)",
    "--color-bg-primary-hover": "var(--color-neutral-900)",
    "--color-bg-primary-active": "var(--color-neutral-800)",

    "--color-bg-success": "var(--color-success-800)",
    "--color-bg-success-hover": "var(--color-success-700)",
    "--color-bg-success-active": "var(--color-success-600)",
    "--color-bg-success-muted": "var(--color-success-300)",
    "--color-bg-success-muted-hover": "var(--color-success-300)",
    "--color-bg-success-muted-active": "var(--color-success-300)",

    "--color-bg-danger": "var(--color-danger-500)",
    "--color-bg-danger-hover": "var(--color-danger-600)",
    "--color-bg-danger-active": "var(--color-danger-700)",
    "--color-bg-danger-muted": "var(--color-danger-300)",
    "--color-bg-danger-muted-hover": "var(--color-danger-300)",
    "--color-bg-danger-muted-active": "var(--color-danger-300)",

    "--color-bg-warning": "var(--color-warning-500)",
    "--color-bg-warning-hover": "var(--color-warning-600)",
    "--color-bg-warning-active": "var(--color-warning-700)",
    "--color-bg-warning-muted": "var(--color-warning-300)",
    "--color-bg-warning-muted-hover": "var(--color-warning-300)",
    "--color-bg-warning-muted-active": "var(--color-warning-300)",

    "--color-bg-info": "var(--color-info-500)",
    "--color-bg-info-hover": "var(--color-info-600)",
    "--color-bg-info-active": "var(--color-info-700)",
    "--color-bg-info-muted": "var(--color-info-300)",
    "--color-bg-info-muted-hover": "var(--color-info-300)",
    "--color-bg-info-muted-active": "var(--color-info-300)",

    "--color-fg": "var(--color-neutral-1000)",
    "--color-fg-muted": "var(--color-neutral-800)",
    "--color-fg-inverse": "var(--color-neutral-100)",
    "--color-fg-disabled": "var(--color-neutral-600)",

    "--color-fg-link": "var(--color-neutral-1000)",
    "--color-fg-link-hover": "var(--color-neutral-1000)",
    "--color-fg-link-active": "var(--color-neutral-1000)",
    "--color-fg-link-visited": "var(--color-neutral-1000)",

    "--color-fg-onNeutral": "var(--color-neutral-1000)",
    "--color-fg-onPrimary": "var(--color-neutral-100)",
    "--color-fg-onSuccess": "var(--color-neutral-1000)",
    "--color-fg-onMutedSuccess": "var(--color-neutral-1000)",
    "--color-fg-onDanger": "var(--color-neutral-1000)",
    "--color-fg-onMutedDanger": "var(--color-neutral-1000)",
    "--color-fg-onWarning": "var(--color-neutral-1000)",
    "--color-fg-onMutedWarning": "var(--color-neutral-1000)",

    "--color-fg-onTooltip": "var(--color-neutral-1000)",

    "--color-border": "var(--color-neutral-300)",
    "--color-border-hover": "var(--color-neutral-1000)",
    "--color-border-active": "var(--color-neutral-1000)",
    "--color-border-disabled": "var(--color-neutral-1000)",

    "--color-border-success": "var(--color-success-300)",
    "--color-border-danger": "var(--color-danger-300)",
    "--color-border-warning": "var(--color-warning-300)",
    "--color-border-info": "var(--color-info-300)",

    "--color-border-accent": "var(--color-accent-500)",
    "--color-border-secondary": "var(--color-neutral-200)",
    "--color-border-focus": "var(--color-accent-500)",
    "--color-border-inverse": "var(--color-neutral-500)",
  } as React.CSSProperties;

  if (!mounted) {
    return fallback;
  }

  return (
    <div
      // style={
      //   {
      //     ...styles,
      //     "--radius": `${theme.radius}rem`,
      //   } as React.CSSProperties
      // }
      style={
        {
          // "--color-bg": "0 0% 0%",
        } as React.CSSProperties
      }
      className="relative bg-black text-fg"
    >
      {children}
    </div>
  );
}
