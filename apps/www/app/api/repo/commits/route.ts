import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { repo, owner } = await request.json()

    if (!repo || !owner) {
      return NextResponse.json(
        { error: "Repository and owner are required" },
        { status: 400 }
      )
    }

    // Fetch commits from GitHub API (main branch)
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?sha=main`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          // You might want to add your GitHub token here for higher rate limits
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const commits = await response.json()

    return NextResponse.json({ commits })
  } catch (error) {
    console.error("Error fetching commits:", error)
    return NextResponse.json(
      { error: "Failed to fetch commits" },
      { status: 500 }
    )
  }
}
