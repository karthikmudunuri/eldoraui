"use client";

import React from "react";
import { type Color, parseColor } from "react-aria-components";
import { ColorPicker } from "@/lib/components/core/default/color-picker";

export default function Demo() {
  const [value, setValue] = React.useState(parseColor("hsl(26, 33%, 78%)"));
  // React aria components should fix this type issue (normally its Color not Color & string)
  return <ColorPicker value={value as Color & string} onChange={setValue} />;
}
