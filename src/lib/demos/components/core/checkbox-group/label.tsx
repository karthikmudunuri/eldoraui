import { Checkbox } from "@/lib/components/core/default/checkbox";
import { CheckboxGroup } from "@/lib/components/core/default/checkbox-group";

export default function Demo() {
  return (
    <div className="flex items-center gap-10">
      <CheckboxGroup label="React frameworks" defaultValue={["nextjs"]}>
        <Checkbox value="nextjs">Next.js</Checkbox>
        <Checkbox value="remix">Remix</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup aria-label="React frameworks" defaultValue={["nextjs"]}>
        <Checkbox value="nextjs">Next.js</Checkbox>
        <Checkbox value="remix">Remix</Checkbox>
      </CheckboxGroup>
    </div>
  );
}
