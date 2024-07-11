"use client";

import React from "react";
import { useAsyncList } from "react-stately";
import { Item } from "@/lib/components/core/default/list-box";
import { Select } from "@/lib/components/core/default/select";

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
    <Select isLoading={list.isLoading} items={list.items}>
      {(item) => <Item id={item.name}>{item.name}</Item>}
    </Select>
  );
}
