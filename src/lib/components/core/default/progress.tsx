"use client";

import * as React from "react";
import {
  ProgressBar as AriaProgress,
  composeRenderProps,
  type ProgressBarProps as AriaProgressProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils/classes";
import { Label } from "./field";

const progressStyles = tv({
  slots: {
    root: "flex flex-col gap-2 w-60",
    indicator: "relative h-2.5 w-full overflow-hidden rounded-full",
    filler:
      "h-full animate-progress-grow w-full flex-1 bg-fg transition-transform origin-left min-w-14",
    valueLabel: "text-sm",
  },
  variants: {
    variant: {
      default: {
        indicator: "bg-bg-muted",
        filler: "bg-bg-primary",
      },
      accent: {
        indicator: "bg-bg-accent-muted",
        filler: "bg-bg-accent",
      },
      warning: {
        indicator: "bg-bg-warning-muted",
        filler: "bg-bg-warning",
      },
      danger: {
        indicator: "bg-bg-danger-muted",
        filler: "bg-bg-danger",
      },
      success: {
        indicator: "bg-bg-success-muted",
        filler: "bg-bg-success",
      },
    },
    size: {
      sm: {
        indicator: "h-1",
      },
      md: {
        indicator: "h-2.5",
      },
      lg: {
        indicator: "h-4",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "bar",
    size: "md",
  },
});

type ProgressSlots = keyof ReturnType<typeof progressStyles>;
type ProgressClassNames = {
  [key in ProgressSlots]?: string;
};

interface ProgressProps extends ProgressRootProps, VariantProps<typeof progressStyles> {
  label?: string;
  showValueLabel?: boolean;
  duration?: string;
  classNames?: ProgressClassNames;
}
const Progress = ({
  label,
  showValueLabel = false,
  variant,
  size,
  duration,
  className,
  classNames,
  ...props
}: ProgressProps) => {
  return (
    <ProgressRoot duration={duration} className={cn(className, classNames?.root)} {...props}>
      {(label || showValueLabel) && (
        <div className={cn("flex items-center justify-between gap-2", !label && "justify-end")}>
          {label && <Label>{label}</Label>}
          {showValueLabel && <ProgressValueLabel />}
        </div>
      )}
      <ProgressIndicator
        variant={variant}
        size={size}
        duration={duration}
        classNames={{ indicator: classNames?.indicator, filler: classNames?.filler }}
      />
    </ProgressRoot>
  );
};

interface ProgressRootProps extends Omit<AriaProgressProps, "className"> {
  duration?: string;
  className?: string;
}
const ProgressRoot = ({ className, isIndeterminate, duration, ...props }: ProgressRootProps) => {
  const { root } = progressStyles();
  return (
    <AriaProgress
      className={root({ className })}
      isIndeterminate={isIndeterminate || !!duration}
      {...props}
    >
      {composeRenderProps(
        props.children,
        (children, { percentage, isIndeterminate, valueText }) => (
          <ProgressContext.Provider value={{ percentage, isIndeterminate, valueText }}>
            {children}
          </ProgressContext.Provider>
        )
      )}
    </AriaProgress>
  );
};

interface ProgressIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressStyles> {
  duration?: string;
  classNames?: {
    indicator?: string;
    filler?: string;
  };
}
const ProgressIndicator = ({
  duration,
  className,
  variant,
  size,
  classNames,
  ...props
}: ProgressIndicatorProps) => {
  const { indicator, filler } = progressStyles({ variant, size });
  const { isIndeterminate, percentage } = useProgressContext();
  return (
    <div className={cn(indicator(), classNames?.indicator, className)} {...props}>
      <div
        className={cn(
          filler(),
          isIndeterminate && "animate-progress-indeterminate",
          classNames?.filler
        )}
        style={
          {
            "--progress-duration": duration ?? "0s",
            ...(percentage ? { transform: `scaleX(${percentage / 100})` } : {}),
            ...(isIndeterminate
              ? {
                  maskImage: "linear-gradient(75deg, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.65) 80%)",
                  maskSize: "200%",
                }
              : {}),
          } as React.CSSProperties
        }
      />
    </div>
  );
};

type ProgressValueLabelProps = React.HTMLAttributes<HTMLSpanElement>;
const ProgressValueLabel = ({ children, className, ...props }: ProgressValueLabelProps) => {
  const { valueLabel } = progressStyles();
  const { valueText } = useProgressContext();
  return (
    <span className={valueLabel({ className })} {...props}>
      {children ?? valueText}
    </span>
  );
};

type ProgressContextValue = {
  percentage?: number;
  isIndeterminate: boolean;
  valueText?: string;
};
const ProgressContext = React.createContext<ProgressContextValue | null>(null);
const useProgressContext = () => {
  const context = React.useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgressContext must be used within a ProgressProvider");
  }
  return context;
};

export type { ProgressProps, ProgressRootProps, ProgressIndicatorProps, ProgressValueLabelProps };
export { Progress, ProgressRoot, ProgressIndicator, ProgressValueLabel };
