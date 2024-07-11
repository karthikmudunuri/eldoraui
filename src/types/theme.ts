import type { CssColor } from "@adobe/leonardo-contrast-colors";

type ColorShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

export type Palette = {
  baseColors: CssColor[];
  colors: ColorShades;
  ratios: number[];
  smooth: boolean;
  lightness: number;
  saturation: number;
};

export type ThemeMode = {
  palettes: {
    neutral: Palette;
    primary: Palette;
    success: Palette;
    warning: Palette;
    danger: Palette;
    accent: Palette;
  };
};

export type Theme = {
  light: ThemeMode;
  dark: ThemeMode;
  radius: string;
};

// export type ColorName = keyof ColorScheme;
