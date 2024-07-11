"use client";

import {
  ColorSwatch as AriaColorSwatch,
  type ColorSwatchProps as AriaColorSwatchProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const colorSwatchStyles = tv({
  base: "size-5 rounded-sm border",
});

interface ColorSwatchProps extends Omit<AriaColorSwatchProps, "className"> {
  className?: string;
}
const ColorSwatch = ({ className, ...props }: ColorSwatchProps) => {
  return <AriaColorSwatch className={colorSwatchStyles({ className })} {...props} />;
};

export type { ColorSwatchProps };
export { ColorSwatch };
