"use client";

import * as React from "react";
import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
  type TabsProps as AriaTabsProps,
  type TabListProps as AriaTabListProps,
  type TabProps as AriaTabProps,
  type TabPanelProps as AriaTabPanelProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "@/lib/utils/styles";

const tabsStyles = tv({
  slots: {
    root: "flex flex-col orientation-vertical:flex-row [&_[role=tabpanel]]:orientation-horizontal:mt-2 [&_[role=tabpanel]]:orientation-vertical:ml-2",
    list: "flex orientation-horizontal:overflow-x-auto orientation-horizontal:whitespace-nowrap orientation-horizontal:items-center orientation-horizontal:border-b orientation-vertical:flex-col orientation-vertical:border-r [&_[role=tab]]:orientation-horizontal:border-b-[3px] [&_[role=tab]]:orientation-vertical:border-r-[3px]",
    tab: [
      "cursor-pointer text-center text-fg-muted border-transparent selected:border-border-focus selected:text-fg -mb-px px-2 py-2 text-sm font-medium outline-none transition-colors disabled:text-fg-disabled disabled:cursor-default disabled:selected:border-border-disabled",
      "[&>span]:py-1 [&>span]:px-1.5 [&>span]:rounded-md [&>span]:border-2 [&>span]:border-transparent [&>span]:focus-visible:border-border-focus",
    ],
    panel: [focusRing(), "rounded"],
  },
});

interface TabsProps extends Omit<AriaTabsProps, "className"> {
  className?: string;
}
const Tabs = ({ className, ...props }: TabsProps) => {
  const { root } = tabsStyles();
  return <AriaTabs className={root({ className })} {...props} />;
};

interface TabListProps<T> extends Omit<AriaTabListProps<T>, "className"> {
  className?: string;
}
const TabList = <T extends object>({ className, ...props }: TabListProps<T>) => {
  const { list } = tabsStyles();
  return (
    <AriaTabList {...props} className={list({ className })} style={{ scrollbarWidth: "none" }} />
  );
};

interface TabProps extends Omit<AriaTabProps, "className"> {
  className?: string;
}
const Tab = ({ className, ...props }: TabProps) => {
  const { tab } = tabsStyles();
  return (
    <AriaTab className={tab({ className })} {...props}>
      {composeRenderProps(props.children, (children) => (
        <span>{children}</span>
      ))}
    </AriaTab>
  );
};

interface TabPanelProps extends Omit<AriaTabPanelProps, "className"> {
  className?: string;
}
const TabPanel = ({ className, ...props }: TabPanelProps) => {
  const { panel } = tabsStyles();
  return <AriaTabPanel className={panel({ className })} {...props} />;
};

export type { TabsProps, TabListProps, TabProps, TabPanelProps };
export { Tabs, TabList, Tab, TabPanel };
