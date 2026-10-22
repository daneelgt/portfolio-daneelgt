export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-20 border-t border-linha py-12 sm:scroll-mt-16 sm:py-20">
      <h2 id={`${id}-titulo`} className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      <div className="mt-7 sm:mt-10">{children}</div>
    </section>
  );
}
