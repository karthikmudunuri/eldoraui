"use client";

import React from "react";
import { Alert, type AlertProps } from "@/lib/components/core/default/alert";
import { RadioGroup, Radio } from "@/lib/components/core/default/radio-group";
import { Switch } from "@/lib/components/core/default/switch";

type Variant = AlertProps["variant"];

export default function Demo() {
  const [variant, setVariant] = React.useState<Variant>("default");
  const [fill, setFill] = React.useState(true);

  return (
    <div className="flex items-center gap-8">
      <Alert variant={variant} fill={fill}>
        You can add components to your app using the cli.
      </Alert>
      <Switch isSelected={fill} onChange={setFill}>
        Fill
      </Switch>
      <RadioGroup
        label="Variant"
        value={variant}
        onChange={(newVal) => setVariant(newVal as Variant)}
      >
        <Radio value="default">Default</Radio>
        <Radio value="success">Success</Radio>
        <Radio value="danger">Danger</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="info">Info</Radio>
      </RadioGroup>
    </div>
  );
}
