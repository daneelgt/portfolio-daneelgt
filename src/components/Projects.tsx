import { ExternalLink, Github } from "lucide-react";
import { SelectionBox } from "@/components/ui/SelectionBox";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { getRepos, type Repo } from "@/lib/github";
import { withBasePath } from "@/lib/site-path";

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <SelectionBox interactive className="flex h-full flex-col p-5">
      <h4 className="font-mono text-sm text-texto">{repo.name}</h4>
      {repo.description && <p className="mt-3 text-suave">{repo.description}</p>}
      <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm text-suave">
        {repo.language && <span className="font-mono text-xs text-apagado">{repo.language}</span>}
        <a className="inline-flex items-center gap-1.5 hover:text-texto" href={repo.url} target="_blank" rel="noopener noreferrer">
          <Github size={14} aria-hidden="true" /> Código
        </a>
        {repo.homepage && (
          <a className="inline-flex items-center gap-1.5 hover:text-texto" href={repo.homepage} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} aria-hidden="true" /> Demonstração
          </a>
        )}
      </div>
    </SelectionBox>
  );
}

export async function Projects() {
  const repos = await getRepos();
  const featured = repos.filter((r) => site.repos.featured.some((name) => name === r.name));
  const studies = repos.filter((r) => site.repos.studies.some((name) => name === r.name));
  const study = site.caseStudy;

  return (
    <Section id="projetos" title="Projetos">
      <SelectionBox className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold">{study.title}</h3>
        <p className="mt-4 max-w-prose text-suave">{study.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias usadas">
          {study.stack.map((s) => (
            <li key={s} className="rounded-full border border-linha px-3 py-1 font-mono text-xs text-suave">
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-prose text-suave">{study.contribution}</p>
        <p className="mt-2 max-w-prose text-sm text-apagado">{study.note}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {study.images.map((img) => (
            <figure key={img.src}>
              <a href={withBasePath(img.src)} target="_blank" rel="noopener noreferrer" className="block border border-linha bg-painel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBasePath(img.src)} alt={img.alt} loading="lazy" className="aspect-[2/1] w-full object-contain" />
              </a>
              <figcaption className="mt-2 text-sm text-apagado">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </SelectionBox>

      <h3 className="mb-5 mt-14 text-xl font-semibold">No GitHub</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((r) => (
          <RepoCard key={r.name} repo={r} />
        ))}
      </div>

      <h3 className="mb-5 mt-10 text-base font-medium text-suave">Estudos</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {studies.map((r) => (
          <RepoCard key={r.name} repo={r} />
        ))}
      </div>
    </Section>
  );
}
