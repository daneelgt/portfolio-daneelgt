import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="max-w-prose space-y-5 text-lg leading-relaxed text-suave">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
