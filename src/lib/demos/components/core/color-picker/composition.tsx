import { Button } from "@/lib/components/core/default/button";
import { ColorEditor, ColorPickerRoot } from "@/lib/components/core/default/color-picker";
import { ColorSwatch } from "@/lib/components/core/default/color-swatch";
import { Dialog, DialogRoot } from "@/lib/components/core/default/dialog";

export default function Demo() {
  return (
    <ColorPickerRoot defaultValue="#5100FF">
      <DialogRoot>
        <Button shape="square">
          <ColorSwatch />
        </Button>
        <Dialog type="popover" mobileType="drawer">
          <ColorEditor />
        </Dialog>
      </DialogRoot>
    </ColorPickerRoot>
  );
}
