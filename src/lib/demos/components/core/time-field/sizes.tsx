import { TimeField } from "@/lib/components/core/default/time-field";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <TimeField label="small (sm)" size="sm" />
      <TimeField label="medium (md)" size="md" />
      <TimeField label="large (lg)" size="lg" />
    </div>
  );
}
