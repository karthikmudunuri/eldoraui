"use client";

import React from "react";
import type { CssColor } from "@adobe/leonardo-contrast-colors";
import {
  LockIcon,
  Maximize2Icon,
  Minimize2Icon,
  MonitorIcon,
  MoonIcon,
  PlusIcon,
  RotateCwIcon,
  SmartphoneIcon,
  SunIcon,
  TabletIcon,
  Trash2Icon,
} from "lucide-react";
import { Modal as AriaModal, Dialog as AriaDialog } from "react-aria-components";
import Balancer from "react-wrap-balancer";
import { useConfig } from "@/hooks/use-config";
import { usePalette } from "@/hooks/use-palette";
import { Button } from "@/lib/components/core/default/button";
import { ColorPicker } from "@/lib/components/core/default/color-picker";
import { Dialog, DialogRoot } from "@/lib/components/core/default/dialog";
import { NumberField } from "@/lib/components/core/default/number-field";
import { Slider } from "@/lib/components/core/default/slider";
import { Switch } from "@/lib/components/core/default/switch";
import { TextField } from "@/lib/components/core/default/text-field";
import { ToggleGroup, ToggleGroupButton } from "@/lib/components/core/default/toggle-group";
import { Tooltip } from "@/lib/components/core/default/tooltip";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils/classes";

