# Portfólio de Daniel Gabriel

Site estático feito com Next.js, TypeScript e Tailwind CSS.

## Como rodar

Requer Node.js 18.18 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:3000
```

## Como gerar o site para publicar

```bash
npm run build    # cria a pasta "out" com o site estático
```

O build consulta a API do GitHub para ler os repositórios escolhidos. Se ela estiver fora do ar,
o site usa os textos reservados em `src/content/site.ts`.

## Como editar

Quase tudo fica em `src/content/site.ts`: textos, habilidades e níveis, experiência, formação,
dados do estudo de caso e quais repositórios aparecem (`repos.featured` e `repos.studies`).

- Foto: `public/foto-daniel.webp`
- Prints do projeto: `public/projetos/relatos/`

## Como publicar

Opção mais simples, a Vercel (gratuita):
1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com, escolha "Add New Project" e importe o repositório. As configurações padrão servem.
3. A cada `git push`, o site é atualizado sozinho.

Alternativas: Netlify ou Cloudflare Pages (publicando a pasta `out`) e GitHub Pages. Se o site ficar
em um subcaminho (como `usuario.github.io/portfolio`), é preciso configurar `basePath` no
`next.config.mjs`. Em domínio próprio ou na raiz, não precisa.

## Estrutura

```
src/app/            layout, página e estilos globais
src/components/     Header, Hero, About, Skills, Projects, Trajetoria, Contact
src/components/ui/  SelectionBox (moldura tracejada), Section, Tag
src/content/        seus dados
src/lib/github.ts   busca dos repositórios
```
