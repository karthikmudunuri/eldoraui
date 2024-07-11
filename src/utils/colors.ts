import { contrast, convertColorValue, type ColorTuple } from "@adobe/leonardo-contrast-colors";

export const getContrastTextColor = (color: string): "white" | "black" => {
  const RGBColor = convertColorValue(color, "RGB", true) as unknown as {
    r: number;
    g: number;
    b: number;
  };
  const colorTuple: ColorTuple = [RGBColor.r, RGBColor.g, RGBColor.b];
  const contrastWithBlack = contrast(colorTuple, [0, 0, 0]);
  const contrastWithWhite = contrast(colorTuple, [255, 255, 255]);
  const contrastText = contrastWithBlack > contrastWithWhite ? "black" : "white";
  return contrastText;
};
