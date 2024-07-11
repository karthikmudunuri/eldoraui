"use client";

import { useIsClient } from "@/lib/hooks/use-is-client";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const isClient = useIsClient();

  if (isClient === false) {
    return null;
  }

  return children;
}
