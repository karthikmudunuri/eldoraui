import { Button } from "@/lib/components/core/default/button";
import { MenuContent, MenuItem, MenuRoot } from "@/lib/components/core/default/menu";
import { Overlay } from "@/lib/components/core/default/overlay";
import { MenuIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <MenuRoot>
      <Button variant="outline" shape="square">
        <MenuIcon />
      </Button>
      <Overlay type="popover" mobileType="drawer">
        <MenuContent>
          <MenuItem>Account settings</MenuItem>
          <MenuItem>Create team</MenuItem>
          <MenuItem>Command menu</MenuItem>
          <MenuItem>Log out</MenuItem>
        </MenuContent>
      </Overlay>
    </MenuRoot>
  );
}
