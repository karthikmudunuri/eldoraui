import { BackgroundColor, Color, Theme, type CssColor } from "@adobe/leonardo-contrast-colors";
import { useConfig } from "./use-config";

export const usePalette = (
  paletteName: "neutral" | "accent" | "success" | "danger" | "warning"
) => {
  const { theme, mode, setTheme } = useConfig();
  const palette = theme[mode].palettes[paletteName];
  const baseColors = palette.baseColors;
  const smooth = palette.smooth;
  const lightness = palette.lightness;
  const saturation = palette.saturation;
  const ratios = palette.ratios;

  const updateTheme = ({
    baseColors: _baseColors,
    smooth: _smooth,
    lightness: _lightness,
    saturation: _saturation,
    ratios: _ratios,
  }: {
    baseColors?: CssColor[];
    smooth?: boolean;
    lightness?: number;
    saturation?: number;
    ratios?: number[];
  }) => {
    const bg = new BackgroundColor({
      name: "bg",
      colorKeys: ["#000"],
      ratios: [1],
    });
    const baseColor = new Color({
      name: "base",
      colorKeys: _baseColors ?? baseColors,
      smooth: _smooth ?? smooth,
      ratios: _ratios ?? ratios,
    });
    const colors = new Theme({
      colors: [baseColor],
      backgroundColor: bg,
      lightness: _lightness ?? lightness,
      saturation: _saturation ?? saturation,
      output: "HSL",
    });
    setTheme({
      ...theme,
      [mode]: {
        ...theme[mode],
        palettes: {
          ...theme[mode].palettes,
          [paletteName]: {
            baseColors: _baseColors ?? baseColors,
            smooth: _smooth ?? smooth,
            saturation: _saturation ?? saturation,
            lightness: _lightness ?? lightness,
            ratios: _ratios ?? ratios,
            colors: transformObject(colors.contrastColorPairs),
          },
        },
      },
    });
  };

  const handleChangeSmooth = (isSelected: boolean) => {
    updateTheme({ smooth: isSelected });
  };

  const handleChangeColor = (color: CssColor, index: number) => {
    const newBaseColors = baseColors.map((c, i) => (i === index ? color : c));
    updateTheme({ baseColors: newBaseColors });
  };

  const handleChangeLightness = (value: number | number[]) => {
    updateTheme({ lightness: value as number });
  };

  const handleChangeSaturation = (value: number | number[]) => {
    updateTheme({ saturation: value as number });
  };

  const handleChangeRatio = (value: number, index: number) => {
    if (isNaN(value)) return;
    const newRatios = ratios.map((r, i) => (i === index ? value : r));
    updateTheme({ ratios: newRatios });
  };

  return {
    smooth,
    handleChangeSmooth,
    baseColors,
    handleChangeColor,
    lightness,
    handleChangeLightness,
    saturation,
    handleChangeSaturation,
    ratios,
    handleChangeRatio,
  };
};

function transformObject(input: Record<string, string>) {
  const output: Record<string, string> = {};
  for (const key in input) {
    if (key !== "background") {
      const newKey = key.replace("base", "");
      output[newKey] = input[key];
    }
  }
  return output;
}
