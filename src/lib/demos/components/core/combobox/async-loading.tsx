"use client";

import { useAsyncList } from "react-stately";
import { Combobox } from "@/lib/components/core/default/combobox";
import { Item } from "@/lib/components/core/default/list-box";

interface Character {
  name: string;
}

export default function Demo() {
  const list = useAsyncList<Character>({
    async load({ signal }) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon`, { signal });
      const json = (await res.json()) as { results: Character[] };
      return {
        items: json.results,
      };
    },
  });

  return (
    <Combobox label="Pokemon" items={list.items} isLoading={list.isLoading}>
      {(item) => <Item id={item.name}>{item.name}</Item>}
    </Combobox>
  );
}
