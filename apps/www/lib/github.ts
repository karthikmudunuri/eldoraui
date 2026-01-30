/* ======================================================
 * Existing types & helpers (UNCHANGED)
 * ====================================================== */

interface GitHubIssueUrlParams {
  owner: string
  repo: string
  title?: string
  body?: string
  labels?: string[]
  template?: string
  projects?: string[]
  assignees?: string[]
  milestone?: string
}

/**
 * Generates a GitHub issue URL with the provided parameters.
 * https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query
 */
export function getGitHubIssueUrl(params: GitHubIssueUrlParams): string {
  const { owner, repo, ...issueParams } = params
  const baseUrl = `https://github.com/${owner}/${repo}/issues/new`
  const urlParams = new URLSearchParams()

  Object.entries(issueParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => urlParams.append(key, item))
    } else if (value !== undefined) {
      urlParams.append(key, value.toString())
    }
  })

  return `${baseUrl}?${urlParams.toString()}`
}

interface GithubFileUrlParams {
  owner: string
  repo: string
  slug: string
}

export function getGithubFileUrl(params: GithubFileUrlParams) {
  const { owner, repo, slug } = params
  return `https://github.com/${owner}/${repo}/edit/main/apps/www/content${
    slug === "/docs" ? "/docs/index" : slug
  }.mdx`
}

/* ======================================================
 * NEW: Stargazers / Supporters
 * ====================================================== */

export interface Stargazer {
  login: string
  id: number
  avatar_url: string
  html_url: string
  type: string
}

/**
 * Fetch GitHub stargazers (paginated & cached)
 * - Respects GitHub API limits
 * - Optimized for Server Components & API routes
 */
export async function fetchStargazers(
  limit: number = 1500,
): Promise<Stargazer[]> {
  const stargazers: Stargazer[] = []
  let page = 1
  const perPage = 100 // GitHub max

  while (stargazers.length < limit) {
    const res = await fetch(
      `https://api.github.com/repos/karthikmudunuri/eldoraui/stargazers?per_page=${perPage}&page=${page}`,
      {
        headers: process.env.GITHUB_OAUTH_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
              Accept: "application/vnd.github+json",
            }
          : {},
        next: {
          revalidate: 3600, // cache for 1 hour
        },
      },
    )

    if (!res.ok) {
      console.error("GitHub API error:", res.status)
      break
    }

    const data: Stargazer[] = await res.json()

    if (data.length === 0) break

    stargazers.push(...data)
    page++
  }

  return stargazers.slice(0, limit)
}
