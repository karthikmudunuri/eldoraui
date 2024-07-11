import { ListBox, Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <ListBox aria-label="Favorite framework" selectionMode="single">
      <Item>Next.js</Item>
      <Item>Remix</Item>
      <Item isDisabled>Gatsby</Item>
      <Item>Astro</Item>
    </ListBox>
  );
}
