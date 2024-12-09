"use client";

import * as React from "react";
import {
  CheckboxGroup as AriaCheckboxGroup,
  composeRenderProps,
  type CheckboxGroupProps as AriaCheckboxGroupProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckboxContext } from "./checkbox";
import { Field, type FieldProps } from "./field";

const checkboxGroupStyles = tv({
  slots: {
    root: "flex flex-col gap-2 items-start",
    wrapper: "flex",
  },
  variants: {
    variant: {
      default: {
        wrapper: "flex-col gap-0.5",
      },
      card: {
        wrapper: "flex gap-2",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CheckboxGroupProps extends CheckboxGroupRootProps, Omit<FieldProps, "children"> {}
const CheckboxGroup = React.forwardRef<
  React.ElementRef<typeof AriaCheckboxGroup>,
  CheckboxGroupProps
>(
  (
    { label, description, errorMessage, necessityIndicator, contextualHelp, variant, ...props },
    ref
  ) => {
    const { wrapper } = checkboxGroupStyles({ variant });
    return (
      <CheckboxGroupRoot ref={ref} variant={variant} {...props}>
        {composeRenderProps(props.children, (children, { isRequired }) => (
          <Field
            label={label}
            description={description}
            errorMessage={errorMessage}
            isRequired={isRequired}
            necessityIndicator={necessityIndicator}
            contextualHelp={contextualHelp}
          >
            <div className={wrapper()}>{children}</div>
          </Field>
        ))}
      </CheckboxGroupRoot>
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";

interface CheckboxGroupRootProps
  extends Omit<AriaCheckboxGroupProps, "className">,
    VariantProps<typeof checkboxGroupStyles> {
  className?: string;
}
const CheckboxGroupRoot = React.forwardRef<
  React.ElementRef<typeof AriaCheckboxGroup>,
  CheckboxGroupRootProps
>(({ className, variant, ...props }, ref) => {
  const { root } = checkboxGroupStyles({ variant });
  return (
    <CheckboxContext.Provider value={{ variant }}>
      <AriaCheckboxGroup ref={ref} className={root({ className })} {...props} />
    </CheckboxContext.Provider>
  );
});
CheckboxGroupRoot.displayName = "CheckboxGroupRoot";

export type { CheckboxGroupProps, CheckboxGroupRootProps };
export { CheckboxGroup, CheckboxGroupRoot };
