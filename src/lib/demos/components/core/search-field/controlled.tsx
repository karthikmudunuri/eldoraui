"use client";

import React from "react";
import { SearchField } from "@/lib/components/core/default/search-field";

export default function Demo() {
  const [inputValue, setInputValue] = React.useState("Is dotUI the next-gen ui lib?");
  return (
    <div className="flex flex-col items-center gap-4">
      <SearchField value={inputValue} onChange={setInputValue} />
      <p className="text-sm text-fg-muted">mirrored search text: {inputValue}</p>
    </div>
  );
}
