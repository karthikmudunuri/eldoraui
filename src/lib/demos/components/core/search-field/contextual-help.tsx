import React from "react";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";
import { SearchField } from "@/lib/components/core/default/search-field";

export default function Demo() {
  return (
    <SearchField
      label="Search"
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you need help, please contact support."
        />
      }
    />
  );
}
