# MEMORY.md // FLOW LINKS BIO

## Decisões ativas

- O repo publica `https://neoflowoff.agency` como site estático Astro.
- A URL canônica usa HTTPS sem `www`.
- O sitemap deve conter apenas rotas reais deste repo.
- `pnpm-workspace.yaml` local é um boundary intencional; não removê-lo.
- `allowBuilds` autoriza somente `esbuild` e `sharp`.
- Overrides locais mantêm `fast-uri` e `js-yaml` em versões corrigidas.
- Comandos pnpm locais não devem auditar, instalar ou validar siblings.
- TypeScript permanece em 6.x enquanto `astro check` depender da API
  programática ausente no TypeScript 7.
- Páginas antigas sem substituta, como `/vejacomo/`, podem permanecer 404;
  não redirecionar indiscriminadamente para a home.

## Validação

```bash
pnpm install
make lint
make build
make audit
```

`make audit` deve reportar somente caminhos iniciados neste pacote, nunca
nomes de projetos vizinhos.
