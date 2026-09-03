<!-- markdownlint-disable MD003 MD007 MD011 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->
# NEØ FlowOFF Agency Hub

```text
========================================
     NEO FLOWOFF · AGENCY HUB (BIO)
========================================
Status:  ACTIVE
Runtime: Astro 7 Static Site
Deploy:  Cloudflare Pages
========================================
```

## ⟠ Objetivo

Hub público institucional e ponto central de distribuição de links e roteamento do ecossistema `NEO-FlowOFF`.

Apresenta serviços, capacidades públicas, cases e direciona tráfego para os nós comerciais, plataformas e agentes do ecossistema.

────────────────────────────────────────

## ⨷ Contrato

- Repositório soberano dentro da organização `NEO-FlowOFF`.
- Frontend estático em Astro sem dependência de runtime servidor.
- Integração com outros nós por links e contratos canônicos, sem compartilhamento de código-fonte.
- Geração de sitemap automatizada via `@astrojs/sitemap`.

────────────────────────────────────────

## ⧉ Stack

- **Framework**: Astro 7
- **Linguagem**: TypeScript
- **Estilos**: CSS modular e componentes Astro nativos
- **Gerenciador de Pacotes**: pnpm 11+
- **Deploy**: Cloudflare Pages (`https://flow-links-bio.pages.dev` / domínio configurado)

────────────────────────────────────────

## ◬ Rotas Indexáveis

```text
/                            Hub inicial e direcionamento
/servicos/                   Apresentação de serviços
/agentes-de-ia/              Capacidades de automação por agentes
/automacao-comercial/        Soluções de scale e automação
/infraestrutura-digital/     Arquitetura e infraestrutura autônoma
/cases/                      Cases e resultados
/contato/                    Canais de contato direto
```

────────────────────────────────────────

## ⍟ Operação

```bash
# Desenvolvimento local
pnpm dev

# Build de produção
pnpm build

# Pré-visualização do build
pnpm preview
```

────────────────────────────────────────

## ⦿ Referências

- [SETUP](./SETUP.md)
- [CONTEXT](./CONTEXT.md)
- [SVG](./SVG.md)
- [CHECKLIST](./CHECKLIST.md)
- [SOVEREIGN_DEV](./SOVEREIGN_DEV.md)

```text
────────────────────────────────────────
NΞØ Protocol · FlowOFF Hub
────────────────────────────────────────
```
