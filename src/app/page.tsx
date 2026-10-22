import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Trajetoria } from "@/components/Trajetoria";
import { SiteBackground } from "@/components/ui/SiteBackground";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-5xl px-4 sm:px-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Trajetoria />
          <Contact />
        </main>
        <footer className="mx-auto max-w-5xl border-t border-linha px-4 py-6 text-sm text-apagado sm:px-6 sm:py-8">
          {new Date().getFullYear()} {site.name}
        </footer>
      </div>
    </>
  );
}
