import { fetchStargazers } from "@/lib/github"

export async function GET() {
  const data = await fetchStargazers(1500)
  return Response.json(data)
}
