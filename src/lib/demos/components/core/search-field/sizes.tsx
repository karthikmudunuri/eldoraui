import { SearchField } from "@/lib/components/core/default/search-field";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <SearchField placeholder="small (sm)" size="sm" />
      <SearchField placeholder="medium (md)" size="md" />
      <SearchField placeholder="large (lg)" size="lg" />
    </div>
  );
}
