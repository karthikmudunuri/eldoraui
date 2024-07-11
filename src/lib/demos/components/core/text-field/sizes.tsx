import { TextField } from "@/lib/components/core/default/text-field";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <TextField placeholder="small (sm)" size="sm" />
      <TextField placeholder="medium (md)" size="md" />
      <TextField placeholder="large (lg)" size="lg" />
    </div>
  );
}
