import React from "react";
import { CodeBlock } from "@/components/code-block";
import { getComponentSource } from "@/server/componentj";

export const ComponentSourcej = ({
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
      files={code.map((file) => ({ fileName: file.title, code: file.code, lang: "jsx" }))}
      className={className}
      expandable
    />
  );
};
