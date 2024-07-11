"use client";

import React from "react";
import {
  getColorChannels,
  ColorPicker as AriaColorPicker,
  type ColorPickerProps as AriaColorPickerProps,
  type ColorSpace,
  composeRenderProps,
} from "react-aria-components";
import { cn } from "@/lib/utils/classes";
import { Button, type ButtonProps } from "./button";
import { ColorArea } from "./color-area";
import { ColorField } from "./color-field";
import { ColorSlider } from "./color-slider";
import { ColorSwatch } from "./color-swatch";
import { Dialog, DialogRoot } from "./dialog";
import { Item } from "./list-box";
import { Select } from "./select";

type ColorPickerProps = ColorPickerRootProps & Omit<ButtonProps, "children">;
const ColorPicker = ({
  slot,
  value,
  defaultValue,
  onChange,
  shape = "square",
  ...props
}: ColorPickerProps) => {
  return (
    <ColorPickerRoot slot={slot} value={value} defaultValue={defaultValue} onChange={onChange}>
      {composeRenderProps(props.children, (children) => (
        <DialogRoot>
          <Button shape={shape} {...props}>
            <ColorSwatch />
            {children}
          </Button>
          <Dialog type="popover" mobileType="drawer">
            <ColorEditor className="mx-auto" />
          </Dialog>
        </DialogRoot>
      ))}
    </ColorPickerRoot>
  );
};

type ColorPickerRootProps = AriaColorPickerProps;
const ColorPickerRoot = (props: ColorPickerRootProps) => {
  return <AriaColorPicker {...props} />;
};

type ColorEditorProps = React.HTMLAttributes<HTMLDivElement>;
const ColorEditor = ({ className, ...props }: ColorEditorProps) => {
  const [space, setSpace] = React.useState<ColorSpace | "hex">("hex");
  return (
    <div className={cn("mx-auto flex flex-col gap-2", className)} {...props}>
      <div className="flex gap-2">
        <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
        <ColorSlider orientation="vertical" colorSpace="hsb" channel="hue" showValueLabel={false} />
        <ColorSlider
          orientation="vertical"
          colorSpace="hsb"
          channel="alpha"
          showValueLabel={false}
        />
      </div>
      <div className="flex items-center gap-2">
        <Select selectedKey={space} onSelectionChange={(s) => setSpace(s as ColorSpace)} size="sm">
          <Item id="hex">Hex</Item>
          <Item id="rgb">RGB</Item>
          <Item id="hsl">HSL</Item>
          <Item id="hsb">HSB</Item>
        </Select>
        {space === "hex" ? (
          <ColorField aria-label="Hex" className="shrink-1 w-[40px] flex-1 basis-0" size="sm" />
        ) : (
          getColorChannels(space).map((channel) => (
            <ColorField
              key={channel}
              colorSpace={space}
              channel={channel}
              className="shrink-1 w-[40px] flex-1 basis-0"
              size="sm"
            />
          ))
        )}
      </div>
    </div>
  );
};

export type { ColorPickerProps, ColorPickerRootProps };
export { ColorPicker, ColorPickerRoot, ColorEditor };
