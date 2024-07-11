import { ListBox, Item } from "@/lib/components/core/default/list-box";
import { SquarePenIcon, PlusSquareIcon, CopyIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <ListBox aria-label="Framework" className="w-60">
      <Item label="New file" description="Create a new file" prefix={<PlusSquareIcon />} />
      <Item label="Copy link" description="Copy the file link" prefix={<CopyIcon />} />
      <Item
        label="Edit file"
        description="Allows you to edit the file"
        prefix={<SquarePenIcon />}
      />
    </ListBox>
  );
}
