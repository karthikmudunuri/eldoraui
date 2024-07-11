"use client";

import React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { tv } from "tailwind-variants";
import { Button } from "@/lib/components/core/default/button";
import { ScrollArea } from "@/lib/components/core/default/scroll-area";

const codeStyles = tv({
  base: "relative rounded-md bg-bg-muted",
  variants: {
    variant: {
      classic: "text-xs p-4",
      inline: "px-2 py-0.5",
    },
  },
});

interface CodeClientProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  code: string;
}
const CodeClient = ({ className, inline = false, children, code }: CodeClientProps) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  if (inline) {
    return <span className={codeStyles({ variant: "inline" })}>{children}</span>;
  }

  return (
    <div className={className}>
      <ScrollArea scrollbars="both" className="max-h-[200px]">
        <div className={codeStyles({ variant: "classic" })}>
          {children}
          <Button
            variant="quiet"
            shape="square"
            size="sm"
            className="absolute right-2 top-2 [&_svg]:size-3"
            onPress={handleCopy}
          >
            {copied ? (
              <CheckIcon className="animate-in fade-in" />
            ) : (
              <CopyIcon className="animate-in fade-in" />
            )}
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
};

export { CodeClient };
