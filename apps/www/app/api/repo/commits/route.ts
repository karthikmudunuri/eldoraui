import { NextRequest, NextResponse } from "next/server"

interface GitHubCommit {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    message: string
  }
  author: {
    login: string
    avatar_url: string
  } | null
}

export async function POST(request: NextRequest) {
  try {
    const { repo, owner, since } = await request.json()

    if (!repo || !owner) {
      return NextResponse.json(
        { error: "Repository and owner are required" },
        { status: 400 }
      )
    }

    // Fetch ALL commits from the repository using pagination
    let allCommits: GitHubCommit[] = []
    let page = 1
    const perPage = 100 // Maximum per page allowed by GitHub API
    let hasMorePages = true

    while (hasMorePages) {
      // Build GitHub API URL for current page
      let apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?sha=main&per_page=${perPage}&page=${page}`

      // Add date filtering if provided (format: YYYY-MM-DDTHH:MM:SSZ)
      if (since) {
        apiUrl += `&since=${since}`
      }

      const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/vnd.github+json",
          // You might want to add your GitHub token here for higher rate limits
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const commits = await response.json()

      // If we get fewer commits than perPage, we've reached the end
      if (commits.length < perPage) {
        hasMorePages = false
      }

      allCommits = allCommits.concat(commits)
      page++

      // Safety limit to prevent infinite loops (adjust as needed)
      if (page > 50) {
        console.warn("Reached pagination limit of 50 pages (5000 commits)")
        break
      }
    }

    return NextResponse.json({ commits: allCommits })
  } catch (error) {
    console.error("Error fetching commits:", error)
    return NextResponse.json(
      { error: "Failed to fetch commits" },
      { status: 500 }
    )
  }
}
