import React from "react";
import { Button } from "@/lib/components/core/default/button";
import { Menu, MenuItem, MenuRoot } from "@/lib/components/core/default/menu";

export default function Demo() {
  return (
    <MenuRoot>
      <Button variant="outline" size="sm">
        Panels
      </Button>
      <Menu selectionMode="multiple" defaultSelectedKeys={["sidebar", "searchbar", "console"]}>
        <MenuItem id="sidebar">Sidebar</MenuItem>
        <MenuItem id="searchbar">Searchbar</MenuItem>
        <MenuItem id="tools">Tools</MenuItem>
        <MenuItem id="console">Console</MenuItem>
      </Menu>
    </MenuRoot>
  );
}
