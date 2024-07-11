"use client";

import React from "react";
import { LaptopIcon, MonitorIcon, PhoneIcon, TabletIcon } from "lucide-react";
import { ClientOnly } from "@/lib/components/utils/client-only";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils/classes";

function Demo() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");

  return (
    <ClientOnly>
      <div className="text-center">
        <p>Resize your browser window to see changes.</p>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {[
            {
              name: "Small",
              isMatched: isSmallDevice,
              icon: <PhoneIcon size={20} />,
            },
            {
              name: "Medium",
              isMatched: isMediumDevice,
              icon: <TabletIcon size={20} />,
            },
            {
              name: "Large",
              isMatched: isLargeDevice,
              icon: <LaptopIcon size={20} />,
            },
            {
              name: "Extra Large",
              isMatched: isExtraLargeDevice,
              icon: <MonitorIcon size={20} />,
            },
          ].map(({ name, icon, isMatched }) => (
            <div
              key={name}
              className={cn(
                "flex flex-col items-center gap-2 rounded border-2 p-4",
                isMatched && "border-green-800 text-green-200"
              )}
            >
              {icon}
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </ClientOnly>
  );
}

export default function ClientOnlyDemo() {
  return (
    <ClientOnly>
      <Demo />
    </ClientOnly>
  );
}
