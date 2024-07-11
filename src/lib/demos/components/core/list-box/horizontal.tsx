import { ListBox, Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <ListBox aria-label="Options" orientation="horizontal" selectionMode="single">
      <Item textValue="Read" label="Read" description="Read Only" />
      <Item textValue="Write" label="Write" description="Read and Write Only" />
      <Item textValue="Admin" label="Admin" description="Full access" />
    </ListBox>
  );
}
