"use client";

import * as React from "react";
import {
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { SearchIcon, XIcon } from "@/lib/icons";
import { Button } from "./button";
import { Field, type FieldProps } from "./field";
import { InputRoot, Input, type inputStyles } from "./input";

const searchFieldStyles = tv({
  base: "flex flex-col gap-2 items-start w-48",
});

type SearchFieldProps = SearchFieldRootProps &
  Omit<FieldProps, "children"> &
  VariantProps<typeof inputStyles> & {
    prefix?: React.ReactNode;
    suffix?:
      | React.ReactNode
      | (({ isEmpty, isDisabled }: { isEmpty?: boolean; isDisabled?: boolean }) => React.ReactNode);
    isLoading?: boolean;
    loaderPosition?: "prefix" | "suffix";
    placeholder?: string;
  };
const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      className,
      size,
      placeholder,
      label,
      description,
      errorMessage,
      prefix = <SearchIcon />,
      suffix = ({ isEmpty, isDisabled }) => {
        if (isEmpty || isDisabled) return null;
        return (
          <Button variant="quiet" shape="circle" size="sm" className="size-6">
            <XIcon />
          </Button>
        );
      },
      isLoading,
      loaderPosition = "prefix",
      isRequired,
      necessityIndicator,
      contextualHelp,
      ...props
    },
    ref
  ) => {
    return (
      <SearchFieldRoot className={className} {...props}>
        {({ isEmpty, isDisabled }) => (
          <>
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
                suffix={typeof suffix === "function" ? suffix({ isEmpty, isDisabled }) : suffix}
                isLoading={isLoading}
                loaderPosition={loaderPosition}
              >
                <Input
                  ref={ref}
                  placeholder={placeholder}
                  className="[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
                />
              </InputRoot>
            </Field>
          </>
        )}
      </SearchFieldRoot>
    );
  }
);
SearchField.displayName = "SearchField";

type SearchFieldRootProps = Omit<AriaSearchFieldProps, "className"> & {
  className?: string;
};
const SearchFieldRoot = React.forwardRef<
  React.ElementRef<typeof AriaSearchField>,
  SearchFieldRootProps
>(({ className, ...props }, ref) => {
  return <AriaSearchField ref={ref} className={searchFieldStyles({ className })} {...props} />;
});
SearchFieldRoot.displayName = "SearchFieldRoot";

export type { SearchFieldProps, SearchFieldRootProps };
export { SearchField, SearchFieldRoot };
