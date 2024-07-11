/* eslint-disable */

/* This hook is in progress */
import React from "react";
import { OverlayTriggerStateContext } from "react-aria-components";

interface useMotionDrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  scaleBackground?: boolean;
  closeThreshold?: number;
  scrollLockTimeout?: number;
  isDismissable?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
}

type AnimationState = "unmounted" | "hidden" | "visible";

export const useMotionDrawer = (props: useMotionDrawerProps) => {
  const {
    scaleBackground = true,
    closeThreshold = CLOSE_THRESHOLD,
    scrollLockTimeout = SCROLL_LOCK_TIMEOUT,
    isDismissable = true,
    placement = "bottom",
  } = props;
  const contextState = React.useContext(OverlayTriggerStateContext);
  const context = React.useContext(DrawerInternalContext);
  const state = contextState;
  const [animation, setAnimation] = React.useState<AnimationState>("unmounted");
  const isEntering = animation === "visible";
  const isExiting = animation === "hidden";
  const nested = !!context;

  const drawerRef = React.useRef<HTMLDivElement>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const dragStartTime = React.useRef<Date | null>(null);
  const dragEndTime = React.useRef<Date | null>(null);

  const [isDragging, setDragging] = React.useState(false);
  const drawerHeightRef = React.useRef(drawerRef.current?.getBoundingClientRect().height || 0);
  const pointerStartRef = React.useRef<{ x: number; y: number } | null>(null);
  const pointerStart = React.useRef(0);
  const keyboardIsOpen = React.useRef(false);
  const initialDrawerHeight = React.useRef(0);
  const previousDiffFromInitial = React.useRef(0);

  function shouldDrag(el: EventTarget) {
    // TODO: add more conditions (scrollLockTimeout / when animating / placement right and left / swipe amout? / scrollable element / ...)
    const selectedText = window.getSelection()?.toString();
    if (selectedText && selectedText.length > 0) return false;
    if (!isVertical(placement)) return true;
    // TODO: Disallow drag when entering or exiting
    const swipeAmount = drawerRef.current ? getTranslate(drawerRef.current, placement) : null;
    if (swipeAmount !== null && (placement === "bottom" ? swipeAmount > 0 : swipeAmount < 0))
      return true;
    // TODO: SCROLLLOCKTIMEOUT
    // TODO: DRAG IN placement
    let element = el as HTMLElement;
    while (element) {
      if (element.scrollHeight > element.clientHeight) {
        if (element.scrollTop !== 0) {
          return false;
        }
        if (element.getAttribute("role") === "dialog") {
          return true;
        }
      }
      element = element.parentNode as HTMLElement;
    }
    return true;
  }

  function resetDrawer() {
    if (!drawerRef.current) return;
    const wrapper = document.querySelector("[drawer-wrapper]");
    const currentSwipeAmount = getTranslate(drawerRef.current, placement);
    set(drawerRef.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
    set(backdropRef.current, {
      transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
      opacity: "1",
    });
    // TODO: put this in a function (resetBody)
    if (
      scaleBackground &&
      currentSwipeAmount &&
      currentSwipeAmount > 0 &&
      state.isOpen &&
      !nested
    ) {
      set(
        wrapper,
        {
          borderRadius: `${BORDER_RADIUS}px`,
          ...(isVertical(placement)
            ? {
                transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                transformOrigin: "top",
              }
            : {
                transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                transformOrigin: "left",
              }),
          transitionProperty: "transform, border-radius",
          transitionDuration: `${TRANSITIONS.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
        },
        true
      );
    }
  }

  function onPress(event: React.PointerEvent<HTMLDivElement>) {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) return;
    drawerHeightRef.current = drawerRef.current?.getBoundingClientRect().height || 0;
    setDragging(true);
    dragStartTime.current = new Date();
    // if (isIOS()) {
    //   window.addEventListener('touchend', () => (isAllowedToDrag.current = false), { once: true });
    // }
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    pointerStart.current = isVertical(placement) ? event.clientY : event.clientX;
  }

  function onDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (!drawerRef.current || !isDragging || !shouldDrag(event.target)) return;
    const placementMultiplier = placement === "bottom" || placement === "right" ? 1 : -1;
    const draggedDistance =
      (pointerStart.current - (isVertical(placement) ? event.clientY : event.clientX)) *
      placementMultiplier;
    const isDraggingInDirection = draggedDistance > 0;
    const absDraggedDistance = Math.abs(draggedDistance);
    const wrapper = document.querySelector("[drawer-wrapper]");
    const percentageDragged = absDraggedDistance / drawerHeightRef.current;
    if (nested) context.onNestedDrag(percentageDragged);
    set(drawerRef.current, { transition: "none" }); // WHY?
    set(backdropRef.current, { transition: "none" }); // WHY?
    if (isDraggingInDirection) {
      const dampenedDraggedDistance = dampenValue(draggedDistance);
      const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * placementMultiplier;
      set(drawerRef.current, {
        transform: isVertical(placement)
          ? `translate3d(0, ${translateValue}px, 0)`
          : `translate3d(${translateValue}px, 0, 0)`,
      });
      return;
    }
    const opacityValue = 1 - percentageDragged;
    set(backdropRef.current, { opacity: `${opacityValue}`, transition: "none" }, true);
    if (wrapper && backdropRef.current && scaleBackground && !nested) {
      // Calculate percentageDragged as a fraction (0 to 1)
      const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);
      const borderRadiusValue = 8 - percentageDragged * 8;
      const translateValue = Math.max(0, 14 - percentageDragged * 14);
      set(
        wrapper,
        {
          borderRadius: `${borderRadiusValue}px`,
          transform: isVertical(placement)
            ? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)`
            : `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,
          transition: "none",
        },
        true
      );
    }
    const translateValue = absDraggedDistance * placementMultiplier;
    set(drawerRef.current, {
      transform: isVertical(placement)
        ? `translate3d(0, ${translateValue}px, 0)`
        : `translate3d(${translateValue}px, 0, 0)`,
    });

    // TODO: transform body
  }

  function onRelease(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging || !drawerRef.current) return;
    if (nested) context.onNestedRelease(true);
    setDragging(false);
    dragEndTime.current = new Date();
    const swipeAmount = getTranslate(drawerRef.current, placement);
    if (!shouldDrag(event.target) || !swipeAmount || isNaN(swipeAmount)) return;
    if (dragStartTime.current === null) return;
    // TODO: check for justReleased (to not focus on an element on drag end)
    const timeTaken = dragEndTime.current.getTime() - dragStartTime.current.getTime();
    const distMoved =
      pointerStart.current - (isVertical(placement) ? event.clientY : event.clientX);
    const velocity = Math.abs(distMoved) / timeTaken;
    if (placement === "bottom" || placement === "right" ? distMoved > 0 : distMoved < 0) {
      resetDrawer();
      return;
    }
    if (velocity > VELOCITY_THRESHOLD) {
      closeDrawer();
      return;
    }
    const visibleDrawerHeight = Math.min(
      drawerRef.current.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (swipeAmount >= visibleDrawerHeight * closeThreshold) {
      closeDrawer();
      return;
    }
    resetDrawer();
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    onPress(event);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!pointerStartRef.current) return;
    // TODO: Is allowed to swipe check?
    onDrag(event);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    pointerStartRef.current = null;
    onRelease(event);
  }

  function getScale() {
    return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
  }

  function animateBody() {
    if (nested) return;
    const wrapper = document.querySelector("[drawer-wrapper]");
    if (!wrapper || !scaleBackground) return;
    set(document.body, {
      background: document.body.style.backgroundColor || document.body.style.background,
    });
    set(document.body, { background: "black" }, true);
    set(wrapper, {
      borderRadius: `${BORDER_RADIUS}px`,
      ...(isVertical(placement)
        ? {
            transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
            transformOrigin: "top",
          }
        : {
            transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
            transformOrigin: "left",
          }),
      transitionProperty: "transform, border-radius",
      transitionDuration: `${TRANSITIONS.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
  }

  function resetBody() {
    if (nested) return;
    const wrapper = document.querySelector("[drawer-wrapper]");
    if (!wrapper || !scaleBackground) return;
    reset(wrapper, "overflow");
    reset(wrapper, "transform");
    reset(wrapper, "borderRadius");
    set(wrapper, {
      transitionProperty: "transform, border-radius",
      transitionDuration: `${TRANSITIONS.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
  }

  function openDrawer() {
    if (!drawerRef.current) return;
    if (nested) context.onNestedOpenChange(true);
    setAnimation("visible");
    animateBody();
    set(drawerRef.current, {
      transform: `translate3d(0, 0, 0)`,
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
    set(backdropRef.current, {
      opacity: "1",
      transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
  }

  function closeDrawer() {
    if (!drawerRef.current) return;
    if (nested) context.onNestedOpenChange(false);
    setAnimation("hidden");
    resetBody();
    set(drawerRef.current, {
      transform: isVertical(placement)
        ? `translate3d(0, ${placement === "bottom" ? "100%" : "-100%"}, 0)`
        : `translate3d(${placement === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
    set(backdropRef.current, {
      opacity: "0",
      transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
    });
  }

  function handleTransitionEnd() {
    if (isExiting) {
      setAnimation("unmounted");
      reset(document.body);
      state.close();
    }
  }

  function handleOpenChange(isOpen: boolean) {
    if (!isOpen) {
      closeDrawer();
    }
  }

  function handleNestedOpenChange(isOpen: boolean) {
    const scale = isOpen ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;
    const y = isOpen ? -NESTED_DISPLACEMENT : 0;
    set(drawerRef.current, {
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
      transform: `scale(${scale}) translate3d(0, ${y}px, 0)`,
    });
  }

  function handleNestedDrag(percentageDragged: number) {
    if (percentageDragged < 0) return;
    const initialDim = isVertical(placement) ? window.innerHeight : window.innerWidth;
    const initialScale = (initialDim - NESTED_DISPLACEMENT) / initialDim;
    const newScale = initialScale + percentageDragged * (1 - initialScale);
    const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;
    set(drawerRef.current, {
      transform: isVertical(placement)
        ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)`
        : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
      transition: "none",
    });
  }

  function handleNestedRelease(isOpen: boolean) {
    const dim = isVertical(placement) ? window.innerHeight : window.innerWidth;
    const scale = isOpen ? (dim - NESTED_DISPLACEMENT) / dim : 1;
    const translate = isOpen ? -NESTED_DISPLACEMENT : 0;
    if (isOpen) {
      set(drawerRef.current, {
        transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
        transform: isVertical(placement)
          ? `scale(${scale}) translate3d(0, ${translate}px, 0)`
          : `scale(${scale}) translate3d(${translate}px, 0, 0)`,
      });
    }
  }

  // TODO: ADD LOGIC FOR INPUT KEYBOARD OPEN ON MOBILE

  React.useEffect(() => {
    function onVisualViewportChange() {
      if (!drawerRef.current) return;
      const focusedElement = document.activeElement as HTMLElement;
      if (isInput(focusedElement) || keyboardIsOpen.current) {
        const visualViewportHeight = window.visualViewport?.height || 0;
        const diffFromInitial = window.innerHeight - visualViewportHeight;
        const drawerHeight = drawerRef.current.getBoundingClientRect().height || 0;
        if (!initialDrawerHeight.current) {
          initialDrawerHeight.current = drawerHeight;
        }
        const offsetFromTop = drawerRef.current.getBoundingClientRect().top;
        if (Math.abs(previousDiffFromInitial.current - diffFromInitial) > 60) {
          keyboardIsOpen.current = !keyboardIsOpen.current;
        }
        previousDiffFromInitial.current = diffFromInitial;
        if (drawerHeight > visualViewportHeight || keyboardIsOpen.current) {
          const height = drawerRef.current.getBoundingClientRect().height;
          let newDrawerHeight = height;
          if (height > visualViewportHeight) {
            newDrawerHeight = visualViewportHeight - WINDOW_TOP_OFFSET;
          }
          drawerRef.current.style.height = `${Math.max(newDrawerHeight, visualViewportHeight - offsetFromTop)}px`;
        } else {
          drawerRef.current.style.height = `${initialDrawerHeight.current}px`;
        }
        drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
      }
    }
    window.visualViewport?.addEventListener("resize", onVisualViewportChange);
    return () => window.visualViewport?.removeEventListener("resize", onVisualViewportChange);
  }, []);

  React.useEffect(() => {
    if (state.isOpen) {
      openDrawer();
    } else {
      if (!nested) {
        resetBody(); // to ensure that always the body is reset.
      }
    }
    return () => {
      resetBody();
    };
  }, [state.isOpen]);

  const rootProps = {
    value: {
      onNestedOpenChange: handleNestedOpenChange,
      onNestedDrag: handleNestedDrag,
      onNestedRelease: handleNestedRelease,
    },
  };

  const drawerProps = {
    ref: drawerRef,
    "data-rac": "",
    "data-drawer": "",
    "data-placement": placement,
    "data-open": state.isOpen || undefined,
    onTransitionEnd: handleTransitionEnd,
    onPointerUp,
    onPointerDown,
    onPointerMove,
  };

  const modalProps = {
    isOpen: state.isOpen,
    onOpenChange: handleOpenChange,
    isExiting,
  };

  const backdropProps = { ref: backdropRef };

  return {
    rootProps,
    modalProps,
    drawerProps,
    backdropProps,
  };
};

export const MotionDrawerRoot = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: DrawerInternalContextValue;
}) => {
  return <DrawerInternalContext.Provider value={value}>{children}</DrawerInternalContext.Provider>;
};

interface DrawerInternalContextValue {
  onNestedOpenChange: (isOpen: boolean) => void;
  onNestedDrag: (percentageDragged: number) => void;
  onNestedRelease: (isOpen: boolean) => void;
}

export const DrawerInternalContext = React.createContext<DrawerInternalContextValue | null>(null);

export const useDrawerInternalContext = () => {
  const context = React.useContext(DrawerInternalContext);
  return context;
};

// Constants

const CLOSE_THRESHOLD = 0.25;
const SCROLL_LOCK_TIMEOUT = 100;
const BORDER_RADIUS = 8;
const WINDOW_TOP_OFFSET = 26;
const TRANSITIONS = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1],
};
const VELOCITY_THRESHOLD = 0.4;
const NESTED_DISPLACEMENT = 16;

// Types

type DrawerPlacement = "top" | "bottom" | "left" | "right";

// Helpers

type Style = Record<string, string>;

const cache = new WeakMap();

export function isInView(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();

  if (!window.visualViewport) return false;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    // Need + 40 for safari detection
    rect.bottom <= window.visualViewport.height - 40 &&
    rect.right <= window.visualViewport.width
  );
}

export function set(
  el: Element | HTMLElement | null | undefined,
  styles: Style,
  ignoreCache = false
) {
  if (!el || !(el instanceof HTMLElement)) return;
  const originalStyles: Style = {};

  Object.entries(styles).forEach(([key, value]: [string, string]) => {
    if (key.startsWith("--")) {
      el.style.setProperty(key, value);
      return;
    }

    originalStyles[key] = (el.style as any)[key];
    (el.style as any)[key] = value;
  });

  if (ignoreCache) return;

  cache.set(el, originalStyles);
}

export function reset(el: Element | HTMLElement | null, prop?: string) {
  if (!el || !(el instanceof HTMLElement)) return;
  const originalStyles = cache.get(el);

  if (!originalStyles) {
    return;
  }

  if (prop) {
    (el.style as any)[prop] = originalStyles[prop];
  } else {
    Object.entries(originalStyles).forEach(([key, value]) => {
      (el.style as any)[key] = value;
    });
  }
}

export const isVertical = (placement: DrawerPlacement) => {
  switch (placement) {
    case "top":
    case "bottom":
      return true;
    case "left":
    case "right":
      return false;
    default:
      return placement satisfies never;
  }
};

export function getTranslate(element: HTMLElement, placement: DrawerPlacement): number | null {
  if (!element) {
    return null;
  }
  const style = window.getComputedStyle(element);
  const transform =
    // @ts-ignore
    style.transform || style.webkitTransform || style.mozTransform;
  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
    return parseFloat(mat[1].split(", ")[isVertical(placement) ? 13 : 12]);
  }
  // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(", ")[isVertical(placement) ? 5 : 4]) : null;
}

export function dampenValue(v: number) {
  return 8 * (Math.log(v + 1) - 2);
}

// Additional helpers

function testPlatform(re: RegExp): boolean | undefined {
  return window?.navigator != null ? re.test(window.navigator.platform) : undefined;
}

function isMac(): boolean | undefined {
  return testPlatform(/^Mac/);
}

function isIPhone(): boolean | undefined {
  return testPlatform(/^iPhone/);
}

function isIPad(): boolean | undefined {
  return (
    testPlatform(/^iPad/) ||
    // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    (isMac() && navigator.maxTouchPoints > 1)
  );
}

function isIOS(): boolean | undefined {
  return isIPhone() || isIPad();
}

const nonTextInputTypes = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function isInput(target: Element) {
  return (
    (target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type)) ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}
