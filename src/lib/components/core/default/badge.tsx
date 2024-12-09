import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils/classes";

const badgeVariants = tv({
  base: "inline-flex items-center gap-1 rounded-md text-xs font-semibold transition-colors shrink-0 whitespace-nowrap",
  variants: {
    variant: {
      neutral: "bg-bg-muted text-fg",
      outline: "border text-fg",
      primary: "bg-bg-primary text-fg-onPrimary",
      success: "bg-bg-success text-fg-onSuccess",
      "success-subtle": "bg-bg-success-muted text-fg-success",
      "success-outline": "border border-border-success text-fg-success",
      danger: "bg-bg-danger text-fg-onDanger",
      "danger-subtle": "bg-bg-danger-muted text-fg-danger",
      "danger-outline": "border border-border-danger text-fg-danger",
      warning: "bg-bg-warning text-fg-onWarning",
      "warning-subtle": "bg-bg-warning-muted text-fg-warning",
      "warning-outline": "border border-border-warning text-fg-warning",
      accent: "bg-bg-accent text-fg-onAccent",
      "accent-subtle": "bg-bg-accent-muted text-fg-accent",
      "accent-outline": "border border-border-accent text-fg-accent",
    },
    size: {
      sm: "h-5 px-2.5 [&_svg]:size-3",
      md: "h-6 px-3 [&_svg]:size-3.5",
      lg: "h-7 px-4 text-sm [&_svg]:size-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ children, className, variant, size, icon, ...props }: BadgeProps) {
  return (
    <span
      role="presentation"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export { Badge, badgeVariants };
