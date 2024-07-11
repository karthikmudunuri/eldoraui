import { Separator } from "@/lib/components/core/default/separator";

export default function Demo() {
  return (
    <div className="flex items-center gap-10">
      <div className="flex h-5 items-center gap-2 text-sm">
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Hooks</div>
      </div>
      <div className="flex flex-col items-center gap-2 text-sm">
        <div>Components</div>
        <Separator orientation="horizontal" />
        <div>Hooks</div>
      </div>
    </div>
  );
}
