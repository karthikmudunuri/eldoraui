import { Skeleton } from "@/lib/components/core/default/skeleton";

export default function Demo() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-44 w-64" />
      <div className="flex items-center space-x-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-44" />
          <Skeleton className="h-4 w-36" />
        </div>
      </div>
    </div>
  );
}
