import React from "react";
import { SearchField } from "@/lib/components/core/default/search-field";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <SearchField isLoading loaderPosition="prefix" />
      <SearchField isLoading loaderPosition="suffix" />
    </div>
  );
}
