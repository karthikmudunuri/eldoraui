"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"

type Commit = {
  commit: {
    message: string
    author: { date: string }
  }
  html_url: string
  sha: string
}

type CommitType = "feat" | "fix" | "docs" | "chore"

type GroupedCommits = {
  [monthYear: string]: {
    [category: string]: Array<{
      message: string
      date: string
      url: string
      sha: string
    }>
  }
}

// Helper function to generate consistent IDs (matching MDX behavior)
const generateHeadingId = (text: string) => {
  return text
    .replace(/ /g, "-")
    .replace(/'/g, "")
    .replace(/\?/g, "")
    .toLowerCase()
}

// Helper functions
const getCommitType = (message: string): CommitType | null => {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.startsWith("feat:")) return "feat"
  if (lowerMessage.startsWith("fix:")) return "fix"
  if (lowerMessage.startsWith("docs:")) return "docs"
  if (lowerMessage.startsWith("chore:")) return "chore"
  return null
}

const getCategoryName = (type: CommitType): string => {
  const categoryMap: Record<CommitType, string> = {
    feat: "Added",
    fix: "Fixed",
    docs: "Documentation",
    chore: "Maintenance",
  }
  return categoryMap[type] || "Other"
}

const groupCommitsByMonth = (commits: Commit[]): GroupedCommits => {
  const grouped: GroupedCommits = {}

  commits.forEach((commit) => {
    const date = new Date(commit.commit.author.date)
    const monthYear = format(date, "MMMM yyyy")
    const type = getCommitType(commit.commit.message)

    if (!grouped[monthYear]) {
      grouped[monthYear] = {}
    }

    // Only include commits with recognized types
    if (type) {
      const categoryName = getCategoryName(type)
      if (!grouped[monthYear][categoryName]) {
        grouped[monthYear][categoryName] = []
      }

      grouped[monthYear][categoryName].push({
        message: commit.commit.message,
        date: commit.commit.author.date,
        url: commit.html_url,
        sha: commit.sha,
      })
    }
  })

  return grouped
}

export default function CommitList({
  repo,
  owner,
}: {
  repo: string
  owner: string
}) {
  const [loading, setLoading] = useState(false)
  const [commits, setCommits] = useState<Commit[]>([])

  useEffect(() => {
    const loadCommits = async () => {
      setLoading(true)
      try {
        // Fetch ALL commits from the repository
        const response = await fetch(`/api/repo/commits`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ repo, owner }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setCommits(data.commits)
      } catch (error) {
        toast.error("Error occurred while loading commits. Please try again.")
        console.error("error", error)
      } finally {
        setLoading(false)
      }
    }
    loadCommits()
  }, [repo, owner])

  // Notify that headings have been added for potential TOC updates
  useEffect(() => {
    if (commits.length > 0) {
      // Dispatch custom event for external TOC systems to pick up new headings
      const event = new CustomEvent("headings-updated", {
        detail: { source: "commit-list" },
      })
      window.dispatchEvent(event)
    }
  }, [commits])

  // Group commits by month and category
  const groupedCommits = groupCommitsByMonth(commits)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Badge variant="secondary">Loading commits...</Badge>
      </div>
    )
  }

  if (commits.length === 0) {
    return (
      <div className="text-muted-foreground py-8 text-center">
        No commits found
      </div>
    )
  }

  return (
    <div className="w-full space-y-8" data-component="commit-list">
      {Object.entries(groupedCommits)
        .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime()) // Sort months newest first
        .map(([monthYear, categories]) => (
          <div key={monthYear} className="space-y-4">
            <h2
              id={generateHeadingId(monthYear)}
              className="text-foreground scroll-m-28 border-b pb-2 text-2xl font-bold"
            >
              {monthYear}
            </h2>

            {Object.entries(categories).map(([category, commits]) => (
              <div key={category} className="space-y-2">
                <h3
                  id={generateHeadingId(`${monthYear} ${category}`)}
                  className="text-foreground/80 scroll-m-28 text-lg font-semibold"
                >
                  {category}
                </h3>
                <ul className="ml-4 space-y-1">
                  {commits.map((commit, index) => (
                    <li key={index} className="text-sm">
                      <span className="text-foreground">{commit.message}</span>{" "}
                      <a
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 underline transition-colors hover:text-cyan-500 dark:text-cyan-400"
                      >
                        ({commit.sha.slice(0, 7)})
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}
