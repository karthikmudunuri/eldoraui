"use client";

import {
  composeRenderProps,
  ColorSlider as AriaColorSlider,
  SliderOutput as AriaSliderOutput,
  SliderTrack as AriaSliderTrack,
  type ColorSliderProps as AriaColorSliderProps,
  type SliderOutputProps as AriaSliderOutputProps,
  type SliderTrackProps as AriaSliderTrackProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils/classes";
import { ColorThumb } from "./color-thumb";
import { Label } from "./field";

const colorSliderStyles = tv({
  slots: {
    root: "group/color-slider flex flex-col gap-2 orientation-horizontal:w-48 orientation-vertical:h-48 orientation-vertical:items-center",
    output: "text-fg-muted text-sm",
    track: [
      "orientation-horizontal:w-48 rounded-md orientation-horizontal:h-6 orientation-vertical:w-6 orientation-vertical:h-48 disabled:!bg-bg-disabled",
      "relative before:absolute before:inset-0 before:z-[-1] before:bg-[repeating-conic-gradient(#e6e6e6_0%_25%,_#fff_0%_50%)] before:bg-[length:16px_16px] before:bg-center before:content-[''] before:rounded-[inherit]",
    ],
  },
});

interface ColorSliderProps extends ColorSliderRootProps {
  showValueLabel?: boolean;
  label?: string;
}
const ColorSlider = ({ label, channel, showValueLabel = true, ...props }: ColorSliderProps) => {
  return (
    <ColorSliderRoot channel={channel} {...props}>
      {(label || showValueLabel) && (
        <div className={cn("flex items-center justify-between gap-2", !label && "justify-end")}>
          {label && <Label>{label}</Label>}
          {showValueLabel && <ColorSliderOutput />}
        </div>
      )}
      <ColorSliderTrack>
        <ColorThumb />
      </ColorSliderTrack>
    </ColorSliderRoot>
  );
};

type ColorSliderRootProps = AriaColorSliderProps;
const ColorSliderRoot = (props: ColorSliderRootProps) => {
  const { root } = colorSliderStyles();
  return (
    <AriaColorSlider
      {...props}
      className={composeRenderProps(props.className, (className) => root({ className }))}
    />
  );
};

type ColorSliderTrackProps = AriaSliderTrackProps;
const ColorSliderTrack = (props: ColorSliderTrackProps) => {
  const { track } = colorSliderStyles();
  return (
    <AriaSliderTrack
      {...props}
      style={composeRenderProps(props.style, (style, { isDisabled }) => ({
        ...style,
        ...(isDisabled ? { background: "none" } : {}),
      }))}
      className={composeRenderProps(props.className, (className) => track({ className }))}
    />
  );
};

type ColorSliderOutputProps = AriaSliderOutputProps;
const ColorSliderOutput = (props: ColorSliderOutputProps) => {
  const { output } = colorSliderStyles();
  return (
    <AriaSliderOutput
      {...props}
      className={composeRenderProps(props.className, (className) => output({ className }))}
    />
  );
};

export type {
  ColorSliderProps,
  ColorSliderRootProps,
  ColorSliderTrackProps,
  ColorSliderOutputProps,
};
export { ColorSlider, ColorSliderRoot, ColorSliderOutput, ColorSliderTrack, colorSliderStyles };
