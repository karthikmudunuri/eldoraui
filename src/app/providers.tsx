"use client";

import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div drawer-wrapper="" className="bg-bg">
          {children}
        </div>
      </ThemeProvider>
    </RouterProvider>
  );
}
