"use client";

import { useConfig } from "@/hooks/use-config";
import { icons } from "./registry";

const createIcon = (iconName: keyof typeof icons) => {
  const icon = icons[iconName];
  const Icon = (props: { className?: string }) => {
    const { iconLibrary } = useConfig();
    const LibraryIcon = icon[iconLibrary].icon;

    return <LibraryIcon {...props} />;
  };
  return Icon;
};

export { createIcon };
