# SKILL.md // FLOW LINKS BIO

## Quando usar

Leia este arquivo antes de alterar o hub `neoflowoff.agency`, suas rotas,
SEO, conteúdo, build ou configuração pnpm.

## Rotina

1. Confirme que o Git root é este diretório.
2. Leia `CONTEXT.md`, `MEMORY.md`, `README` e `SETUP.md`.
3. Preserve `pnpm-workspace.yaml` como boundary local.
4. Use apenas conteúdo verificável; não invente cases, métricas ou clientes.
5. Adicione páginas em `src/pages/` e links internos via `SiteNav.astro`.
6. Mantenha title, description e canonical próprios por rota.
7. Rode `pnpm install`, `make lint`, `make build` e `make audit`.
8. Confirme que `dist/sitemap-0.xml` contém somente rotas deste repo.
9. Informe arquivos alterados, validações e risco residual.

## Limites

- Não tocar em `.env`, credenciais ou outros child repos.
- Não importar código de projetos vizinhos.
- Não criar redirects para a home sem equivalência de conteúdo.
- Não mascarar falha de `astro check` com sucesso de `tsc`.
