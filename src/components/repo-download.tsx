import { ReactNode } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {  Download } from "lucide-react";
import { cn } from "@/lib/utils/classes";
import { buttonVariants } from "@/components/buttons";

export default function Repodownload({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: "outline",
        }),
        "not-prose group relative w-full gap-2",
      )}
      href={href}
      target="_blank"
    >
      {children}
      <Download className="size-4" />
    </Link>
  );
}