import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

const row = "inline-flex items-center gap-3 text-base text-suave transition-colors hover:text-texto sm:text-lg";

export function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="max-w-prose text-base text-suave sm:text-lg">
        Estou buscando oportunidades na área de TI, com foco em desenvolvimento backend.
      </p>
      <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        <li>
          <a className={`${row} contact-email`} href={`mailto:${site.links.email}`}>
            <Mail size={20} className="shrink-0" aria-hidden="true" />
            <span className="email-address">{site.links.email}</span>
          </a>
        </li>
        <li>
          <a className={row} href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} aria-hidden="true" /> LinkedIn
          </a>
        </li>
        <li>
          <a className={row} href={site.links.github} target="_blank" rel="noopener noreferrer">
            <Github size={20} aria-hidden="true" /> GitHub
          </a>
        </li>
      </ul>
    </Section>
  );
}
