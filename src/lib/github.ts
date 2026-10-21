import { site } from "@/content/site";

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  homepage: string | null;
};

type ApiRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
};

/**
 * Busca no GitHub (durante o build) os repositórios escolhidos em site.repos.
 * Se a API falhar, usa os dados reservados em site.ts, sem inventar nada.
 */
export async function getRepos(): Promise<Repo[]> {
  const { user, featured, studies, fallback } = site.repos;
  let api: ApiRepo[] = [];
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`, {
      headers: { Accept: "application/vnd.github+json" },
      cache: "force-cache",
    });
    if (res.ok) api = (await res.json()) as ApiRepo[];
  } catch {
    api = [];
  }

  return [...featured, ...studies].map((name) => {
    const found = api.find((r) => r.name === name);
    if (found) {
      return {
        name,
        description: found.description,
        language: found.language,
        url: found.html_url,
        homepage: found.homepage || null,
      };
    }
    const f = fallback[name];
    return {
      name,
      description: f?.description ?? null,
      language: f?.language ?? null,
      url: `https://github.com/${user}/${name}`,
      homepage: null,
    };
  });
}
