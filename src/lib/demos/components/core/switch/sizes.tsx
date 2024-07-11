import { Switch } from "@/lib/components/core/default/switch";

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" defaultSelected />
      <Switch size="md" defaultSelected />
      <Switch size="lg" defaultSelected />
    </div>
  );
}
