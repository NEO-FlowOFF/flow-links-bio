# NΞØ Protocol - Astro Flow Makefile
# Powered by NEO-FlowOFF

.PHONY: install dev build preview lint audit flow help

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

# --- NΞØ Protocol: Fluxo Seguro de Commit e Push ---

flow: audit lint build
	@echo "🛡️ Protocolo NΞØ: Verificação de Segurança e Build concluída com sucesso."
	@git status
	@echo ""
	@read -p "Digite a mensagem do commit (seguindo Conventional Commits, ex: feat: add styles): " msg; \
	if [ -z "$$msg" ]; then \
		echo "❌ Erro: Mensagem de commit é obrigatória."; \
		exit 1; \
	fi; \
	git add .; \
	git commit -m "$$msg"; \
	echo "📤 Enviando para o repositório remoto..."; \
	git push origin $$(git rev-parse --abbrev-ref HEAD)
	@echo "✅ Fluxo concluído! O Render.com iniciará o deploy automático."

# --- Ajuda ---

help:
	@echo "--------------------------------------------------------"
	@echo "           NΞØ FLOW - ASTRO COMMANDS                    "
	@echo "--------------------------------------------------------"
	@echo "  make dev      - Inicia o servidor de dev (Astro)"
	@echo "  make build    - Gera a pasta /dist para produção"
	@echo "  make preview  - Testa o build localmente"
	@echo "  make audit    - Roda auditoria de segurança"
	@echo "  make lint     - Valida o código Astro"
	@echo "  make flow     - Protocolo NΞØ (Audit -> Lint -> Build -> Git)"
	@echo "--------------------------------------------------------"
