import React from "react";
import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
  AvatarPlaceholder,
} from "@/lib/components/core/default/avatar";
import { UserIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <AvatarRoot>
      <AvatarImage src="https://github.com/mehdibha.png" alt="@mehdibha" />
      <AvatarFallback>M</AvatarFallback>
      <AvatarPlaceholder>
        <UserIcon className="size-5" />
      </AvatarPlaceholder>
    </AvatarRoot>
  );
}
