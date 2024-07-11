"use client";

import * as React from "react";
import {
  composeRenderProps,
  Menu as AriaMenu,
  MenuTrigger as AriaMenuTrigger,
  MenuItem as AriaMenuItem,
  SubmenuTrigger as AriaSubmenuTrigger,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  type MenuTriggerProps as AriaMenuTriggerProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, ChevronRightIcon } from "@/lib/icons";
import { Kbd } from "./kbd";
import { Overlay, type OverlayProps } from "./overlay";
import { Text } from "./text";

const menuStyles = tv({
  base: [
    "outline-none rounded-[inherit] max-h[inherit] p-1",
    "group-data-[type=drawer]/overlay:p-2",
    "[&_.separator]:-mx-1 [&_.separator]:my-1 [&_.separator]:w-auto",
  ],
});

const menuItemStyles = tv({
  base: [
    "flex cursor-pointer items-center rounded-sm px-3 py-1.5 text-sm outline-none transition-colors disabled:pointer-events-none focus:bg-bg-inverse/10 disabled:text-fg-disabled",
    "selection-single:pl-0 selection-multiple:pl-0",
    "group-data-[type=drawer]/overlay:text-md group-data-[type=drawer]/overlay:py-3",
    "group-data-[type=modal]/overlay:text-md group-data-[type=modal]/overlay:py-2",
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

type MenuRootProps = AriaMenuTriggerProps;
const MenuRoot = (props: MenuRootProps) => {
  return <AriaMenuTrigger {...props} />;
};

type MenuProps<T> = MenuContentProps<T> & {
  type?: OverlayProps["type"];
  mobileType?: OverlayProps["mobileType"];
  mediaQuery?: OverlayProps["mediaQuery"];
  placement?: OverlayProps["placement"];
};
const Menu = <T extends object>({
  placement,
  type = "popover",
  mobileType = "drawer",
  mediaQuery,
  ...props
}: MenuProps<T>) => {
  return (
    <Overlay type={type} mobileType={mobileType} mediaQuery={mediaQuery} placement={placement}>
      <MenuContent {...props} />
    </Overlay>
  );
};

type MenuContentProps<T> = AriaMenuProps<T>;
const MenuContent = <T extends object>({ className, ...props }: MenuContentProps<T>) => {
  return <AriaMenu className={menuStyles({ className })} {...props} />;
};

const MenuSub = AriaSubmenuTrigger;

interface MenuItemProps<T>
  extends Omit<AriaMenuItemProps<T>, "className">,
    VariantProps<typeof menuItemStyles> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  label?: string;
  description?: string;
  shortcut?: string;
  className?: string;
}
const MenuItem = <T extends object>({
  className,
  label,
  description,
  prefix,
  suffix,
  shortcut,
  variant,
  ...props
}: MenuItemProps<T>) => {
  return (
    <AriaMenuItem className={menuItemStyles({ className, variant })} {...props}>
      {composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => (
        <>
          {selectionMode !== "none" && (
            <span className="flex w-8 items-center justify-center">
              {isSelected && <CheckIcon aria-hidden className="size-4 text-fg-accent" />}
            </span>
          )}
          {prefix}
          <span className="flex items-center gap-2">
            <span className="flex flex-1 flex-col">
              {label && <Text slot="label">{label}</Text>}
              {description && <Text slot="description">{description}</Text>}
              {children}
            </span>
            {suffix}
            {shortcut && <Kbd>{shortcut}</Kbd>}
            {hasSubmenu && <ChevronRightIcon aria-hidden className="size-4" />}
          </span>
        </>
      ))}
    </AriaMenuItem>
  );
};

export type { MenuRootProps, MenuProps };
export { MenuRoot, Menu, MenuItem, MenuContent, MenuSub };
