import { ListBox, Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <ListBox
      aria-label="Framework"
      selectionMode="multiple"
      defaultSelectedKeys={["nextjs", "remix", "astro"]}
    >
      <Item id="nextjs">Next.js</Item>
      <Item id="remix">Remix</Item>
      <Item id="astro">Astro</Item>
      <Item id="gatsby">Gatsby</Item>
    </ListBox>
  );
}
