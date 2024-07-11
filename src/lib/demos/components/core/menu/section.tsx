import { Button } from "@/lib/components/core/default/button";
import { Menu, MenuItem, MenuRoot } from "@/lib/components/core/default/menu";
import { Section } from "@/lib/components/core/default/section";
import { MenuIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <MenuRoot>
      <Button variant="outline" shape="square">
        <MenuIcon />
      </Button>
      <Menu>
        <Section title="Notifications">
          <MenuItem>Push notifications</MenuItem>
          <MenuItem>Badges</MenuItem>
        </Section>
        <Section title="Panels">
          <MenuItem id="console">Console</MenuItem>
          <MenuItem>Search</MenuItem>
        </Section>
      </Menu>
    </MenuRoot>
  );
}
