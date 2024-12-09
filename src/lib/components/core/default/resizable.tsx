"use client";

import React from "react";
import * as ResizablePrimitive from "react-resizable-panels";
import type { ImperativePanelHandle, ImperativePanelGroupHandle } from "react-resizable-panels";
import { tv } from "tailwind-variants";

const resizableStyles = tv({
  slots: {
    group:
      "flex h-full w-full flex-row overflow-hidden data-[panel-group-direction=vertical]:flex-col",
    panel: "",
    handle:
      "relative flex flex-[0_0_1px] items-stretch justify-stretch bg-border transition-colors data-[resize-handle-state=drag]:bg-border-active",
  },
});

type ResizableGroupProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup>;
const ResizableGroup = ({ className, ...props }: ResizableGroupProps) => {
  const { group } = resizableStyles();
  return <ResizablePrimitive.PanelGroup className={group({ className })} {...props} />;
};

type ResizablePanelProps = React.ComponentProps<typeof ResizablePrimitive.Panel>;
const ResizablePanel = ({ className, ...props }: ResizablePanelProps) => {
  const { panel } = resizableStyles();
  return <ResizablePrimitive.Panel className={panel({ className })} {...props} />;
};

interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
}
const ResizableHandle = ({ className, ...props }: ResizableHandleProps) => {
  const { handle } = resizableStyles();
  return <ResizablePrimitive.PanelResizeHandle className={handle({ className })} {...props} />;
};

export type {
  ResizablePanelProps,
  ResizableGroupProps,
  ResizableHandleProps,
  ImperativePanelHandle,
  ImperativePanelGroupHandle,
};
export { ResizableGroup, ResizablePanel, ResizableHandle };
