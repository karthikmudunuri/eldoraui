"use client";

import React from "react";
import {
  composeRenderProps,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Collection as AriaCollection,
  type ListBoxProps as AriaListBoxProps,
  type ListBoxItemProps as AriaListBoxItemProps,
  ListStateContext,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, LoaderIcon } from "@/lib/icons";
import { focusRing } from "@/lib/utils/styles";
import { Text } from "./text";

const listBoxStyles = tv({
  base: [
    focusRing(),
    "flex flex-col p-1 overflow-auto outline-none orientation-horizontal:flex-row orientation-horizontal:w-auto layout-grid:grid layout-grid:grid-cols-2 layout-grid:w-auto empty:justify-center empty:items-center empty:italic empty:min-h-24 empty:text-fg-muted empty:text-sm",
    "[&_.separator]:-mx-1 [&_.separator]:my-1 [&_.separator]:w-auto",
  ],
  variants: {
    standalone: {
      true: "border bg-bg w-48 rounded-md max-h-60 overflow-y-auto",
      false: "rounded-[inherit] max-h-[inherit]",
    },
  },
});

const listBoxItemStyles = tv({
  base: [
    "flex cursor-pointer items-center rounded-sm px-3 py-1.5 text-sm outline-none transition-colors disabled:pointer-default hover:bg-bg-inverse/10 focus:bg-bg-inverse/10 pressed:bg-bg-inverse/15 disabled:text-fg-disabled disabled:cursor-default",
    "selection-single:pl-0 selection-multiple:pl-0",
    "[&_svg]:size-4",
  ],
  variants: {
    variant: {
      default: "text-fg",
      success: "text-fg-success",
      warning: "text-fg-warning",
      accent: "text-fg-accent",
      danger: "text-fg-danger",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ListBoxProps<T> extends AriaListBoxProps<T> {
  isLoading?: boolean;
}
const ListBox = <T extends object>({ children, isLoading, ...props }: ListBoxProps<T>) => {
  const state = React.useContext(ListStateContext);
  const standalone = !state;
  return (
    <AriaListBox
      {...props}
      className={composeRenderProps(props.className, (className) =>
        listBoxStyles({ standalone, className })
      )}
    >
      <AriaCollection items={props.items}>{children}</AriaCollection>
      {isLoading && (
        <AriaListBoxItem className="flex items-center justify-center py-1.5">
          <LoaderIcon aria-label="Loading more..." className="size-5 animate-spin text-fg-muted" />
        </AriaListBoxItem>
      )}
    </AriaListBox>
  );
};

interface ItemProps<T> extends AriaListBoxItemProps<T>, VariantProps<typeof listBoxItemStyles> {
  label?: string;
  description?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
const Item = <T extends object>({
  variant,
  label,
  description,
  prefix,
  suffix,
  ...props
}: ItemProps<T>) => {
  const textValue =
    props.textValue || (typeof props.children === "string" ? props.children : undefined);
  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={composeRenderProps(props.className, (className) =>
        listBoxItemStyles({ variant, className })
      )}
    >
      {composeRenderProps(props.children, (children, { isSelected, selectionMode }) => (
        <>
          {selectionMode !== "none" && (
            <span className="flex w-8 shrink-0 items-center justify-center">
              {isSelected && <CheckIcon aria-hidden className="size-4 text-fg-accent" />}
            </span>
          )}
          <span className="flex items-center gap-3">
            {prefix}
            <span className="flex flex-1 flex-col">
              {label && <Text slot="label">{label}</Text>}
              {description && <Text slot="description">{description}</Text>}
              {children}
            </span>
            {suffix}
          </span>
        </>
      ))}
    </AriaListBoxItem>
  );
};

export type { ListBoxProps, ItemProps };
export { ListBox, Item };
