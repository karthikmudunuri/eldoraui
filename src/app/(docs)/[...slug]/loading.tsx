import { Loader2Icon } from "lucide-react";

// this loader is just for dev mode as all pages are statically generated
export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
      <Loader2Icon size={30} className="animate-spin" />
    </div>
  );
}
