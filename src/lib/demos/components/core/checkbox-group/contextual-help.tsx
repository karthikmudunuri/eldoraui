import { Checkbox } from "@/lib/components/core/default/checkbox";
import { CheckboxGroup } from "@/lib/components/core/default/checkbox-group";
import { ContextualHelp } from "@/lib/components/core/default/contextual-help";

export default function Demo() {
  return (
    <CheckboxGroup
      label="React frameworks"
      defaultValue={["nextjs"]}
      contextualHelp={
        <ContextualHelp
          title="Need help?"
          description="If you need help, please contact support."
        />
      }
    >
      <Checkbox value="nextjs">Next.js</Checkbox>
      <Checkbox value="remix">Remix</Checkbox>
      <Checkbox value="gatsby">Gatsby</Checkbox>
    </CheckboxGroup>
  );
}
