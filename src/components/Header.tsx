import { site } from "@/content/site";
import Image from "next/image";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-tinta/90 backdrop-blur-md after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-16 after:bg-gradient-to-b after:from-tinta/90 after:to-transparent after:backdrop-blur-sm after:[mask-image:linear-gradient(to_bottom,black,transparent)] after:content-['']">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-5">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 font-mono text-sm text-texto"
        >
          <Image
            src="/foto-daniel.webp"
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          {site.name}
        </a>
        <nav aria-label="Seções do site">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-suave">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-texto"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
