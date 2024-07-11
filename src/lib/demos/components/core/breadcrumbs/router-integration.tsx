"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs, Breadcrumb } from "@/lib/components/core/default/breadcrumbs";

export default function Demo() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs>
      {pathnames.map((elem, index) => {
        const href = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <Breadcrumb key={elem} href={href} className="capitalize">
            {elem}
          </Breadcrumb>
        );
      })}
    </Breadcrumbs>
  );
}
