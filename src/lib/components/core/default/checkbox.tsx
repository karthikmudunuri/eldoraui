"use client";

import * as React from "react";
import {
  Checkbox as AriaCheckbox,
  composeRenderProps,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, MinusIcon } from "@/lib/icons";
import { focusRing, focusRingGroup } from "@/lib/utils/styles";

const checkboxStyles = tv({
  slots: {
    root: "group flex flex-row items-center gap-2 cursor-pointer invalid:text-fg-danger disabled:text-fg-disabled disabled:cursor-default",
    indicator: [
      "flex items-center justify-center size-4 shrink-0 rounded-sm border border-border-control cursor-pointer",
      "bg-transparent text-transparent group-selected:bg-bg-primary group-selected:text-fg-onPrimary transition-colors duration-75 group-selected:border-transparent",
      "group-indeterminate:bg-bg-primary group-indeterminate:text-fg-onPrimary",
      "group-read-only:cursor-default",
      "group-disabled:cursor-not-allowed group-disabled:border-border-disabled group-disabled:group-selected:text-fg-disabled group-disabled:group-selected:bg-bg-disabled group-disabled:group-indeterminate:bg-bg-disabled",
      "group-invalid:border-border-danger group-invalid:group-selected:bg-bg-danger-muted group-invalid:group-selected:text-fg-onMutedDanger",
    ],
  },
  variants: {
    variant: {
      default: {
        indicator: focusRingGroup(),
      },
      card: {
        root: [
          focusRing(),
          "border p-4 rounded-md flex-row-reverse gap-4 selected:bg-bg-muted disabled:selected:bg-bg-disabled transition-colors disabled:border-border-disabled",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CheckboxProps
  extends Omit<AriaCheckboxProps, "className">,
    VariantProps<typeof checkboxStyles> {
  className?: string;
}
const Checkbox = React.forwardRef<React.ElementRef<typeof AriaCheckbox>, CheckboxProps>(
  (localProps, ref) => {
    const contextProps = useCheckboxContext();
    const props = { ...contextProps, ...localProps };
    const { className, variant, ...restProps } = props;
    const { root, indicator } = checkboxStyles({ variant });
    return (
      <AriaCheckbox ref={ref} {...restProps} className={root({ className })}>
        {composeRenderProps(props.children, (children, { isIndeterminate }) => (
          <>
            <div className={indicator({ className: "" })}>
              {isIndeterminate ? (
                <MinusIcon className="size-2.5" />
              ) : (
                <CheckIcon className="size-3" />
              )}
            </div>
            <span>{children}</span>
          </>
        ))}
      </AriaCheckbox>
    );
  }
);
Checkbox.displayName = "Checkbox";

type CheckboxContextValue = VariantProps<typeof checkboxStyles>;
const CheckboxContext = React.createContext<CheckboxContextValue>({});
const useCheckboxContext = () => {
  return React.useContext(CheckboxContext);
};

export type { CheckboxProps };
export { Checkbox, CheckboxContext };
