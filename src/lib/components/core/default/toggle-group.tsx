"use client";

// This compnoent is not ready for production use. It is a work in progress.
import * as React from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useToolbar, type AriaToolbarProps } from "@react-aria/toolbar";
import {
  useToggleButton,
  type AriaToggleButtonProps,
  useHover,
  useFocusRing,
  mergeProps,
} from "react-aria";
import { useToggleState } from "react-stately";
import { tv, type VariantProps } from "tailwind-variants";
import { toggleButtonStyles } from "./toggle-button";

const toggleGroupVariants = tv({
  base: "flex items-center gap-1",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface ToggleGroupButtonProps
  extends Omit<AriaToggleButtonProps, "type">,
    VariantProps<typeof toggleButtonStyles> {
  value: string;
  className?: string;
}

const ToggleGroupButton = ({
  variant,
  size,
  shape,
  value,
  className,
  ...props
}: ToggleGroupButtonProps) => {
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const context = useToggleGroup();
  const additionalProps =
    context && value
      ? {
          isSelected: context.value.includes(value),
          onChange: (isSelected: boolean) => {
            if (isSelected) {
              context.onItemActivate(value);
            } else {
              context.onItemDeactivate(value);
            }
          },
          isDisabled: context.isDisabled || props.isDisabled || false,
        }
      : {};
  const state = useToggleState({ ...props, ...additionalProps });
  const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
  const { hoverProps, isHovered } = useHover(props);
  const { buttonProps, isPressed } = useToggleButton({ ...props, ...additionalProps }, state, ref);

  const singleProps = {
    role: "radio",
    "aria-checked": state.isSelected,
    "aria-pressed": undefined,
  };
  const typeProps = !context.multiple ? singleProps : undefined;

  return (
    <button
      ref={ref}
      {...typeProps}
      data-focused={isFocused ? "true" : undefined}
      data-disabled={props.isDisabled ? "true" : undefined}
      data-pressed={isPressed ? "true" : undefined}
      data-selected={state.isSelected ? "true" : undefined}
      data-hovered={isHovered ? "true" : undefined}
      data-focus-visible={isFocusVisible ? "true" : undefined}
      className={toggleButtonStyles({
        variant: variant ?? context?.variant,
        size: size ?? context?.size,
        shape: shape ?? context?.shape,
        className: className,
      })}
      {...mergeProps(buttonProps, focusProps, hoverProps)}
    >
      {props.children}
    </button>
  );
};

type ToggleGroupProps =
  | (ToggleGroupSingleProps & { multiple?: false })
  | (ToggleGroupMultipleProps & { multiple: true });

const ToggleGroup = (props: ToggleGroupProps) => {
  const { multiple = false, orientation = "horizontal", ...toggleGroupProps } = props;

  if (multiple) {
    const multipleProps = toggleGroupProps as ToggleGroupMultipleProps;
    return <ToggleGroupMultiple orientation={orientation} {...multipleProps} />;
  }

  const singleProps = toggleGroupProps as ToggleGroupSingleProps;
  return <ToggleGroupSingle orientation={orientation} {...singleProps} />;
};

interface ToggleGroupSingleProps
  extends AriaToolbarProps,
    VariantProps<typeof toggleButtonStyles>,
    VariantProps<typeof toggleGroupVariants> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ToggleGroupSingle = (props: ToggleGroupSingleProps) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
      // do nothing
    },
    isDisabled,
    orientation = "horizontal",
    variant,
    size,
    shape,
    className,
  } = props;
  const ref = React.useRef(null);
  const { toolbarProps } = useToolbar(props, ref);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  return (
    <ToggleGroupContext.Provider
      value={{
        multiple: false,
        value: value ? [value] : [],
        onItemActivate: setValue,
        onItemDeactivate: React.useCallback(() => setValue(""), [setValue]),
        variant,
        size,
        shape,
        isDisabled,
      }}
    >
      <div
        {...toolbarProps}
        ref={ref}
        role="group"
        className={toggleGroupVariants({
          orientation,
          className,
        })}
      >
        {props.children}
      </div>
    </ToggleGroupContext.Provider>
  );
};

interface ToggleGroupMultipleProps
  extends AriaToolbarProps,
    VariantProps<typeof toggleGroupVariants>,
    VariantProps<typeof toggleButtonStyles> {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ToggleGroupMultiple = (props: ToggleGroupMultipleProps) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
      // do nothing
    },
    variant,
    size,
    shape,
    orientation,
    className,
  } = props;
  const ref = React.useRef(null);
  const { toolbarProps } = useToolbar(props, ref);

  const [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  return (
    <ToggleGroupContext.Provider
      value={{
        multiple: true,
        value: value,
        onItemActivate: React.useCallback(
          (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
          [setValue]
        ),
        onItemDeactivate: React.useCallback(
          (itemValue: string) =>
            setValue((prevValue = []) => prevValue.filter((value) => value !== itemValue)),
          [setValue]
        ),
        variant,
        size,
        shape,
      }}
    >
      <div
        {...toolbarProps}
        ref={ref}
        role="group"
        className={toggleGroupVariants({
          orientation,
          className,
        })}
      >
        {props.children}
      </div>
    </ToggleGroupContext.Provider>
  );
};

type ToggleGroupValueContextValue = {
  multiple: boolean;
  value: string[];
  onItemActivate(value: string): void;
  onItemDeactivate(value: string): void;
  isDisabled?: boolean;
} & VariantProps<typeof toggleButtonStyles>;

const ToggleGroupContext = React.createContext<ToggleGroupValueContextValue | null>(null);

const useToggleGroup = () => {
  const context = React.useContext(ToggleGroupContext);
  if (!context) {
    throw new Error("ToggleGroupButton should be used within a ToggleGroup");
  }
  return context;
};

export { ToggleGroup, ToggleGroupButton, toggleGroupVariants };
