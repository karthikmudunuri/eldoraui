import { ListBox, Item } from "@/lib/components/core/default/list-box";
import { Section } from "@/lib/components/core/default/section";

export default function Demo() {
  return (
    <ListBox aria-label="Burger contents" selectionMode="multiple">
      <Section title="Sauces">
        <Item id="signature-sauce">Signature sauce</Item>
        <Item id="bbq-sauce">BBQ sauce</Item>
        <Item id="honey-mustard">Honey mustard</Item>
        <Item id="tartar-sauce">Tartar sauce</Item>
      </Section>
      <Section title="Cheese">
        <Item id="pepperjack">Pepperjack</Item>
        <Item id="mozzarella">Mozzarella</Item>
        <Item id="blue-cheese">Blue cheese</Item>
      </Section>
      <Section title="Extras">
        <Item id="bacon">Bacon</Item>
        <Item id="sauteed-onions">Sauteed onions</Item>
        <Item id="green-pepper">Green pepper</Item>
      </Section>
    </ListBox>
  );
}
