// Único lugar com seus dados pessoais.
export type Level = "verde" | "amarelo" | "ciano";

export const levels: Record<Level, string> = {
  verde: "Experiência em projeto",
  amarelo: "Conhecimento básico",
  ciano: "Em estudo",
};

type Skill = { name: string; level: Level };
type Fallback = { description: string | null; language: string | null };

export const site = {
  name: "Daniel Gabriel",
  headline: "Desenvolvedor backend em formação",
  description: "Portfólio de Daniel Gabriel",
  links: {
    github: "https://github.com/daneelgt",
    linkedin: "https://www.linkedin.com/in/danelg/",
    email: "danielgabrielteodoro17@gmail.com",
  },

  about: [
    "Estagio na Feluma, em Belo Horizonte, no suporte de TI: formatação de máquinas e demandas gerais da área. Curso Análise e Desenvolvimento de Sistemas e estudo Back-End com Java e Python.",
    "Já usei Arch Linux bastante e montei um servidor NAS caseiro num celular Android. No estágio, participei do desenvolvimento de uma plataforma interna de relatos de equipamentos via QR Code, com Next.js, TypeScript e PostgreSQL, atuando na lógica e em melhorias de Frontend e Backend.",
    "Meu objetivo é me tornar desenvolvedor backend.",
  ],

  skills: [
    {
      title: "Linguagens",
      items: [
        { name: "JavaScript", level: "verde" },
        { name: "TypeScript", level: "verde" },
        { name: "Java", level: "ciano" },
        { name: "Python", level: "ciano" },
      ] as Skill[],
    },
    {
      title: "Front-end",
      items: [
        { name: "React", level: "verde" },
        { name: "Next.js", level: "verde" },
        { name: "Tailwind CSS", level: "verde" },
      ] as Skill[],
    },
    {
      title: "Back-end",
      items: [
        { name: "Prisma", level: "verde" },
        { name: "Spring Boot", level: "amarelo" },
      ] as Skill[],
    },
    {
      title: "Bancos de dados",
      items: [
        { name: "PostgreSQL", level: "verde" },
        { name: "MySQL", level: "ciano" },
        { name: "SQLite", level: "ciano" },
      ] as Skill[],
    },
    {
      title: "Ferramentas",
      items: [
        { name: "Git e GitHub", level: "verde" },
        { name: "Docker", level: "amarelo" },
      ] as Skill[],
    },
    {
      title: "Sistemas e infraestrutura",
      items: [
        { name: "Suporte técnico e formatação", level: "verde" },
        { name: "Windows", level: "verde" },
        { name: "Linux (Arch)", level: "verde" },
        { name: "Servidor NAS caseiro", level: "verde" },
      ] as Skill[],
    },
  ],

  caseStudy: {
    title: "Plataforma de relatos de equipamentos",
    summary:
      "Sistema interno em que o usuário escaneia o QR Code de um equipamento (mesas, totens e impressoras), escolhe o problema e envia o relato. A equipe acompanha tudo numa área administrativa com login, gráficos, lista de relatos com filtros e geração dos QR Codes.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    contribution:
      "Desenvolvido em dupla, com apoio do Claude. Minha atuação foi na lógica e em melhorias de Frontend e Backend.",
    note: "Uso interno: o repositório é privado e não há demonstração pública. Os prints abaixo têm dados e identificações ocultados.",
    images: [
      { src: "/projetos/relatos/print-1.webp", alt: "Página pública com o passo a passo para relatar um problema", caption: "Página aberta ao escanear o QR Code" },
      { src: "/projetos/relatos/print-2.webp", alt: "Tela de login da área da equipe", caption: "Login da equipe" },
      { src: "/projetos/relatos/print-3.webp", alt: "Dashboard com indicadores e gráficos de relatos", caption: "Dashboard com gráficos" },
      { src: "/projetos/relatos/print-5.webp", alt: "Lista de relatos com busca e filtros", caption: "Lista de relatos com filtros" },
      { src: "/projetos/relatos/print-6.webp", alt: "Página de QR Codes por equipamento, com os códigos borrados", caption: "QR Codes por equipamento" },
      { src: "/projetos/relatos/print-7.webp", alt: "Tela de configurações para criar usuários da equipe", caption: "Gerenciamento de usuários" },
    ],
  },

  repos: {
    user: "daneelgt",
    featured: ["android-nas-srv", "dots"],
    studies: ["CRUD-em-memoria", "jogoAdivinha", "banca-de-dados-python-SQLite", "lanchonete-do-beicinho"],
    // Usado só se a API do GitHub estiver fora do ar durante o build.
    fallback: {
      "android-nas-srv": { description: "Tutoriais para transformar um celular velho em um servidor NAS.", language: null },
      dots: { description: "Meus arquivos de configuração para manter um ambiente de desenvolvimento consistente.", language: "Shell" },
      "CRUD-em-memoria": { description: "Estudos de Java.", language: "Java" },
      jogoAdivinha: { description: "Estudos de Java.", language: "Java" },
      "banca-de-dados-python-SQLite": { description: "Estudo de Python com SQLite.", language: "Python" },
      "lanchonete-do-beicinho": { description: null, language: "JavaScript" },
    } as Record<string, Fallback>,
  },

  experience: [
    {
      role: "Estagiário de suporte de TI",
      company: "Feluma, Belo Horizonte",
      points: [
        "Formatação de máquinas e atendimento de demandas gerais de TI.",
        "Participação no desenvolvimento da plataforma interna de relatos de equipamentos, contribuindo na implementação da lógica de negócio e em melhorias no Frontend e Backend.",
      ],
    },
  ],

  education: [{ title: "Análise e Desenvolvimento de Sistemas", status: "Cursando" }],
} as const;
