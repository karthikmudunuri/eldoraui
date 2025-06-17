import Link from "next/link";

export default function DynamicSquareBackground({
  title,
  tag,
  description,
  buttonText,
  buttonHref,
}: Readonly<{
  title: string;
  tag: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}>) {
  return (
    <>
      <style>
        {`
        @keyframes tiles {
          0%, 40%, 80% {
            opacity: 0;
          }
          20%, 60% {
            opacity: 1;
          }
        }
      `}
      </style>
      <div className="relative flex w-80 flex-col gap-8 overflow-hidden rounded-xl border border-neutral-400/20 px-8 py-4 shadow-sm dark:shadow-black">
        <DecorativeTilesBackground />
        <div className="z-20">
          <div className="">
            <h3 className="inline text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <p className="ml-2 inline rounded-sm border border-neutral-900 px-0.5 align-top text-xs font-medium uppercase tracking-tight dark:border-neutral-400">
              {tag}
            </p>
          </div>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </div>
        <Link
          className="z-20 inline-flex h-12 w-full items-center justify-center rounded-lg border border-neutral-500/15 bg-neutral-200/20 font-medium text-neutral-600 backdrop-blur-md transition-colors hover:border-neutral-500/30 hover:bg-neutral-200/50 dark:bg-neutral-500/20 dark:text-neutral-300 dark:hover:bg-neutral-500/40"
          href={buttonHref}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
}

const DecorativeTilesBackground = () => {
  const rows = 20;
  const columns = 22;
  const animationDuration = 14; // seconds

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 flex select-none flex-wrap"
    >
      {Array.from({ length: rows }).map((_, rowIndex) => {
        return (
          <div
            className="flex h-[16px] w-full border-b border-dashed border-neutral-500/20"
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`line-${rowIndex}`}
          >
            {Array.from({ length: columns }).map((_, colIndex) => {
              const delay = Math.random() * animationDuration;

              return (
                <div
                  className="relative h-[16px] w-[15px] border-r border-dashed border-neutral-500/20"
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={`tile-${colIndex}`}
                >
                  <div
                    className=" inset-0 h-[16px] w-[15px] bg-fuchsia-600/10 dark:bg-fuchsia-400/15"
                    style={{
                      opacity: 0, // Start with opacity 0
                      animationName: "tiles",
                      animationIterationCount: "infinite",
                      animationTimingFunction: "ease",
                      animationDelay: `${delay}s`,
                      animationDuration: `${animationDuration}s`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
