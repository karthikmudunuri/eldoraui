import { Button } from "@/lib/components/core/default/button";
import { Menu, MenuItem, MenuRoot } from "@/lib/components/core/default/menu";
import { Separator } from "@/lib/components/core/default/separator";

export default function Demo() {
  return (
    <MenuRoot>
      <Button variant="outline">File</Button>
      <Menu>
        <MenuItem>New...</MenuItem>
        <MenuItem>Badges</MenuItem>
        <Separator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save as...</MenuItem>
        <MenuItem>Rename...</MenuItem>
        <Separator />
        <MenuItem>Page setup…</MenuItem>
        <MenuItem>Print…</MenuItem>
      </Menu>
    </MenuRoot>
  );
}
