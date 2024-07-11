"use client";

import { SettingsIcon } from "lucide-react";
import { useConfig } from "@/hooks/use-config";
import { Button } from "@/lib/components/core/default/button";
import { Dialog, DialogRoot } from "@/lib/components/core/default/dialog";
import { Item } from "@/lib/components/core/default/list-box";
import { Select } from "@/lib/components/core/default/select";
import type { IconLibrary } from "@/types/icons";

const ThemeCustomizer = () => {
  const { iconLibrary, setIconLibrary } = useConfig();
  return (
    <DialogRoot>
      <Button
        aria-label="Customize Theme"
        variant="quiet"
        size="sm"
        shape="square"
        className="absolute right-2 top-2"
      >
        <SettingsIcon />
      </Button>
      <Dialog type="popover" title="Customize theme">
        <Select
          selectedKey={iconLibrary}
          onSelectionChange={(key) => setIconLibrary(key as IconLibrary)}
        >
          <Item id="lucide">Lucide icons</Item>
          <Item id="remix">Remix icons</Item>
          <Item id="radix">Radix icons</Item>
          <Item id="heroicons">Heroicons</Item>
          <Item id="feather">Feather icons</Item>
        </Select>
      </Dialog>
    </DialogRoot>
  );
};

export { ThemeCustomizer };
