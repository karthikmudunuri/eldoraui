"use client";

import React from "react";
import type { Selection } from "react-aria-components";
import { ListBox, Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(["nextjs", "remix", "astro"]));
  return (
    <div className="flex flex-col items-center gap-6">
      <ListBox
        aria-label="Framework"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item id="nextjs">Next.js</Item>
        <Item id="remix">Remix</Item>
        <Item id="astro">Astro</Item>
        <Item id="gatsby">Gatsby</Item>
      </ListBox>
      <p className="text-sm text-fg-muted">
        Selected items:{" "}
        <span className="font-semibold">
          {selected === "all" ? "all" : [...selected].join(", ")}
        </span>
      </p>
    </div>
  );
}
