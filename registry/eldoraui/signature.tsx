"use client";
import Signature, { type SignatureRef } from "@uiw/react-signature";
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  Eraser,
  RefreshCcwIcon,
} from "lucide-react";
import { type ComponentProps, useRef, useState } from "react";
import { useCopyToClipboard } from "@/registry/hooks/copytoclipboard";
import { cn } from "@/lib/utils";

export function ReactSignature({
  className,
  ...props
}: ComponentProps<typeof Signature>) {
  const [readonly, setReadonly] = useState(false);
  const $svg = useRef<SignatureRef>(null);

  const handleClear = () => $svg.current?.clear();

  const handleValidate = () => {
    if (readonly) {
      $svg.current?.clear();
      setReadonly(false);
    } else {
      setReadonly(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm tracking-tight text-neutral-500">Just sign here</p>
      <Signature
        className={cn(
          "h-28 w-80 rounded-lg border border-neutral-500/20 bg-neutral-500/10",
          readonly
            ? "cursor-not-allowed fill-neutral-500"
            : "fill-neutral-800 dark:fill-neutral-200",
          className,
        )}
        options={{
          smoothing: 0,
          streamline: 0.8,
          thinning: 0.7,
        }}
        readonly={readonly}
        {...props}
        ref={$svg}
      />
      <div className="flex justify-end gap-1 text-neutral-700 dark:text-neutral-200">
        <ValidateButton onClick={handleValidate} readonly={readonly} />
        {readonly && (
          <>
            <DownloadButton svgElement={$svg.current?.svg} />
            <CopySvgButton svgElement={$svg.current?.svg} />
          </>
        )}
        {!readonly && <ClearButton onClick={handleClear} />}
      </div>
    </div>
  );
}

function prepareSvgElement(svgElement: SVGSVGElement) {
  const svgelm = svgElement.cloneNode(true) as SVGSVGElement;
  const clientWidth = svgElement.clientWidth;
  const clientHeight = svgElement.clientHeight;
  svgelm.removeAttribute("style");
  svgelm.setAttribute("width", `${clientWidth}px`);
  svgelm.setAttribute("height", `${clientHeight}px`);
  svgelm.setAttribute("viewBox", `0 0 ${clientWidth} ${clientHeight}`);
  return { svgelm, clientWidth, clientHeight };
}

function ValidateButton({
  readonly,
  onClick,
}: Readonly<{
  readonly: boolean;
  onClick: () => void;
}>) {
  return (
    <button
      className="inline-grid size-8 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
      onClick={onClick}
      type="button"
    >
      {readonly ? (
        <>
          <RefreshCcwIcon className="size-5" />
          <span className="sr-only">Reset</span>
        </>
      ) : (
        <>
          <CheckIcon className="size-5" />
          <span className="sr-only">Validate</span>
        </>
      )}
    </button>
  );
}

function DownloadButton({
  svgElement,
}: Readonly<{
  svgElement: SVGSVGElement | undefined | null;
}>) {
  const handleDownloadImage = () => {
    if (!svgElement) {
      return;
    }

    const { svgelm, clientWidth, clientHeight } = prepareSvgElement(svgElement);

    const data = new XMLSerializer().serializeToString(svgelm);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = clientWidth ?? 0;
      canvas.height = clientHeight ?? 0;
      ctx?.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "signature.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
    img.src = `data:image/svg+xml;base64,${window.btoa(
      decodeURIComponent(encodeURIComponent(data)),
    )}`;
  };

  return (
    <button
      className="inline-grid size-8 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
      onClick={handleDownloadImage}
      type="button"
    >
      <DownloadIcon className="size-5" />
      <span className="sr-only">Download</span>
    </button>
  );
}

function CopySvgButton({
  svgElement,
}: Readonly<{
  svgElement: SVGSVGElement | undefined | null;
}>) {
  const [_, copyText, isCopied] = useCopyToClipboard();

  const handleCopySvg = () => {
    if (!svgElement) {
      return;
    }

    const { svgelm } = prepareSvgElement(svgElement);
    copyText(svgelm.outerHTML);
  };

  return (
    <button
      className="inline-flex items-center gap-1 rounded-md border border-neutral-500/10 bg-neutral-500/10 px-1 text-sm tracking-tight hover:bg-neutral-500/20"
      onClick={handleCopySvg}
      type="button"
    >
      {isCopied ? (
        <>
          <span>Copied</span>
          <CheckIcon className="size-5" />
        </>
      ) : (
        <>
          <span>Copy to SVG</span>
          <CopyIcon className="size-5" />
        </>
      )}
    </button>
  );
}

function ClearButton({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <button
      className="inline-grid size-8 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
      onClick={onClick}
      type="button"
    >
      <Eraser className="size-5" />
      <span className="sr-only">Clear</span>
    </button>
  );
}
