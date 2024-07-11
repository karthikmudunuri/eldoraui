"use client";

import React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import type { Key } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button, type ButtonProps } from "@/lib/components/core/default/button";
import { ScrollArea, type ScrollAreaProps } from "@/lib/components/core/default/scroll-area";
import { Tab, Tabs, TabList, TabPanel, type TabsProps } from "@/lib/components/core/default/tabs";
import { cn } from "@/lib/utils/classes";

const codeBlockStyles = tv({
  slots: {
    root: "block border rounded-md w-fit max-w-full bg-bg-muted",
    header: "flex items-center justify-between border-b rounded-t-[inherit] pr-2 h-10",
    body: "text-xs p-4",
    code: "text-xs",
  },
});

interface CodeBlockClientProps {
  files: {
    fileName: string;
    code: JSX.Element;
    codeStr: string;
    lang: string;
  }[];
  preview?: JSX.Element;
  previewStr?: string;
  expandable?: boolean;
}
const CodeBlockClient = ({
  files,
  preview,
  previewStr,
  expandable = false,
  ...props
}: CodeBlockClientProps) => {
  const [activeTab, setActiveTab] = React.useState<Key>(files[0].fileName);
  const [isExpanded, setExpanded] = React.useState(false);
  const handleExpand = () => {
    const prevState = isExpanded;
    if (prevState) {
      setActiveTab(files[0].fileName);
    }
    setExpanded(!prevState);
  };
  return (
    <CodeBlockRoot selectedKey={activeTab} onSelectionChange={setActiveTab} {...props}>
      <CodeBlockHeader>
        <div className="shrink-1 flex h-full w-[100px] flex-1 basis-0 items-end gap-2">
          {files.length > 0 && (
            <TabList>
              {files
                .slice(0, preview && !isExpanded ? 1 : files.length)
                .map(({ fileName }, index) => (
                  <Tab key={index} id={fileName}>
                    {fileName}
                  </Tab>
                ))}
            </TabList>
          )}
        </div>
        <div className="flex items-center gap-2">
          {(preview || expandable) && (
            <Button variant="default" size="sm" className="h-7 text-xs" onPress={handleExpand}>
              {isExpanded ? "Collapse" : "Expand"} code
            </Button>
          )}
          <CodeBlockCopyButton
            code={
              (previewStr && !isExpanded
                ? previewStr
                : files.find(({ fileName }) => fileName === activeTab)?.codeStr)!
            }
          />
        </div>
      </CodeBlockHeader>
      <CodeBlockBody className={cn(isExpanded ? "max-h-[400px]" : "max-h-[200px]")}>
        {preview && !isExpanded ? (
          <TabPanel id={files[0].fileName} className="!mt-0">
            {preview}
          </TabPanel>
        ) : (
          files.map(({ fileName, code }, index) => (
            <TabPanel key={index} id={fileName} className="!mt-0">
              {code}
            </TabPanel>
          ))
        )}
      </CodeBlockBody>
    </CodeBlockRoot>
  );
};

type CodeBlockRootProps = TabsProps;
const CodeBlockRoot = ({ className, ...props }: CodeBlockRootProps) => {
  const { root } = codeBlockStyles();
  return <Tabs className={root({ className })} {...props} />;
};

type CodeBlockHeaderProps = React.HTMLAttributes<HTMLDivElement>;
const CodeBlockHeader = ({ className, ...props }: CodeBlockHeaderProps) => {
  const { header } = codeBlockStyles();
  return <div className={header({ className })} {...props} />;
};

type CodeBlockBodyProps = ScrollAreaProps;
const CodeBlockBody = ({ className, ...props }: CodeBlockBodyProps) => {
  const { body } = codeBlockStyles();
  return <ScrollArea scrollbars="both" className={body({ className })} {...props} />;
};

interface CodeBlockCopyButtonProps extends ButtonProps {
  code: string;
}
const CodeBlockCopyButton = ({ code, ...props }: CodeBlockCopyButtonProps) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <Button
      size="sm"
      shape="square"
      variant="default"
      onPress={handleCopy}
      className="size-7 [&_svg]:size-3"
      {...props}
    >
      {copied ? (
        <CheckIcon className="animate-in fade-in" />
      ) : (
        <CopyIcon className="animate-in fade-in" />
      )}
    </Button>
  );
};

export type {
  CodeBlockClientProps,
  CodeBlockRootProps,
  CodeBlockHeaderProps,
  CodeBlockBodyProps,
  CodeBlockCopyButtonProps,
};

export {
  CodeBlockClient,
  CodeBlockRoot,
  CodeBlockHeader,
  CodeBlockBody,
  CodeBlockCopyButton,
  codeBlockStyles,
};
