"use client";

import * as React from "react";
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  OverlayArrow as AriaOverlayArrow,
  type TooltipProps as AriaTooltipProps,
  type TooltipTriggerComponentProps as AriaTooltipTriggerProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipVariants = tv({
  base: "group/tooltip z-50 bg-bg-tooltip text-fg overflow-hidden rounded-md px-3 py-1.5 text-sm shadow-md will-change-transform entering:animate-in entering:fade-in entering:ease-out entering:placement-bottom:slide-in-from-top-0.5 entering:placement-top:slide-in-from-bottom-0.5 entering:placement-left:slide-in-from-right-0.5 entering:placement-right:slide-in-from-left-0.5 exiting:animate-out exiting:fade-out exiting:ease-in exiting:placement-bottom:slide-out-to-top-0.5 exiting:placement-top:slide-out-to-bottom-0.5 exiting:placement-left:slide-out-to-right-0.5 exiting:placement-right:slide-out-to-left-0.5",
});

interface TooltipProps
  extends TooltipRootProps,
    Omit<TooltipContentProps, "children">,
    VariantProps<typeof tooltipVariants> {
  content?: React.ReactNode;
  arrow?: boolean;
}
const Tooltip = ({
  delay,
  closeDelay,
  trigger,
  defaultOpen,
  isOpen,
  onOpenChange,
  isDisabled,
  content,
  arrow = true,
  children,
  ...props
}: TooltipProps) => {
  return (
    <TooltipRoot
      delay={delay}
      closeDelay={closeDelay}
      trigger={trigger}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      isDisabled={isDisabled}
    >
      {children}
      <TooltipContent {...props}>
        {arrow && <OverlayArrow />}
        {content}
      </TooltipContent>
    </TooltipRoot>
  );
};

type TooltipRootProps = AriaTooltipTriggerProps;
const TooltipRoot = ({ delay = 700, closeDelay = 0, ...props }: TooltipRootProps) => (
  <AriaTooltipTrigger delay={delay} closeDelay={closeDelay} {...props} />
);

interface TooltipContentProps
  extends Omit<AriaTooltipProps, "className">,
    VariantProps<typeof tooltipVariants> {
  className?: string;
}
const TooltipContent = ({ className, offset = 10, ...props }: TooltipContentProps) => {
  return <AriaTooltip offset={offset} className={tooltipVariants({ className })} {...props} />;
};

type OverlayArrowProps = Partial<React.SVGProps<SVGSVGElement>>;
const OverlayArrow = (props: OverlayArrowProps) => {
  return (
    <AriaOverlayArrow>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        className="z-50 fill-bg-tooltip stroke-border group-placement-left/tooltip:-rotate-90 group-placement-right/tooltip:rotate-90 group-placement-bottom/tooltip:rotate-180"
        {...props}
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </AriaOverlayArrow>
  );
};

export { Tooltip, TooltipRoot, TooltipContent, OverlayArrow };
export type { TooltipProps, TooltipRootProps, TooltipContentProps };
