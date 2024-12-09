"use client";

import {
  ColorThumb as AriaColorThumb,
  type ColorThumbProps as AriaColorThumbProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "@/lib/utils/styles";

const colorThumbStyles = tv({
  extend: focusRing,
  base: [
    "size-6 z-30 rounded-full border-2 border-white ring-1 ring-black/40 disabled:!bg-bg-disabled disabled:border-border-disabled",
    "group-orientation-horizontal/color-slider:top-1/2 group-orientation-vertical/color-slider:left-1/2",
  ],
});

interface ColorThumbProps extends Omit<AriaColorThumbProps, "className"> {
  className?: string;
}
const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
  return <AriaColorThumb className={colorThumbStyles({ className })} {...props} />;
};

export type { ColorThumbProps };
export { ColorThumb };
