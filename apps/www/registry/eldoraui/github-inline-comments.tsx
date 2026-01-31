"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, MessageSquarePlus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Line =
  | { kind: "hunk"; content: string }
  | { kind: "context"; old: number | null; new: number | null; content: string }
  | { kind: "add"; old: number | null; new: number | null; content: string }
  | { kind: "del"; old: number | null; new: number | null; content: string }

export default function GithubInlineComments({
  diff,
  fileName,
}: {
  diff: readonly Line[]
  fileName: string
}) {
  return <DiffList diff={diff} fileName={fileName} />
}

function DiffList({
  diff,
  fileName,
}: {
  diff: readonly Line[]
  fileName: string
}) {
  const rows = diff ?? []

  // Tracks which line index currently has an open thread
  const [openThreadAt, setOpenThreadAt] = useState<number | null>(null)
  // Tracks thread status per line
  const [resolvedMap, setResolvedMap] = useState<Record<number, boolean>>({})

  function toggleResolve(idx: number) {
    setResolvedMap((m) => ({ ...m, [idx]: !m[idx] }))
  }

  return (
    <TooltipProvider delayDuration={150}>
      <div
        role="table"
        aria-label={`Diff of ${fileName}`}
        className="bg-card rounded-md border dark:border-white/10"
      >
        <div className="flex items-center justify-between border-b px-2 py-1 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium">{fileName}</span>
            <Badge
              variant="secondary"
              aria-label="File status"
              className="h-5 px-1.5 text-[11px]"
            >
              modified
            </Badge>
          </div>
        </div>

        <ol role="rowgroup" className="divide-y dark:divide-white/10">
          {rows.map((line, idx) => {
            const isChange = line.kind === "add" || line.kind === "del"
            const isOpen = openThreadAt === idx
            const isResolved = !!resolvedMap[idx]

            return (
              <li
                key={idx}
                role="row"
                className={cn(
                  "group relative flex items-stretch text-[13px]",
                  line.kind === "hunk" && "bg-muted/50 text-muted-foreground",
                  line.kind === "add" &&
                    "bg-emerald-50/60 dark:bg-emerald-950/20",
                  line.kind === "del" && "bg-rose-50/60 dark:bg-rose-950/20"
                )}
              >
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                  {line.kind !== "hunk" && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="secondary"
                          aria-label="Add inline comment"
                          className="h-5 w-5 rounded-full shadow-sm"
                          onClick={() => setOpenThreadAt(isOpen ? null : idx)}
                        >
                          <MessageSquarePlus className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">Add comment</TooltipContent>
                    </Tooltip>
                  )}
                </div>

                <div
                  role="cell"
                  className={cn(
                    "text-muted-foreground grid w-16 shrink-0 grid-cols-2 border-r text-[11px] dark:border-white/10"
                  )}
                >
                  <span className="px-2 py-1 text-right tabular-nums">
                    {line.kind === "add"
                      ? ""
                      : line.kind === "hunk"
                        ? ""
                        : (line.old ?? "")}
                  </span>
                  <span className="px-2 py-1 text-right tabular-nums">
                    {line.kind === "del"
                      ? ""
                      : line.kind === "hunk"
                        ? ""
                        : (line.new ?? "")}
                  </span>
                </div>

                <div role="cell" className="flex-1">
                  <pre
                    className={cn(
                      "px-2 py-1 font-mono text-[12px] leading-5 whitespace-pre-wrap",
                      isChange && "pl-5"
                    )}
                    aria-label={`${line.kind} line`}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "mr-1 inline-block w-2 text-center font-semibold",
                        line.kind === "add" && "text-emerald-600",
                        line.kind === "del" && "text-rose-600"
                      )}
                    >
                      {line.kind === "add"
                        ? "+"
                        : line.kind === "del"
                          ? "-"
                          : " "}
                    </span>
                    {line.content}
                  </pre>

                  {openThreadAt === idx && line.kind !== "hunk" && (
                    <div className="bg-background border-t px-2 py-1.5 dark:border-white/10">
                      <InlineThread
                        resolved={isResolved}
                        onToggleResolve={() => toggleResolve(idx)}
                        onClose={() => setOpenThreadAt(null)}
                      />
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </TooltipProvider>
  )
}

type Comment = {
  id: string
  author: string
  initials: string
  body: string
  createdAt: string
}

function InlineThread({
  resolved,
  onToggleResolve,
  onClose,
}: {
  resolved: boolean
  onToggleResolve: () => void
  onClose: () => void
}) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "c1",
      author: "Reviewer",
      initials: "RV",
      body: "Consider handling the undefined case explicitly.",
      createdAt: "just now",
    },
  ])
  const [draft, setDraft] = useState("")
  const textRef = useRef<HTMLTextAreaElement | null>(null)

  function addComment() {
    const text = draft.trim()
    if (!text) return
    setComments((c) => [
      ...c,
      {
        id: crypto.randomUUID(),
        author: "You",
        initials: "YO",
        body: text,
        createdAt: "now",
      },
    ])
    setDraft("")
    // focus back for fast sequences
    requestAnimationFrame(() => textRef.current?.focus())
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  return (
    <div className="bg-card rounded-md border dark:border-white/10">
      {/* Header with status chip */}
      <div className="flex items-center justify-between gap-2 px-2 py-1">
        <div className="flex items-center gap-2">
          <Badge
            className={cn(
              "h-5 gap-1 px-1.5 text-[11px]",
              resolved
                ? "bg-emerald-600 text-white hover:bg-emerald-600/90 dark:bg-emerald-500 dark:hover:bg-emerald-500/90"
                : "bg-secondary text-foreground dark:bg-neutral-800 dark:text-neutral-100"
            )}
          >
            {resolved ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
            {resolved ? "Resolved" : "Open"}
          </Badge>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant={resolved ? "secondary" : "default"}
            size="sm"
            onClick={onToggleResolve}
            aria-pressed={resolved}
            className="h-7 px-2 text-[12px]"
          >
            {resolved ? "Reopen" : "Resolve"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close thread"
            onClick={onClose}
            className="h-7 w-7"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Comments list */}
      <ul className="space-y-1 px-2 py-1.5">
        {comments.map((c) => (
          <li key={c.id} className="flex items-start gap-2">
            <Avatar className="h-5 w-5">
              <AvatarFallback className="text-[9px]">
                {c.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-[12px] font-medium">{c.author}</p>
                <span className="text-muted-foreground ml-2 shrink-0 text-[10px]">
                  {c.createdAt}
                </span>
              </div>
              <p className="mt-0.5 text-[13px] leading-5">{c.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <Separator />

      {/* Editor */}
      <div className="flex flex-col gap-2 px-2 py-1.5">
        <label htmlFor="inline-comment" className="sr-only">
          Add a comment
        </label>
        <Textarea
          id="inline-comment"
          ref={textRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Comment"
          rows={2}
          className="min-h-[40px] py-1.5 text-[13px]"
        />
        <div className="flex items-center justify-end gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-7 px-2 text-[12px]"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={addComment}
            disabled={!draft.trim()}
            className="h-7 px-2 text-[12px]"
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  )
}
