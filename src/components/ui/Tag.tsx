import { levels, type Level } from "@/content/site";

const dot: Record<Level, string> = {
  verde: "bg-term-verde",
  amarelo: "bg-term-amarelo",
  ciano: "bg-term-ciano",
};

/** Cada cor de terminal tem um significado fixo. O texto para leitores de tela evita depender só da cor. */
export function Tag({ tone, children }: { tone: Level; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-linha px-3 py-1 font-mono text-xs text-suave">
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot[tone]}`} />
      <span className="sr-only">{levels[tone]}: </span>
      {children}
    </span>
  );
}
