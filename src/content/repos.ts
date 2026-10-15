import allowlist from "./repo-allowlist.json";

/**
 * Only these repositories are ever shown on the site, even if the GitHub API
 * returns more. Anything private, client-related or unrelated stays out.
 * The list lives in repo-allowlist.json so scripts/snapshot-repos.mjs can share it.
 */
export const repoAllowlist: string[] = allowlist;

/** Repos highlighted in the list; every other allowlisted repo is labeled as a learning project. */
export const featuredRepos: string[] = ["MarianoConte.github.io"];
