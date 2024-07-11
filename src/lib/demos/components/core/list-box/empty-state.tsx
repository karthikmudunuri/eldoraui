"use client";

import { ListBox } from "@/lib/components/core/default/list-box";

export default function Demo() {
  return (
    <ListBox aria-label="Search results" renderEmptyState={() => "No results found."}></ListBox>
  );
}
