"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";
import { TextField } from "@/lib/components/core/default/text-field";
import { useDebounce } from "@/lib/hooks/use-debounce";

export default function Demo() {
  const [searchInput, setSearchInput] = React.useState("");
  const debouncedValue = useDebounce(searchInput, 1000);

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <SearchIcon
          size={18}
          className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 transform text-fg-muted"
        />
        <TextField
          value={searchInput}
          onChange={(value) => {
            setSearchInput(value);
          }}
          placeholder="Search"
          className="full-w pl-8"
        />
      </div>
      <div className="mt-10 text-center">
        {debouncedValue ? (
          <p>Results for &quot;{debouncedValue}&quot;</p>
        ) : (
          <p className="text-fg-muted">Start searching</p>
        )}
      </div>
    </div>
  );
}
