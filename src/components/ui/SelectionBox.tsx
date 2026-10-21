"use client";

import { useEffect, useRef, useState } from "react";

type SelectionBoxProps = {
  children: React.ReactNode;
  className?: string;
  /** Nome do elemento mostrado no canto, como numa ferramenta de design. */
  label?: string;
  /** Mostra a largura × altura reais do elemento ao lado do nome. */
  showSize?: boolean;
  /** Se verdadeiro, o contorno só aparece ao passar o mouse ou focar dentro. */
  interactive?: boolean;
};

const handles = [
  "-left-1 -top-1",
  "-right-1 -top-1",
  "-bottom-1 -left-1",
  "-bottom-1 -right-1",
];

export function SelectionBox({
  children,
  className = "",
  label,
  showSize = false,
  interactive = false,
}: SelectionBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!showSize || !el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize(`${Math.round(r.width)} × ${Math.round(r.height)}`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [showSize]);

  const border = interactive
    ? "border-transparent group-hover:border-apagado group-focus-within:border-apagado"
    : "border-apagado";
  const handle = interactive
    ? "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
    : "";
  const caption = [label, size].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={`group relative ${className}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 border border-dashed transition-colors duration-200 ${border}`}
      />
      {handles.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute h-2 w-2 bg-texto transition-opacity duration-200 ${position} ${handle}`}
        />
      ))}
      {caption && (
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute -top-6 left-0 font-mono text-xs text-apagado",
            interactive
              ? "opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
              : "",
          ].join(" ")}
        >
          {caption}
        </span>
      )}
      {children}
    </div>
  );
}
