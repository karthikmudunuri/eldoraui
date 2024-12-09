import { tv } from "tailwind-variants";

export const focusRing = tv({
  base: "outline-none ring-0 ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-2",
});

export const focusRingGroup = tv({
  base: "outline-none ring-0 ring-border-focus group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg group-focus-visible:ring-2",
});

export const focusInput = tv({
  base: "ring-0 focus-within:ring-border-focus focus-within:ring-2",
});
