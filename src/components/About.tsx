import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="max-w-prose space-y-4 text-base leading-relaxed text-suave sm:space-y-5 sm:text-lg">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
