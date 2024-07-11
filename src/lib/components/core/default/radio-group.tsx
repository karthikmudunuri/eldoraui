"use client";

import * as React from "react";
import {
  composeRenderProps,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { focusRing, focusRingGroup } from "@/lib/utils/styles";
import { Field, type FieldProps } from "./field";

const radioGroupStyles = tv({
  slots: {
    root: "group/radio-group flex flex-col gap-2",
    wrapper:
      "flex flex-col gap-1 group-orientation-horizontal/radio-group:flex-row group-orientation-horizontal/radio-group:gap-3",
  },
});

const radioStyles = tv({
  slots: {
    root: "group flex flex-row items-center gap-2 disabled:text-fg-disabled invalid:text-fg-danger cursor-pointer disabled:cursor-default",
    indicator: [
      focusRing(),
      "relative size-4 shrink-0 rounded-full border border-border-control group-selected:border-bg-primary group-selected:border-4 transition-all duration-100",
      "group-disabled:border-border-disabled group-disabled:selected:bg-bg-disabled group-disabled:indeterminate:bg-bg-disabled",
      "group-invalid:border-border-danger group-invalid:selected:border-bg-danger",
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

interface RadioGroupProps
  extends RadioGroupRootProps,
    VariantProps<typeof radioGroupStyles>,
    Omit<FieldProps, "children"> {
  className?: string;
}
const RadioGroup = React.forwardRef<React.ElementRef<typeof AriaRadioGroup>, RadioGroupProps>(
  ({ label, description, errorMessage, necessityIndicator, contextualHelp, ...props }, ref) => {
    const { wrapper } = radioGroupStyles();
    return (
      <RadioGroupRoot ref={ref} {...props}>
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
      </RadioGroupRoot>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupRootProps
  extends Omit<AriaRadioGroupProps, "className">,
    VariantProps<typeof radioStyles> {
  className?: string;
}
const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof AriaRadioGroup>,
  RadioGroupRootProps
>(({ className, variant, ...props }, ref) => {
  const { root } = radioGroupStyles();
  return (
    <RadioContext.Provider value={{ variant }}>
      <AriaRadioGroup ref={ref} className={root({ className })} {...props} />
    </RadioContext.Provider>
  );
});
RadioGroupRoot.displayName = "RadioGroupRoot";

interface RadioProps extends Omit<AriaRadioProps, "className">, VariantProps<typeof radioStyles> {
  className?: string;
}
const Radio = React.forwardRef<React.ElementRef<typeof AriaRadio>, RadioProps>(
  (localProps, ref) => {
    const contextProps = useRadioContext();
    const props = { ...contextProps, ...localProps };
    const { className, variant, ...restProps } = props;
    const { root, indicator } = radioStyles({ variant });
    return (
      <AriaRadio ref={ref} {...restProps} className={root({ className })}>
        {composeRenderProps(props.children, (children) => (
          <>
            <div className={indicator({ className: "" })} />
            <span>{children}</span>
          </>
        ))}
      </AriaRadio>
    );
  }
);
Radio.displayName = "Radio";

type RadioContextValue = VariantProps<typeof radioStyles>;
const RadioContext = React.createContext<RadioContextValue>({});
const useRadioContext = () => {
  return React.useContext(RadioContext);
};

export type { RadioGroupRootProps, RadioGroupProps, RadioProps };
export { RadioGroupRoot, RadioGroup, Radio };
