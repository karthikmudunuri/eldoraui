"use client";

import * as React from "react";
import { useSlotId } from "@react-aria/utils";
import {
  composeRenderProps,
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
  type SliderThumbProps as AriaSliderThumbProps,
  type SliderOutputProps as AriaSliderOutputProps,
  type SliderTrackProps as AriaSliderTrackProps,
  type SliderProps as AriaSliderProps,
  SliderStateContext as AriaSliderStateContext,
  TextContext as AriaTextContext,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils/classes";
import { focusRing } from "@/lib/utils/styles";
import { Description, Label, type FieldProps } from "./field";

const sliderStyles = tv({
  slots: {
    root: "flex flex-col gap-2 orientation-horizontal:w-48 orientation-vertical:h-48 orientation-vertical:items-center",
    track: [
      "relative group/track rounded-full bg-bg-neutral cursor-pointer disabled:cursor-default disabled:bg-bg-disabled",
      "grow orientation-vertical:flex-1 orientation-vertical:w-2 orientation-horizontal:w-full orientation-horizontal:h-2",
    ],
    filler: [
      "rounded-full bg-border-focus group-disabled/track:bg-bg-disabled",
      "pointer-events-none absolute group-orientation-horizontal/top-0 group-orientation-vertical/track:w-full group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full",
    ],
    thumb: [
      focusRing(),
      "rounded-full bg-white shadow-md transition-[width,height]",
      "absolute left-[50%] top-[50%] block !-translate-x-1/2 !-translate-y-1/2",
      "disabled:bg-bg-disabled disabled:border disabled:border-bg",
    ],
    valueLabel: "text-fg-muted text-sm",
  },
  variants: {
    size: {
      sm: {
        thumb: "size-3 dragging:size-4",
        track: "orientation-vertical:w-1 orientation-horizontal:h-1",
      },
      md: {
        thumb: "size-4 dragging:size-5",
        track: "orientation-vertical:w-2 orientation-horizontal:h-2",
      },
      lg: {
        thumb: "size-5 dragging:size-6",
        track: "orientation-vertical:w-3 orientation-horizontal:h-3",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface SliderProps extends SliderRootProps, VariantProps<typeof sliderStyles> {
  label?: FieldProps["label"];
  description?: FieldProps["description"];
  valueLabel?: boolean | ((value: number[]) => string);
}
const Slider = React.forwardRef<React.ElementRef<typeof AriaSlider>, SliderProps>(
  ({ label, description, valueLabel = false, size, ...props }, ref) => (
    <SliderRoot ref={ref} {...props}>
      {(label || !!valueLabel) && (
        <div className={cn("flex items-center justify-between gap-2", !label && "justify-end")}>
          {label && <Label>{label}</Label>}
          {!!valueLabel && (
            <SliderValueLabel>
              {({ state }) =>
                typeof valueLabel === "function" ? valueLabel(state.values) : undefined
              }
            </SliderValueLabel>
          )}
        </div>
      )}
      <SliderControls size={size} />
      {description && <Description>{description}</Description>}
    </SliderRoot>
  )
);
Slider.displayName = "Slider";

type SliderRootProps = AriaSliderProps;
const SliderRoot = React.forwardRef((props: SliderRootProps, ref: React.Ref<HTMLDivElement>) => {
  const { root } = sliderStyles();
  const descriptionId = useSlotId();
  return (
    <AriaTextContext.Provider value={{ slots: { description: { id: descriptionId } } }}>
      <AriaSlider
        ref={ref}
        aria-describedby={descriptionId}
        {...props}
        className={composeRenderProps(props.className, (className) => root({ className }))}
      />
    </AriaTextContext.Provider>
  );
});
SliderRoot.displayName = "SliderRoot";

type SliderControlsProps = SliderTrackProps & VariantProps<typeof sliderStyles>;
const SliderControls = (props: SliderControlsProps) => {
  const { values } = React.useContext(AriaSliderStateContext);
  return (
    <SliderTrack {...props}>
      <SliderFiller />
      {values.map((_, i) => (
        <SliderThumb key={i} index={i} size={props.size} />
      ))}
    </SliderTrack>
  );
};

type SliderTrackProps = AriaSliderTrackProps & VariantProps<typeof sliderStyles>;
const SliderTrack = ({ size, ...props }: SliderTrackProps) => {
  const { track } = sliderStyles({ size });
  return (
    <AriaSliderTrack
      {...props}
      className={composeRenderProps(props.className, (className) => track({ className }))}
    />
  );
};

type SliderFillerProps = React.HTMLAttributes<HTMLDivElement>;
const SliderFiller = (props: SliderFillerProps) => {
  const { filler } = sliderStyles();
  const { orientation, getThumbPercent, values } = React.useContext(AriaSliderStateContext);
  return (
    <div
      {...props}
      style={
        values.length === 1
          ? orientation === "horizontal"
            ? {
                width: `${getThumbPercent(0) * 100}%`,
              }
            : { height: `${getThumbPercent(0) * 100}%` }
          : orientation === "horizontal"
            ? {
                left: `${getThumbPercent(0) * 100}%`,
                width: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`,
              }
            : {
                bottom: `${getThumbPercent(0) * 100}%`,
                height: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`,
              }
      }
      className={filler({ className: props.className })}
    />
  );
};

type SliderThumbProps = AriaSliderThumbProps & VariantProps<typeof sliderStyles>;
const SliderThumb = ({ size, ...props }: SliderThumbProps) => {
  const { thumb } = sliderStyles({ size });
  return (
    <AriaSliderThumb
      {...props}
      className={composeRenderProps(props.className, (className) => thumb({ className }))}
    />
  );
};

type SliderValueLabelProps = AriaSliderOutputProps;
const SliderValueLabel = (props: SliderValueLabelProps) => {
  const { valueLabel } = sliderStyles();
  return (
    <AriaSliderOutput
      {...props}
      className={composeRenderProps(props.className, (className) => valueLabel({ className }))}
    >
      {composeRenderProps(
        props.children,
        (children, { state }) =>
          children ?? state.values.map((_, i) => state.getThumbValueLabel(i)).join(" - ")
      )}
    </AriaSliderOutput>
  );
};

export {
  Slider,
  SliderRoot,
  SliderControls,
  SliderTrack,
  SliderFiller,
  SliderThumb,
  SliderValueLabel,
};
