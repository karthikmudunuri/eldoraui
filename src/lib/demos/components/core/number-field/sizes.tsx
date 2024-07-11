import { NumberField } from "@/lib/components/core/default/number-field";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <NumberField placeholder="small (sm)" size="sm" />
      <NumberField placeholder="medium (md)" size="md" />
      <NumberField placeholder="large (lg)" size="lg" />
    </div>
  );
}
