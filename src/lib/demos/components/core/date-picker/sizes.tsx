import { DatePicker } from "@/lib/components/core/default/date-picker";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <DatePicker label="small (sm)" size="sm" />
      <DatePicker label="medium (md)" size="md" />
      <DatePicker label="large (lg)" size="lg" />
    </div>
  );
}
