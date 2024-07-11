"use client";

import React from "react";
import type { Key } from "react-aria-components";
import { Combobox } from "@/lib/components/core/default/combobox";
import { Item } from "@/lib/components/core/default/list-box";

export default function Demo() {
  const [country, setCountry] = React.useState<Key | null>("tn");
  return (
    <div className="flex flex-col items-center gap-6">
      <Combobox aria-label="country" selectedKey={country} onSelectionChange={setCountry}>
        <Item id="ca">Canada</Item>
        <Item id="fr">France</Item>
        <Item id="de">Germany</Item>
        <Item id="es">Spain</Item>
        <Item id="tn">Tunisia</Item>
        <Item id="us">United States</Item>
        <Item id="uk">United Kingdom</Item>
      </Combobox>
      <p className="text-sm text-fg-muted">
        {country ? (
          <>
            You selected: <span className="font-bold text-fg">{country}</span>
          </>
        ) : (
          "Select a country."
        )}
      </p>
    </div>
  );
}
