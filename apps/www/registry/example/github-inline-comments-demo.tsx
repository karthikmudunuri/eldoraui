"use client"

import GithubInlineComments from "@/registry/eldoraui/github-inline-comments"

export default function GithubInlineCommentsDemo() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <p className="text-muted-foreground mb-4 text-sm">
        This is a GitHub-style inline diff comments component. Hover over a line
        in the diff to reveal the "Add comment" button, then click to open a
        compact inline thread for discussion—just like reviewing code on GitHub.
      </p>
      <GithubInlineComments
        fileName="src/server.ts"
        diff={[
          { kind: "hunk", content: "@@ -10,8 +10,10 @@" },
          {
            kind: "context",
            old: 10,
            new: 10,
            content: "export async function getUserName(id: string) {",
          },
          {
            kind: "context",
            old: 11,
            new: 11,
            content: "  // Fetch user from cache or database",
          },
          {
            kind: "del",
            old: 12,
            new: null,
            content: "  const user = cache.get(id)",
          },
          {
            kind: "add",
            old: null,
            new: 12,
            content: "  let user = cache.get(id)",
          },
          { kind: "context", old: 13, new: 13, content: "  if (!user) {" },
          {
            kind: "add",
            old: null,
            new: 14,
            content: "    user = await db.users.findById(id)",
          },
          {
            kind: "add",
            old: null,
            new: 15,
            content: "    if (user) cache.set(id, user)",
          },
          { kind: "context", old: 14, new: 16, content: "  }" },
          { kind: "del", old: 15, new: null, content: "  return user?.name" },
          {
            kind: "add",
            old: null,
            new: 17,
            content: "  return user?.name ?? '(unknown)'",
          },
          { kind: "context", old: 16, new: 18, content: "}" },
        ]}
      />
    </div>
  )
}
