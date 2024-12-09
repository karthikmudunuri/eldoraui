import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import { CodeBlockClient, type CodeBlockRootProps } from "./client";

interface CodeBlockProps extends CodeBlockRootProps {
  files: {
    fileName: string;
    code: string;
    lang: BundledLanguage;
  }[];
  preview?: string;
  expandable?: boolean;
}

const CodeBlock = async ({ files: _files, preview: _preview, ...props }: CodeBlockProps) => {
  let preview = undefined;
  if (_preview) {
    const html = await codeToHtml(_preview, {
      lang: "tsx",
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
    });
    preview = (
      <div
        className="[&_pre]:outline-none [&_span]:!bg-transparent dark:[&_span]:!text-[var(--shiki-dark)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  const files = await Promise.all(
    _files.map(async ({ fileName, code, lang }) => {
      const html = await codeToHtml(code, {
        lang: lang,
        themes: {
          light: "light-plus",
          dark: "github-dark-dimmed",
        },
      });

      return {
        fileName,
        codeStr: code,
        code: (
          <div
            className="[&_pre]:outline-none [&_span]:!bg-transparent dark:[&_span]:!text-[var(--shiki-dark)]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ),
        lang,
      };
    })
  );

  return <CodeBlockClient files={files} preview={preview} previewStr={_preview} {...props} />;
};

export { CodeBlock };
