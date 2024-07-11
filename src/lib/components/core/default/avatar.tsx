"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const avatarStyles = tv({
  slots: {
    root: "relative inline-flex align-middle shrink-0 overflow-hidden bg-bg",
    image: "aspect-square size-full",
    fallback: "flex size-full select-none items-center justify-center bg-bg-muted",
    placeholder: "h-full size-full animate-pulse bg-bg-muted flex items-center justify-center",
  },
  variants: {
    size: {
      sm: { root: "size-8" },
      md: { root: "size-10" },
      lg: { root: "size-12" },
    },
    shape: {
      circle: { root: "rounded-full" },
      square: { root: "rounded-sm" },
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "md",
  },
});

interface AvatarProps extends AvatarImageProps, VariantProps<typeof avatarStyles> {
  fallback?: React.ReactNode;
}
const Avatar = ({ fallback, className, style, size, shape, ...props }: AvatarProps) => {
  return (
    <AvatarRoot className={className} style={style} shape={shape} size={size}>
      <AvatarImage {...props} />
      <AvatarFallback>{fallback}</AvatarFallback>
      <AvatarPlaceholder />
    </AvatarRoot>
  );
};

interface AvatarRootProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarStyles> {}
const AvatarRoot = ({ className, shape, size, ...props }: AvatarRootProps) => {
  const { root } = avatarStyles({ shape, size });
  const [status, setStatus] = React.useState<Status>("idle");
  return (
    <AvatarContext.Provider value={{ status, onStatusChange: setStatus }}>
      <span className={root({ className })} {...props} />
    </AvatarContext.Provider>
  );
};

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onStatusChange?: (status: Status) => void;
}
const AvatarImage = ({ src, onStatusChange, className, ...props }: AvatarImageProps) => {
  const { image } = avatarStyles();
  const context = useAvatarContext();
  const status = useImageLoadingStatus(src);
  // TODO use useCallBackRef here
  const handleStatusChange = React.useCallback(
    (status: Status) => {
      onStatusChange?.(status);
      context.onStatusChange(status);
    },
    [onStatusChange, context]
  );

  React.useLayoutEffect(() => {
    if (status !== "idle") {
      handleStatusChange(status);
    }
  }, [status, handleStatusChange]);

  return status === "success" ? (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={src} className={image({ className })} {...props} />
  ) : null;
};

type AvatarFallbackProps = React.HTMLAttributes<HTMLSpanElement>;
const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  const { fallback } = avatarStyles();
  const context = useAvatarContext();

  return context.status === "error" ? (
    <span className={fallback({ className })} {...props} />
  ) : null;
};

type AvatarPlaceholderProps = React.HTMLAttributes<HTMLSpanElement>;
const AvatarPlaceholder = ({ className, ...props }: AvatarPlaceholderProps) => {
  const { placeholder } = avatarStyles();
  const context = useAvatarContext();

  return ["idle", "loading"].includes(context.status) ? (
    <span className={placeholder({ className })} {...props} />
  ) : null;
};

type AvatarContextValue = {
  status: Status;
  onStatusChange: (status: Status) => void;
};
const AvatarContext = React.createContext<AvatarContextValue | null>(null);
const useAvatarContext = () => {
  const context = React.useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be rendered within the AvatarRoot");
  }
  return context;
};

type Status = "idle" | "loading" | "success" | "error";
const useImageLoadingStatus = (src?: string) => {
  const [status, setStatus] = React.useState<Status>("idle");

  React.useLayoutEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status: Status) => () => {
      if (!isMounted) return;
      setStatus(status);
    };
    setStatus("loading");
    image.onload = updateStatus("success");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [src]);

  return status;
};

export type { AvatarProps, AvatarRootProps, AvatarImageProps, AvatarFallbackProps };
export { Avatar, AvatarRoot, AvatarImage, AvatarFallback, AvatarPlaceholder, avatarStyles };
