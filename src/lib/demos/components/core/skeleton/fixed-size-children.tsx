import { Button } from "@/lib/components/core/default/button";
import { Skeleton } from "@/lib/components/core/default/skeleton";

export default function Demo() {
  return (
    <Skeleton className="size-20">
      <Button>Button</Button>
    </Skeleton>
  );
}
