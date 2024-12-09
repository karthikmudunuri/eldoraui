"use client";

import {
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const headingStyles = tv({
  base: "text-lg font-medium",
});

type HeadingProps = AriaHeadingProps;
const Heading = ({ className, ...props }: HeadingProps) => {
  return <AriaHeading className={headingStyles({ className })} {...props} />;
};

export type { HeadingProps };
export { Heading };
