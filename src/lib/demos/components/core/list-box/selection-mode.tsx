import { ListBox, Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <div className="flex items-start gap-10">
      <ListBox aria-label="Framework" selectionMode="single">
        <Item>Next.js</Item>
        <Item>Remix</Item>
        <Item>Astro</Item>
        <Item>Gatsby</Item>
      </ListBox>
      <ListBox aria-label="Framework" selectionMode="multiple">
        <Item>Next.js</Item>
        <Item>Remix</Item>
        <Item>Astro</Item>
        <Item>Gatsby</Item>
      </ListBox>
    </div>
  );
}
