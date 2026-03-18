<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Luís Marques Pintura

Landing page em React + Vite pronta para desenvolvimento local e publicação no GitHub Pages.

## Requisitos

- Node.js
- npm

## Desenvolvimento local

1. Instale as dependências:
   `npm install`
2. Defina `GEMINI_API_KEY` em `.env.local` se a aplicação precisar dessa variável.
3. Inicie o ambiente local:
   `npm run dev`

## Build

Gera a versão de produção em `dist`:

`npm run build`

## Deploy no GitHub Pages

O projeto já está configurado para publicar na branch `gh-pages` e usar a base `/luis-marques/` em produção.

### Opção 1: usando o remote `origin`

Configure o repositório remoto uma vez:

`git remote add origin git@github.com:fyze-pt/luis-marques.git`

Publique:

`npm run deploy`

### Opção 2: usando URL explícita do repositório

Sem configurar `origin`, publique informando a URL do repositório:

`GH_PAGES_REPO=git@github.com:fyze-pt/luis-marques.git npm run deploy:repo`

## GitHub Pages

Depois do primeiro deploy, no GitHub configure Pages para servir a partir da branch `gh-pages`, pasta `/`.
