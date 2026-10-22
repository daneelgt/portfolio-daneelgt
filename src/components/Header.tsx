"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import Image from "next/image";
import { withBasePath } from "@/lib/site-path";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = document.querySelectorAll<HTMLElement>(
        "#mobile-navigation a[href], #mobile-navigation button"
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", handleMenuKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleMenuKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-10 bg-tinta/90 backdrop-blur-md after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-16 after:bg-gradient-to-b after:from-tinta/90 after:to-transparent after:backdrop-blur-sm after:[mask-image:linear-gradient(to_bottom,black,transparent)] after:content-['']">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 font-mono text-sm text-texto"
        >
          <Image
            src={withBasePath("/foto-daniel.webp")}
            alt=""
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          {site.name}
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-linha text-texto transition-colors hover:bg-painel focus-visible:outline-offset-2 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
        <nav aria-label="Seções do site" className="hidden md:block">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-suave">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-texto">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute inset-0 cursor-default bg-black/60"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          />
          <aside
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="absolute inset-y-0 left-0 z-10 flex w-[min(82vw,20rem)] flex-col border-r border-linha bg-tinta p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-linha pb-5">
              <span className="font-mono text-sm text-texto">Menu</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-linha text-texto transition-colors hover:bg-painel"
                aria-label="Fechar menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Seções do site">
              <ul className="mt-5 space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-md px-3 py-3 text-base text-suave transition-colors hover:bg-painel hover:text-texto"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
