"use client";

import * as React from "react";
import {
  TimeField as AriaTimeField,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { DateInput, DateSegment } from "./date-input";
import { Field, type FieldProps } from "./field";
import { InputRoot, type inputStyles } from "./input";

const timeFieldStyles = tv({
  slots: {
    root: "flex flex-col items-start gap-2",
  },
});

interface TimeFieldProps<T extends TimeValue>
  extends TimeFieldRootProps<T>,
    Omit<FieldProps, "children">,
    VariantProps<typeof inputStyles> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isLoading?: boolean;
  loaderPosition?: "prefix" | "suffix";
}

const TimeField = <T extends TimeValue>({
  className,
  size,
  label,
  description,
  errorMessage,
  prefix,
  suffix,
  isLoading,
  loaderPosition = "suffix",
  isRequired,
  isDisabled,
  necessityIndicator,
  contextualHelp,
  ...props
}: TimeFieldProps<T>) => {
  return (
    <TimeFieldRoot
      className={className}
      isRequired={isRequired}
      isDisabled={isLoading || isDisabled}
      {...props}
    >
      <Field
        label={label}
        description={description}
        errorMessage={errorMessage}
        isRequired={isRequired}
        necessityIndicator={necessityIndicator}
        contextualHelp={contextualHelp}
      >
        <InputRoot
          size={size}
          prefix={prefix}
          suffix={suffix}
          isLoading={isLoading}
          loaderPosition={loaderPosition}
        >
          <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
        </InputRoot>
      </Field>
    </TimeFieldRoot>
  );
};

interface TimeFieldRootProps<T extends TimeValue> extends Omit<AriaTimeFieldProps<T>, "className"> {
  className?: string;
}
const TimeFieldRoot = <T extends TimeValue>({ className, ...props }: TimeFieldRootProps<T>) => {
  const { root } = timeFieldStyles();
  return <AriaTimeField className={root({ className })} {...props} />;
};

export type { TimeFieldProps, TimeFieldRootProps };
export { TimeField, TimeFieldRoot };
