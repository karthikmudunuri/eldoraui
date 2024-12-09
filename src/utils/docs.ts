import type { DocAspect, DocType } from "@/types/docs";
import { removeLastS } from "./string";

export const getDocTypeFromSlug = (slug?: string | string[]): DocType => {
  if (!slug) return undefined;
  if (Array.isArray(slug)) {
    return removeLastS(slug[0]) as DocType;
  }
  return removeLastS(slug.split("/")[0]) as DocType;
};

export const getAspectFromType = (type: DocType): DocAspect => {
  switch (type) {
    case "hook":
      return "video";
    case "component":
      return "video";
    case "page":
      return "page";
    case "template":
      return "page";
    case "block":
      return "page";
    default:
      return "video";
  }
};
