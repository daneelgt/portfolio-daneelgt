import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function Trajetoria() {
  return (
    <Section id="trajetoria" title="Trajetória">
      <h3 className="text-xl font-semibold">Experiência</h3>
      <div className="mt-6 space-y-8">
        {site.experience.map((job) => (
          <article key={job.role}>
            <p className="font-medium">{job.role}</p>
            <p className="text-sm text-apagado">{job.company}</p>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-suave">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mt-14 text-xl font-semibold">Formação</h3>
      <ul className="mt-6 space-y-3">
        {site.education.map((e) => (
          <li key={e.title}>
            <p className="font-medium">{e.title}</p>
            <p className="text-sm text-apagado">{e.status}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
