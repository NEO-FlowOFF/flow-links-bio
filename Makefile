# NΞØ Protocol - Astro Flow Makefile
# Powered by NEO-FlowOFF

.PHONY: install dev build preview lint audit clean clean-cache help

# --- Variáveis ---
SHELL := /bin/bash
NODE_BIN := ./node_modules/.bin

# --- Alvo Padrão ---
all: help

# --- Comandos Astro ---

install:
	@echo "📦 Instalando dependências..."
	pnpm install

dev:
	@echo "🚀 Iniciando Astro em modo desenvolvimento..."
	pnpm dev

build:
	@echo "🏗️  Executando build do projeto..."
	pnpm build

preview:
	@echo "👀 Visualizando build de produção..."
	pnpm preview

# --- Segurança e Qualidade ---

audit:
	@echo "🔍 Verificando vulnerabilidades (pnpm audit)..."
	pnpm audit

lint:
	@echo "🧹 Verificando erros de código..."
	pnpm astro check

# --- Limpeza ---

clean:
	@echo "🧹 Limpando diretórios de build e cache..."
	@rm -rf dist .astro node_modules
	@echo "✅ Limpeza concluída!"

clean-cache:
	@echo "🧹 Limpando cache Astro..."
	@rm -rf .astro
	@echo "✅ Cache limpo!"

# --- Ajuda ---

help:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "                         ▄"
	@echo "         ░█▄ ░█░█▀▀▀ ▄▀▀▀▄ ▄  ▄▄▄  ▄▄▄▄    ▄▄▖"
	@echo "         ░█ █░█░█▀▀▀░█░▄▀█ ░ █░  █ █░  █░▐▛▀▀░"
	@echo "         ░█░░▀█░█▄▄▄░▀▄▄▄▀ ▀ ▀▄▄▄▀ █   █ ▝▚▄▄▖"
	@echo "                     ▀                 "
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "  📦 Dependências:"
	@echo "    make install     - Instala all dependências pnpm"
	@echo ""
	@echo "  🚀 Desenvolvimento:"
	@echo "    make dev         - Inicia servidor de dev (Astro)"
	@echo "    make build       - Gera /dist para produção"
	@echo "    make preview     - Testa build localmente"
	@echo ""
	@echo "  🧹 Qualidade:"
	@echo "    make audit       - Auditoria de segurança pnpm"
	@echo "    make lint        - Valida código Astro"
	@echo "    make clean       - Remove dist, .astro, node_modules"
	@echo "    make clean-cache - Remove apenas cache Astro"
	@echo ""
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
