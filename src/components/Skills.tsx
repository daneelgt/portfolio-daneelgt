"use client";

import { useEffect, useRef, useState } from "react";
import Crosshair from "@/components/ui/Crosshair";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { levels, site, type Level } from "@/content/site";

const order: Level[] = ["verde", "amarelo", "ciano"];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: "calc(100% + 16px)", margin: "-8px 0 -8px -8px", padding: 8, boxSizing: "border-box" }}
    >
      {isVisible && (
        <Crosshair
          containerRef={containerRef}
          color="#ffffff"
          targetEffect="lock"
          targetSelector=".skill-crosshair-target, a, button"
          thickness={1}
          opacity={0.85}
          smoothing={0.35}
          showCoordinates
          lineStyle="solid"
          blendMode="normal"
          gap={0}
          fade={0}
          clickPulse
          hideCursor={false}
        />
      )}
      <Section id="habilidades" title="Habilidades">
        <ul className="mb-7 flex flex-wrap gap-3 sm:mb-10" aria-label="Legenda dos níveis">
          {order.map((tone) => (
            <li key={tone}>
              <span className="inline-flex items-center gap-2 text-sm text-suave">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ${tone === "verde" ? "bg-term-verde" : tone === "amarelo" ? "bg-term-amarelo" : "bg-term-ciano"}`}
                />
                {levels[tone]}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {site.skills.map((group) => (
            <div key={group.title} className="skill-crosshair-target p-3 sm:p-5">
              <h3 className="text-base font-medium">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Tag tone={item.level}>{item.name}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
