# Métricas de Execução

Este arquivo registra as principais evidências observadas durante a execução local e durante as pipelines no GitHub Actions.

## Execução local com Docker

- Ambiente: Docker com imagem oficial do Playwright
- Comando executado: `docker compose run --rm ci-testes npm run test`
- Total de testes executados: 8
- Resultado: 8 passed
- Relatório HTML: gerado em `playwright-report/`

## Pipeline 1 - Testes manuais

- Workflow: CI - Testes Manuais
- Arquivo: `.github/workflows/ci-manual.yml`
- Evento validado 1: push em branch secundária
- Evento validado 2: pull request para `main`
- Comando executado: `npm run test:manual`
- Total de testes executados: 4
- Resultado: 4 passed
- Artefatos publicados: relatório HTML, logs e resultados dos testes
- Retenção dos artefatos: 7 dias
- Observação: houve warning do GitHub Actions sobre futura migração das actions para Node.js 24, sem impacto na execução dos testes.

## Pipeline 2 - Testes com apoio de IA generativa

- Workflow: CI - Testes com IA Generativa
- Arquivo: `.github/workflows/ci-ia.yml`
- Evento validado 1: push em branch secundária
- Evento validado 2: pull request para `main`
- Comando executado: `npm run test:ia`
- Total de testes executados: 4
- Resultado: 4 passed
- Artefatos publicados: relatório HTML, logs e resultados dos testes
- Retenção dos artefatos: 7 dias
- Observação: houve warning do GitHub Actions sobre futura migração das actions para Node.js 24, sem impacto na execução dos testes.

## Comparação inicial

A pipeline de testes manuais validou os fluxos principais de login e navegação. A pipeline com apoio de IA generativa validou cenários complementares, incluindo cadastro, validação de campos obrigatórios e saída do sistema.

Ambas as pipelines executaram corretamente e publicaram os artefatos necessários para análise posterior.
