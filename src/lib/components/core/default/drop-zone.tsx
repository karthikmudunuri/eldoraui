"use client";

import * as React from "react";
import {
  composeRenderProps,
  DropZone as AriaDropZone,
  type DropZoneProps as AriaDropZoneProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const dropZoneStyles = tv({
  slots: {
    root: "flex flex-col p-6 w-60 items-center justify-center gap-2 rounded-md border-2 border-dashed text-sm drop-target:border-border-focus focus-visible:border-border-focus drop-target:bg-bg-accent-muted disabled:text-fg-disabled disabled:border-border-disabled",
    label: "font-semibold text-md",
  },
});

type DropZoneProps = AriaDropZoneProps;
const DropZone = (props: DropZoneProps) => {
  const { root } = dropZoneStyles();
  return (
    <AriaDropZone
      {...props}
      className={composeRenderProps(props.className, (className) => root({ className }))}
    />
  );
};

export type { DropZoneProps };
export { DropZone };
