# NΞØ Protocol - Astro Flow Makefile
# Powered by NEO-FlowOFF

.PHONY: install dev build preview lint audit clean clean-cache flow help

# --- Variáveis ---
SHELL := /bin/bash
NODE_BIN := ./node_modules/.bin

# --- Alvo Padrão ---
all: help

# --- Comandos Astro ---

install:
	@echo "📦 Instalando dependências..."
	npm install

dev:
	@echo "🚀 Iniciando Astro em modo desenvolvimento..."
	npm run dev

build:
	@echo "🏗️  Executando build do projeto..."
	npm run build

preview:
	@echo "👀 Visualizando build de produção..."
	npm run preview

# --- Segurança e Qualidade ---

audit:
	@echo "🔍 Verificando vulnerabilidades (npm audit)..."
	npm audit

lint:
	@echo "🧹 Verificando erros de código..."
	@npx astro check || (echo "❌ Erros de lint encontrados! Corrija-os antes de continuar." && exit 1)

# --- Limpeza ---

clean:
	@echo "🧹 Limpando diretórios de build e cache..."
	@rm -rf dist .astro node_modules
	@echo "✅ Limpeza concluída!"

clean-cache:
	@echo "🧹 Limpando cache Astro..."
	@rm -rf .astro
	@echo "✅ Cache limpo!"

# --- NΞØ Protocol: Fluxo Seguro de Commit e Push ---

flow: audit lint build
	@echo "🛡️ Protocolo NΞØ: Verificação de Segurança e Build concluída com sucesso."
	@git status
	@echo ""
	@read -p "Digite a mensagem do commit (seguindo Conventional Commits, ex: feat: refactor hub): " msg; \
	if [ -z "$$msg" ]; then \
		echo "❌ Erro: Mensagem de commit é obrigatória."; \
		exit 1; \
	fi; \
	git add .; \
	git commit -m "$$msg"; \
	echo "📤 Enviando para o repositório remoto..."; \
	git push origin $$(git rev-parse --abbrev-ref HEAD)
	@echo "✅ Fluxo concluído! O deploy automático iniciará em breve."

# --- Ajuda ---

help:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "           NΞØ FLOW - ASTRO COMMANDS                    "
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "  📦 Dependências:"
	@echo "    make install     - Instala all dependências npm"
	@echo ""
	@echo "  🚀 Desenvolvimento:"
	@echo "    make dev         - Inicia servidor de dev (Astro)"
	@echo "    make build       - Gera /dist para produção"
	@echo "    make preview     - Testa build localmente"
	@echo ""
	@echo "  🧹 Qualidade:"
	@echo "    make audit       - Auditoria de segurança npm"
	@echo "    make lint        - Valida código Astro"
	@echo "    make clean       - Remove dist, .astro, node_modules"
	@echo "    make clean-cache - Remove apenas cache Astro"
	@echo ""
	@echo "  🛡️  Protocolo NΞØ:"
	@echo "    make flow        - Audit → Lint → Build → Commit → Push"
	@echo ""
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
