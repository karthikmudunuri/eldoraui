import { cn } from "@/lib/utils"

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "bg-background flex min-h-screen w-full items-center justify-center p-8 *:data-[slot=card]:has-[[data-slot=chart]]:shadow-none"
      )}
    >
      {children}
    </div>
  )
}