export default function ThemesPage() {
  const { mode, setMode, theme } = useConfig();

  return (
    <div className="container">
      <div className="mx-auto mt-14 flex max-w-4xl flex-col lg:items-center lg:text-center">
        <h1 className="leading-tighter mt-4 font-display text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
          <Balancer>Everything starts with identity</Balancer>
        </h1>
        <p className="text-md mt-4 text-fg-muted md:text-lg">
          <Balancer>
            Make your design system, choose your color palette, your favourite icon library, your
            components style and fonts to match you brand identity.
          </Balancer>
        </p>
        <div className="mt-8 flex items-center gap-2">
          <DialogRoot>
            <Button variant="primary" size="lg">
              Explore themes
            </Button>
            <Dialog type="drawer" title="Themes">
              <h4 className="mt-2 text-lg font-semibold">Your themes</h4>
              <p className="text-fg-muted">You didn&apos;t save any theme yet</p>
              <h4 className="mt-2 text-lg font-semibold">Pre-built themes</h4>
              <div className="mt-4 grid grid-cols-8 gap-4">
                {Array.from({ length: 8 }, (_, index) => (
                  <div key={index} className="h-[100px] bg-bg-muted"></div>
                ))}
              </div>
            </Dialog>
          </DialogRoot>
          <DialogRoot>
            <Button variant="outline" size="lg">
              Copy Code
            </Button>
            <Dialog title="Code"></Dialog>
          </DialogRoot>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <ToggleGroup
            value={mode}
            onValueChange={(val) => setMode(val as "light" | "dark")}
            size="sm"
          >
            <ToggleGroupButton value="light" aria-label="Toggle to light mode">
              <SunIcon className="size-4" />
            </ToggleGroupButton>
            <ToggleGroupButton value="dark" aria-label="Toggle to dark mode">
              <MoonIcon className="size-4" />
            </ToggleGroupButton>
          </ToggleGroup>
        </div>
      </div>
      <div className="mt-14 [&>h2]:my-4 [&>h2]:text-3xl [&>h2]:font-semibold [&_h3]:text-xl [&_h3]:font-semibold">
        <h2>Colors</h2>
        <div className="mb-20 space-y-20">
          {(
            [
              {
                name: "Neutral",
                value: "neutral",
                colors: Object.entries(theme[mode].palettes.neutral.colors).map(([key, value]) => ({
                  name: `Neutral ${key}`,
                  key: `neutral-${key}`,
                  value: value,
                })),
              },
              {
                name: "Accent",
                value: "accent",
                colors: Object.entries(theme[mode].palettes.accent.colors).map(([key, value]) => ({
                  name: `Accent ${key}`,
                  key: `accent-${key}`,
                  value: value,
                })),
              },
              {
                name: "Success",
                value: "success",
                colors: Object.entries(theme[mode].palettes.success.colors).map(([key, value]) => ({
                  name: `Success ${key}`,
                  key: `success-${key}`,
                  value: value,
                })),
              },
              {
                name: "Danger",
                value: "danger",
                colors: Object.entries(theme[mode].palettes.danger.colors).map(([key, value]) => ({
                  name: `Danger ${key}`,
                  key: `danger-${key}`,
                  value: value,
                })),
              },
              {
                name: "Warning",
                value: "warning",
                colors: Object.entries(theme[mode].palettes.warning.colors).map(([key, value]) => ({
                  name: `Warning ${key}`,
                  key: `warning-${key}`,
                  value: value,
                })),
              },
            ] as const
          ).map((palette, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2">
                <h3>{palette.name}</h3>
                <ColorScalesPopover name={palette.value} />
              </div>
              <div className="mt-4 grid grid-cols-10 gap-1">
                {palette.colors.map((color) => {
                  const hint: string | undefined = hints[color.key as keyof typeof hints];
                  return (
                    <div key={color.name} className="relative rounded-md border shadow">
                      <div
                        className="h-20 rounded-t-[inherit] border-b"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="p-2 text-sm">
                        <p>{color.name}</p>
                      </div>
                      {hint && (
                        <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 translate-y-full flex-col items-center justify-center p-2">
                          <div className="h-3 w-px bg-fg" />
                          <p className="w-full text-center text-xs text-fg-muted">{hint}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <h2>Icons</h2>
        <h2>Typeface</h2>
        <div className="mt-4">
          <Preview />
        </div>
      </div>
    </div>
  );
}

const ColorScalesPopover = ({
  name,
}: {
  name: "neutral" | "accent" | "success" | "danger" | "warning";
}) => {
  const {
    smooth,
    handleChangeSmooth,
    lightness,
    handleChangeLightness,
    saturation,
    handleChangeSaturation,
    baseColors,
    handleChangeColor,
    ratios,
    handleChangeRatio,
  } = usePalette(name);

  return (
    <DialogRoot>
      <Button size="sm">Color scales</Button>
      <Dialog
        type="drawer"
        title="Color scales"
        //  placement="right" TODO
        className="space-y-4"
      >
        <Slider label="Lightness" value={lightness} onChange={handleChangeLightness} />
        <Slider label="Saturation" value={saturation} onChange={handleChangeSaturation} />
        <Switch isSelected={smooth} onChange={handleChangeSmooth}>
          Smooth
        </Switch>
        <div className="flex items-center justify-between gap-4">
          <p>Key colors</p>
          <Tooltip content="Add key color">
            <Button variant="quiet" shape="square" size="sm">
              <PlusIcon />
            </Button>
          </Tooltip>
        </div>
        <div className="mt-1">
          {baseColors.map((color, index) => (
            <div key={index} className="flex items-center justify-between">
              <ColorPicker
                value={color}
                onChange={(newColor) => {
                  handleChangeColor(newColor as unknown as CssColor, index);
                }}
              />
              <Button>
                <Trash2Icon />
              </Button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {ratios.map((ratio, i) => (
            <NumberField
              key={i}
              label={`${name} ${(i + 1) * 100}`}
              className="w-[150px]"
              size="sm"
              step={0.1}
              value={ratio}
              onChange={(newValue) => handleChangeRatio(newValue, i)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            variant="primary"
            // onPress={updateTheme}
          >
            Apply changes
          </Button>
        </div>
      </Dialog>
    </DialogRoot>
  );
};

const Preview = () => {
  const [view, setView] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [fullScreen, setFullScreen] = React.useState(false);
  return (
    <PreviewBase view={view} onViewChange={setView} className="h-[90vh]">
      <DialogRoot isOpen={fullScreen} onOpenChange={setFullScreen}>
        <Button shape="square" variant="quiet" size="sm">
          <Maximize2Icon />
        </Button>
        <AriaModal className="fixed inset-0 z-50 bg-bg-muted">
          <AriaDialog className="h-full outline-none">
            {({ close }) => (
              <PreviewBase view={view} onViewChange={setView}>
                <Button shape="square" variant="quiet" size="sm" onPress={close}>
                  <Minimize2Icon />
                </Button>
              </PreviewBase>
            )}
          </AriaDialog>
        </AriaModal>
      </DialogRoot>
    </PreviewBase>
  );
};

type View = "desktop" | "tablet" | "mobile";
const PreviewBase = ({
  view,
  onViewChange,
  children,
  className,
}: {
  view: View;
  onViewChange: (view: View) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className={cn("z-50 flex h-full flex-col overflow-hidden rounded border", className)}>
      <header className="flex items-center justify-between gap-4 border-b bg-bg-muted px-4 py-1.5">
        <div className={cn("flex w-[144px] items-center gap-2", isMobile && "w-[55px]")}>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <TextField
          prefix={<LockIcon />}
          suffix={
            <Button shape="square" size="sm" variant="quiet" className="size-7">
              <RotateCwIcon />
            </Button>
          }
          value="https://acme.com"
          size="sm"
        />
        <div
          className={cn("flex w-[144px] items-center justify-end gap-2", isMobile && "w-[55px]")}
        >
          {!isMobile && (
            <ToggleGroup
              value={view}
              onValueChange={(val) => {
                onViewChange(val as View);
              }}
              size="sm"
            >
              <ToggleGroupButton value="desktop" aria-label="Toggle to desktop view">
                <MonitorIcon className="size-4" />
              </ToggleGroupButton>
              <ToggleGroupButton value="tablet" aria-label="Toggle to tablet view">
                <TabletIcon className="size-4" />
              </ToggleGroupButton>
              <ToggleGroupButton value="mobile" aria-label="Toggle to mobile view">
                <SmartphoneIcon className="size-4" />
              </ToggleGroupButton>
            </ToggleGroup>
          )}
          {children}
        </div>
      </header>
      <div className="flex w-full flex-1 flex-col items-center">
        <div
          className={cn("flex w-full flex-1 flex-col items-center", {
            "": view === "desktop",
            "max-w-2xl": view === "tablet" && !isMobile,
            "max-w-sm": view === "mobile" && !isMobile,
          })}
        >
          <iframe src="/themes" className={cn("w-full flex-1")} />
        </div>
      </div>
    </div>
  );
};

const hints = {
  "neutral-100": "Default background",
  "neutral-200": "Secondary background, decorative border.",
  "neutral-300": "Decorative border",
  "neutral-400": "Field border",
  "neutral-600": "Disabled text",
  "neutral-700": "Control border (switch, checkbox, radio)",
  "neutral-800": "Secondary text",
  "neutral-900": "Text",
  "neutral-1000": "Heading",
  ...Object.fromEntries(
    ["accent", "success", "warning", "danger"].flatMap((palette) => [
      [`${palette}-100`, "Muted background"],
      [`${palette}-500`, "Component background (default), Text"],
      [`${palette}-600`, "Component background (hover)"],
      [`${palette}-700`, "Component background (active)"],
    ])
  ),
};

["accent", "success", "warning", "danger"]
  .map((palette) => {
    return [
      { [`${palette}-100`]: "Muted background" },
      { [`${palette}-500`]: "Component background (default), Text" },
      { [`${palette}-600`]: "Component background (hover)" },
      { [`${palette}-700`]: "Component background (active)" },
    ];
  })
  .flat();
