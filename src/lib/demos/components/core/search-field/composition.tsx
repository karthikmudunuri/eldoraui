import React from "react";
import { Description, Label } from "@/lib/components/core/default/field";
import { Input, InputRoot } from "@/lib/components/core/default/input";
import { SearchFieldRoot } from "@/lib/components/core/default/search-field";
import { SearchIcon } from "@/lib/icons";

export default function Demo() {
  return (
    <SearchFieldRoot>
      <Label>Search</Label>
      <InputRoot prefix={<SearchIcon />}>
        <Input />
      </InputRoot>
      <Description>Enter your search query.</Description>
    </SearchFieldRoot>
  );
}
