import React from "react";
import { NumberField } from "@/lib/components/core/default/number-field";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <NumberField
        label="Decimal"
        defaultValue={0}
        formatOptions={{
          signDisplay: "exceptZero",
          minimumFractionDigits: 1,
          maximumFractionDigits: 2,
        }}
      />
      <NumberField
        label="Percentage"
        defaultValue={0.05}
        formatOptions={{
          style: "percent",
        }}
      />
      <NumberField
        label="Currency"
        defaultValue={45}
        formatOptions={{
          style: "currency",
          currency: "EUR",
          currencyDisplay: "code",
          currencySign: "accounting",
        }}
      />
      <NumberField
        label="Unit"
        defaultValue={4}
        formatOptions={{
          style: "unit",
          unit: "inch",
          unitDisplay: "long",
        }}
      />
    </div>
  );
}
