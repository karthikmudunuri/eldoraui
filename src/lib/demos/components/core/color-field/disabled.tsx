"use client";

import { parseColor } from "react-aria-components";
import { ColorField } from "@/lib/components/core/default/color-field";

export default function Demo() {
  return <ColorField value={parseColor("rgb(222,70,58)")} isDisabled />;
}
