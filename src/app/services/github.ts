/**
 * GitHub user information returned by the REST API.
 */
export interface GitHubUser {
  readonly public_repos: number;
  readonly followers: number;
}

/**
 * GitHub repository information returned by the REST API.
 */
export interface GitHubRepository {
  readonly name: string;
  readonly html_url: string;
  readonly stargazers_count: number;
}

const GITHUB_USERNAME = "AmbitiousFlowDev";
const GITHUB_API = "https://api.github.com";

/**
 * Fetches public GitHub profile information.
 *
 * @returns GitHub profile data.
 * @throws Error when the request fails.
 */
export async function getGitHubUser(): Promise<GitHubUser> {
  const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`);

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub profile.");
  }

  return response.json() as Promise<GitHubUser>;
}

/**
 * Fetches all public repositories for the configured user.
 *
 * @returns Public repositories.
 * @throws Error when the request fails.
 */
export async function getGitHubRepositories(): Promise<GitHubRepository[]> {
  const response = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100`,
  );

  if (!response.ok) {
    throw new Error("Unable to fetch GitHub repositories.");
  }

  return response.json() as Promise<GitHubRepository[]>;
}

/**
 * Returns a lookup table containing the star count of every repository.
 *
 * Example:
 * {
 *   "Dandilion": 12,
 *   "StratQuest": 5
 * }
 */
export async function getGitHubRepositoryStars(): Promise<
  Record<string, number>
> {
  const repositories = await getGitHubRepositories();

  return Object.fromEntries(
    repositories.map((repository) => [
      repository.name,
      repository.stargazers_count,
    ]),
  );
}
