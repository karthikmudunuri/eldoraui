import { DateField } from "@/lib/components/core/default/date-field";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <DateField label="small (sm)" size="sm" />
      <DateField label="medium (md)" size="md" />
      <DateField label="large (lg)" size="lg" />
    </div>
  );
}
