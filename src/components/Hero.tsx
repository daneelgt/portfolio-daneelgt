import { Github, Linkedin } from "lucide-react";
import { SelectionBox } from "@/components/ui/SelectionBox";
import TechText from "@/components/ui/TechText";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/site-path";

const linkClass =
  "inline-flex items-center gap-2 rounded-md border border-linha px-4 py-2 text-sm text-suave transition-colors hover:border-apagado hover:text-texto";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo" className="grid items-center gap-8 py-12 sm:gap-14 sm:py-20 md:min-h-[85vh] md:grid-cols-[1fr_auto]">
      <div>
        <div aria-hidden="true" className="h-28 w-full max-w-[680px] sm:h-40 lg:h-48">
          <TechText
            text={site.name}
            fontWeight={600}
            fontSize={160}
            letterSpacing={-0.05}
            reveal="word"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            guides={false}
            accentColor="currentColor"
            draggable={false}
            clickKick={false}
            sweep={false}
            speed={1}
          />
        </div>
        <h1 id="titulo" className="sr-only">
          {site.name}
        </h1>
        <p className="mt-5 max-w-prose text-lg text-suave sm:mt-6 sm:text-xl">{site.headline}</p>
        <p className="mt-2 max-w-prose text-sm text-suave sm:mt-3 sm:text-base">Estagiário de suporte de TI na Feluma, em Belo Horizonte.</p>
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
          <a className={linkClass} href="#projetos">
            Ver projetos
          </a>
          <a className={linkClass} href={site.links.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a className={linkClass} href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>

      <SelectionBox
        label="daneelgt"
        showSize
        className="mx-auto w-full max-w-52 sm:max-w-64 sm:w-72 md:mx-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/foto-daniel.webp")}
          alt="Foto de Daniel Gabriel"
          width={720}
          height={720}
          className="block h-auto w-full bg-white"
        />
      </SelectionBox>
    </section>
  );
}
