import { Separator } from "@/lib/components/core/default/separator";

export default function Demo() {
  return (
    <div className="space-y-2 rounded-md border p-4">
      <div>
        <h3 className="font-bold">dotUI</h3>
        <p className="text-sm text-fg-muted">Tools for building high-quality, accessible UI.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Hooks</div>
        <Separator orientation="vertical" />
        <div>Themes</div>
      </div>
    </div>
  );
}
