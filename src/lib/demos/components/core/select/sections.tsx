import React from "react";
import { Item } from "@/lib/components/core/default/list-box";
import { Section } from "@/lib/components/core/default/section";
import { Select } from "@/lib/components/core/default/select";

export default function Demo() {
  return (
    <Select label="Model">
      <Section title="OpenAI">
        <Item>GPT-4o</Item>
        <Item>GPT-4 Turbo</Item>
        <Item>GPT-4</Item>
        <Item>GPT-3.5 Turbo</Item>
      </Section>
      <Section title="Google">
        <Item>Gemini 1.5 Flash</Item>
        <Item>Gemini 1.5 Pro</Item>
        <Item>Gemini 1.0 Pro</Item>
      </Section>
      <Section title="Meta">
        <Item>Llama 3 (70B)</Item>
        <Item>Llama 3 (8B)</Item>
        <Item>Code Llama (70B)</Item>
      </Section>
      <Section title="Mistral AI">
        <Item>Mixtral 8x22B</Item>
        <Item>Mistral Large</Item>
        <Item>Mistral 7B</Item>
      </Section>
    </Select>
  );
}
