// services/github.ts

/**
 * GitHub user information returned by the REST API.
 */
export interface GitHubUser {
  readonly public_repos: number;
  readonly followers: number;
}

const GITHUB_USERNAME = "AmbitiousFlowDev";

/**
 * Fetches public GitHub profile information.
 *
 * @returns GitHub profile data.
 * @throws Error when the request fails.
 */
export async function getGitHubUser(): Promise<GitHubUser> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile.");
  }

  return response.json() as Promise<GitHubUser>;
}
