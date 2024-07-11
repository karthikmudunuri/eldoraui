export async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch("https://api.github.com/repos/mehdibha/dotUI", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response?.ok) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/dot-notation
    return parseInt(json["stargazers_count"]).toLocaleString();
  } catch (error) {
    return null;
  }
}
