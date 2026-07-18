# SETUP.md // FLOW LINKS BIO

## Requisitos

- Node.js 22 ou superior.
- pnpm 11.13.1, resolvido pelo Corepack a partir de `package.json`.

## Instalação

```bash
corepack enable
pnpm install
```

O `pnpm-workspace.yaml` local inclui somente este pacote. Se o install
mostrar nomes de projetos vizinhos, interrompa e restaure esse arquivo.

## Desenvolvimento

```bash
pnpm dev
```

## Validação

```bash
make lint
make build
make audit
```

- `make lint` executa `astro check`.
- `make build` gera o site estático em `dist/`.
- `make audit` verifica apenas dependências deste repo e falha enquanto
  houver vulnerabilidades conhecidas.

## Smoke test SEO

```bash
rg '<loc>' dist/sitemap-0.xml
rg 'canonical' dist/index.html dist/*/index.html
```

O domínio publicado deve responder em `https://neoflowoff.agency`, com
HTTP e `www` redirecionando para essa origem canônica.
