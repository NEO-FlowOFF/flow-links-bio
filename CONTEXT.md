# CONTEXT.md // FLOW LINKS BIO

## Papel do projeto

`flow-links-bio` é o hub institucional público da NEØ FlowOFF. O site
centraliza descoberta de serviços e encaminha usuários para capacidades
publicadas em outros nós do ecossistema.

## Boundary

- Este diretório é um repositório Git soberano.
- O diretório pai `NEO-FlowOFF` é control plane, não runtime do produto.
- `pnpm-workspace.yaml` local impede que comandos deste repo consultem ou
  alterem projetos vizinhos.
- Nós compartilham contratos e URLs; não compartilham arquivos.

## Runtime e SEO

- Astro 7 com geração estática.
- Domínio canônico: `https://neoflowoff.agency`.
- Canonical calculado por rota em `src/layouts/Base.astro`.
- Sitemap gerado no build por `@astrojs/sitemap`.
- `public/robots.txt` referencia `sitemap-index.xml`.
- Variantes HTTP e `www` devem redirecionar permanentemente para HTTPS
  sem `www` na camada de domínio/hospedagem.

## Contratos externos

Links para `chat.neoflowoff.agency`, `sdr.neoflowoff.agency`, FlowPay e
outros produtos são integrações externas. Mudanças nesses nós devem ser
feitas nos respectivos repositórios soberanos.
