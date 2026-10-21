# Portfólio de Daniel Gabriel

Site estático feito com Next.js, TypeScript e Tailwind CSS.

## Como rodar

Requer Node.js 18.18 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:3000
```

## Publicação no GitHub Pages

O deploy é feito automaticamente pelo GitHub Actions a cada push na branch `main`.
o site ficará disponível em:

<https://daneelgt.github.io/portfolio-daneelgt/>

## Como gerar o site localmente

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

## Estrutura

```
src/app/            layout, página e estilos globais
src/components/     Header, Hero, About, Skills, Projects, Trajetoria, Contact
src/components/ui/  SelectionBox (moldura tracejada), Section, Tag
src/content/        seus dados
src/lib/github.ts   busca dos repositórios
```
