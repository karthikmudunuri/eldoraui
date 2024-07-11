/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import { codeToHtml } from "shiki";
import { CodeClient } from "./code-client";

interface CodeProps {
  className?: string;
  children?: React.ReactNode;
  code?: string;
  lang?: string;
  inline?: boolean;
}

const Code = async ({ children, inline, lang: _lang, ...props }: CodeProps) => {
  const { code: codeStr, lang } = parseChildren(children as CodeText, _lang);
  const html = await codeToHtml(codeStr, {
    lang: lang,
    themes: {
      light: "github-light",
      dark: "github-dark-dimmed",
    },
    structure: inline ? "inline" : "classic",
  });
  const ElementType = inline ? "span" : "div";
  const code = (
    <ElementType
      className="[&_pre]:outline-none [&_span]:!bg-transparent dark:[&_span]:!text-[var(--shiki-dark)]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  return (
    <CodeClient inline={inline} code={codeStr} {...props}>
      {code}
    </CodeClient>
  );
};

type MdCodeText = {
  type: "code";
  props: { className?: string; children: string };
};

type MdMultiCodeText = {
  type: Function;
  props: {
    children: MdCodeText[];
  };
};

type CodeText = string | MdCodeText | MdMultiCodeText;

function parseChildren(
  children: CodeText,
  lang?: string,
  code?: string
): { lang: string; code: string; title?: string } {
  if (typeof children === "string" || code) {
    return {
      code: (children as string) || code || "",
      lang: lang || "text",
    };
  }

  if (typeof children === "object" && typeof children?.props?.children === "string") {
    return {
      code: children.props?.children,
      ...getLanguageAndTitle((children as MdCodeText).props?.className),
    };
  }

  if (typeof children === "object") {
    const files = React.Children.toArray(children as any).map((file: any) => {
      const code = file.props?.children;
      const className = file.props?.className;
      return {
        code: code as string,
        ...getLanguageAndTitle(className as string),
      };
    });
    return files[0];
  }

  return {
    code: (children as string) || code || "",
    lang: lang || "text",
  };
}

function getLanguageAndTitle(className: string | undefined) {
  if (!className) {
    return { lang: "text" };
  }
  const metastring = className.replace("language-", "");
  const lang = metastring.split(".").pop()!;

  if (lang !== metastring) {
    return { lang, title: metastring };
  }
  return { lang };
}

export { Code };
