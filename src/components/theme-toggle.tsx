"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/lib/components/core/default/button";
import { Item, ListBox } from "@/lib/components/core/default/list-box";
import { Overlay } from "@/lib/components/core/default/overlay";
import { SelectRoot } from "@/lib/components/core/default/select";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SelectRoot
      selectedKey={theme}
      onSelectionChange={(key) => setTheme(key as string)}
      aria-label="Change Theme"
    >
      <Button size="sm" variant="quiet" shape="square" className="[&_svg]:size-[18px]">
        <SunIcon className="block dark:hidden" />
        <MoonIcon className="hidden dark:block" />
      </Button>
      <Overlay placement="bottom right" type="popover">
        <ListBox>
          <Item id="system">System</Item>
          <Item id="light">Light</Item>
          <Item id="dark">Dark</Item>
        </ListBox>
      </Overlay>
    </SelectRoot>
  );
};
