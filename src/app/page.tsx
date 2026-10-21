import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Trajetoria } from "@/components/Trajetoria";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Trajetoria />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl border-t border-linha px-6 py-8 text-sm text-apagado">
        {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
