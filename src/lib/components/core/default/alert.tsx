import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { DangerIcon, InfoIcon, SuccessIcon, WarningIcon } from "@/lib/icons";

const alertStyles = tv({
  slots: {
    root: "rounded-lg border p-4 flex items-center gap-4 [&_svg]:size-4",
    title: "font-medium leading-normal tracking-tight mr-1",
    content: "text-sm",
  },
  variants: {
    variant: {
      default: { root: "border text-fg" },
      success: { root: "border border-border-success text-fg-success" },
      warning: { root: "border border-border-warning text-fg-warning" },
      danger: { root: "border border-border-danger text-fg-danger" },
      info: { root: "border border-border-accent text-fg-accent" },
    },
    fill: {
      true: "",
    },
  },
  compoundVariants: [
    { variant: "default", fill: true, className: { root: "bg-bg-muted" } },
    { variant: "success", fill: true, className: { root: "bg-bg-success-muted" } },
    { variant: "warning", fill: true, className: { root: "bg-bg-warning-muted" } },
    { variant: "danger", fill: true, className: { root: "bg-bg-danger-muted" } },
    { variant: "info", fill: true, className: { root: "bg-bg-accent-muted" } },
  ],
  defaultVariants: {
    variant: "default",
    fill: false,
  },
});

const icons = {
  default: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  danger: <DangerIcon />,
  info: <InfoIcon />,
};

interface AlertProps extends AlertRootProps {
  title?: React.ReactNode;
  icon?: React.ReactNode | null;
  action?: React.ReactNode;
}
const Alert = ({ variant = "default", title, children, icon, action, ...props }: AlertProps) => {
  return (
    <AlertRoot variant={variant} {...props}>
      {icon || icons[variant]}
      <div className="flex-1 space-y-0.5">
        {title && <AlertTitle>{title}</AlertTitle>}
        {children && <AlertContent>{children}</AlertContent>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </AlertRoot>
  );
};

interface AlertRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertStyles> {}
const AlertRoot = ({ className, variant, fill, ...props }: AlertRootProps) => {
  const { root } = alertStyles({ variant, fill });
  return <div role="alert" className={root({ className })} {...props} />;
};

interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof alertStyles> {} // TODO VERIFY THIS
const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  const { title } = alertStyles();
  return <h3 className={title({ className })} {...props} />;
};

interface AlertContentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof alertStyles> {} // TODO VERIFY THIS
const AlertContent = ({ className, ...props }: AlertContentProps) => {
  const { content } = alertStyles();
  return <section className={content({ className })} {...props} />;
};

export type { AlertProps, AlertRootProps, AlertTitleProps, AlertContentProps };
export { Alert, AlertRoot, AlertTitle, AlertContent };
