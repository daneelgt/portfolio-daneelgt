import FaultyTerminal from "@/components/ui/FaultyTerminal";

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.14]">
        <FaultyTerminal
          tint="#7d7d7d"
          glyphs="blocks"
          scale={2.2}
          digitSize={0.9}
          timeScale={0.35}
          brightness={0.7}
          glow={0.3}
          persistence={0.5}
          mouseStrength={0.3}
          mouseGlow={0.50}
          curvature={0.09}
          vignette={0.35}
          clickEffect="glitch"
          scramble={0.4}
          scanlineIntensity={0.3}
          glitchAmount={0.7}
          flickerAmount={0.5}
          noiseAmp={0.8}
          chromaticAberration={0}
          mouseReact
          pageLoadAnimation
          pause
          lightMode={false}
        />
      </div>
    </div>
  );
}
