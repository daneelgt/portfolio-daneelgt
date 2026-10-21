import type { Config } from "tailwindcss";

// Paleta: fundo escuro levemente arroxeado (da sua referência) + cores de terminal
// usadas com função (níveis de conhecimento, status), nunca como enfeite.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tinta: "#120f17",
        painel: "#1a1621",
        linha: "#2b2634",
        texto: "#f3f3f3",
        suave: "#b4b3b5",
        apagado: "#88878b",
        term: {
          verde: "#9ece6a",
          amarelo: "#e0af68",
          ciano: "#7dcfff",
          magenta: "#bb9af7",
          vermelho: "#f7768e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
