"use client";

import * as React from "react";
import {
  Link as AriaLink,
  composeRenderProps,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { focusRing } from "@/lib/utils/styles";

const linkVariants = tv({
  extend: focusRing,
  base: "inline-flex items-center transition-colors gap-1 disabled:text-fg-disabled",
  variants: {
    variant: {
      accent: "text-fg-accent hover:text-[#5e9fe0]",
      quiet: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    variant: "accent",
  },
});

interface LinkProps extends AriaLinkProps, VariantProps<typeof linkVariants> {}

const Link = ({ variant, ...props }: LinkProps) => {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className) =>
        linkVariants({ variant, className })
      )}
    />
  );
};

export type { LinkProps };
export { Link, linkVariants };
