import React from "react";
import { CodeBlock } from "@/components/code-block";
import { getComponentSource } from "@/server/component-source";

export const ComponentSource = ({
  name,
  className,
}: {
  name: string | string[];
  className?: string;
}) => {
  let code: { title: string; code: string }[] = [];

  if (typeof name === "string") {
    code = getComponentSource(name);
  }

  if (Array.isArray(name)) {
    code = name.flatMap((n) => getComponentSource(n));
  }

  if (code.length === 0) {
    return <p>Source code not found</p>;
  }

  return (
    <CodeBlock
      files={code.map((file) => ({ fileName: file.title, code: file.code, lang: "tsx" }))}
      className={className}
      expandable
    />
  );
};
