# CI - Testes Inteligentes com Playwright e GitHub Actions

[![CI - Testes Manuais](https://github.com/gismarb/ci_testes_inteligentes_gismar/actions/workflows/ci-manual.yml/badge.svg)](https://github.com/gismarb/ci_testes_inteligentes_gismar/actions/workflows/ci-manual.yml)
[![CI - Testes com IA Generativa](https://github.com/gismarb/ci_testes_inteligentes_gismar/actions/workflows/ci-ia.yml/badge.svg)](https://github.com/gismarb/ci_testes_inteligentes_gismar/actions/workflows/ci-ia.yml)

Projeto acadêmico desenvolvido para a atividade de Engenharia de Software envolvendo pipelines de Integração Contínua, automação de testes e uso de IA generativa como apoio à criação e refinamento de testes automatizados.

## 1. Objetivo

O objetivo deste projeto é demonstrar a configuração de duas pipelines de Integração Contínua com GitHub Actions:

- uma pipeline para execução de testes automatizados criados manualmente;
- uma pipeline para execução de testes automatizados criados/refinados com apoio de IA generativa.

A ferramenta escolhida para automação de testes foi o **Playwright**, por permitir testes E2E em aplicações web, execução em modo headless, geração de relatórios HTML, screenshots, vídeos e traces em caso de falha.

## 2. Aplicação-alvo

A aplicação-alvo é um sistema web simples chamado **Sistema Escola IF**, desenvolvido com HTML, CSS e JavaScript.

A aplicação contém:

- tela de login;
- tela de cadastro;
- dashboard;
- menu de navegação;
- páginas de alunos, disciplinas e sobre;
- simulação de logout.

Credenciais de teste:

```text
E-mail: admin@if.edu.br
Senha: 123456
```

## 3. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Playwright
- GitHub Actions
- Docker
- IA generativa como apoio à criação/refinamento dos testes

## 4. Estrutura do projeto

```text
ci_testes_inteligentes_gismar/
│
├── app/
│   ├── login.html
│   ├── cadastro.html
│   ├── dashboard.html
│   ├── alunos.html
│   ├── disciplinas.html
│   ├── sobre.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
│
├── tests/
│   ├── manual/
│   │   ├── login.spec.ts
│   │   └── navegacao.spec.ts
│   └── ia/
│       ├── cadastro-ai.spec.ts
│       └── validacao-ai.spec.ts
│
├── .github/
│   └── workflows/
│       ├── ci-manual.yml
│       └── ci-ia.yml
│
├── docs/
│   └── metricas-execucao.md
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .gitignore
├── .env.example
└── README.md
```

## 5. Testes automatizados

Os testes foram organizados em duas categorias.

### 5.1 Testes manuais

Localização:

```text
tests/manual/
```

Arquivos:

```text
login.spec.ts
navegacao.spec.ts
```

Cenários implementados:

- login com credenciais válidas;
- login com senha inválida;
- navegação para página de alunos;
- navegação para página de disciplinas.

Esses testes representam a abordagem manual, em que os cenários e scripts são definidos diretamente por mim (a partir do meu ponto de vista e análise).

### 5.2 Testes com apoio de IA generativa

Localização:

```text
tests/ia/
```

Arquivos:

```text
cadastro-ai.spec.ts
validacao-ai.spec.ts
```

Cenários implementados:

- cadastro de estudante com dados válidos;
- retorno da tela de cadastro para o login;
- validação de campos obrigatórios no cadastro;
- fluxo de saída/logout do sistema.

Esses testes representam a abordagem com apoio de IA generativa, utilizada para sugerir cenários, estruturar scripts Playwright e ampliar a cobertura com fluxos positivos e negativos. Após a geração/refinamento, os testes foram revisados, executados e validados manualmente.

## 6. Execução local com Docker

O Docker é utilizado para evitar a instalação direta do Node.js, Playwright e navegadores no sistema operacional local.

### 6.1 Construir a imagem

```bash
docker compose build
```

### 6.2 Executar todos os testes

```bash
docker compose run --rm ci-testes npm run test
```

### 6.3 Executar apenas os testes manuais

```bash
docker compose run --rm ci-testes npm run test:manual
```

### 6.4 Executar apenas os testes com apoio de IA

```bash
docker compose run --rm ci-testes npm run test:ia
```

### 6.5 Visualizar o relatório HTML

Após a execução dos testes, o relatório é gerado em:

```text
playwright-report/
```

Para visualizar com Docker:

```bash
docker compose run --rm --service-ports ci-testes npm run report
```

Depois, acesse no navegador:

```text
http://localhost:9323
```

## 7. Execução local sem Docker

Caso deseje executar sem Docker, é necessário ter Node.js instalado.

### 7.1 Instalar dependências

```bash
npm install
```

### 7.2 Instalar navegador do Playwright

```bash
npx playwright install --with-deps chromium
```

### 7.3 Executar testes

```bash
npm run test
```

## 8. GitHub Actions

O projeto possui duas pipelines de CI.

### 8.1 Pipeline de testes manuais

Arquivo:

```text
.github/workflows/ci-manual.yml
```

Executa:

```bash
npm run test:manual
```

### 8.2 Pipeline de testes com IA generativa

Arquivo:

```text
.github/workflows/ci-ia.yml
```

Executa:

```bash
npm run test:ia
```

As pipelines são executadas automaticamente em:

- push para branches secundárias;
- pull request direcionado para `main` ou `master`.

Cada pipeline realiza:

- checkout do código;
- configuração do Node.js;
- uso de cache para dependências npm;
- instalação das dependências do projeto;
- instalação do navegador Chromium do Playwright;
- execução dos testes;
- geração de logs;
- publicação do relatório HTML;
- publicação dos artefatos de execução, incluindo logs, screenshots, vídeos e traces quando gerados.

Os artefatos possuem retenção configurada para 7 dias.

## 9. Métricas e evidências

As métricas da execução local e das pipelines foram registradas no arquivo:

```text
docs/metricas-execucao.md
```

Foram observados:

- execução local com Docker;
- execução da pipeline manual;
- execução da pipeline com apoio de IA generativa;
- validação do gatilho de push em branch secundária;
- validação do gatilho de pull request para `main`;
- publicação de artefatos;
- geração de relatório HTML;
- logs indicando sucesso da execução.

## 10. Variáveis de ambiente

O arquivo `.env.example` apresenta as variáveis de referência do projeto:

```text
APP_BASE_URL=http://localhost:3000
TEST_USER_EMAIL=admin@if.edu.br
TEST_USER_PASSWORD=123456
```

Para uso local, pode-se criar um arquivo `.env`, se necessário. O arquivo `.env` está ignorado pelo Git.

## 11. Justificativa técnica

O Playwright foi escolhido por ser uma ferramenta moderna de testes E2E para aplicações web, com suporte a execução headless, relatórios HTML, screenshots, vídeos, traces e integração com ambientes de CI.

O Docker foi utilizado apenas como apoio ao ambiente local, permitindo executar os testes sem instalar as dependências diretamente no sistema operacional local.

O GitHub Actions foi utilizado como ambiente oficial de CI, executando automaticamente os testes em branches secundárias e pull requests para a branch principal.

A IA generativa foi utilizada como apoio para sugerir cenários, estruturar scripts de teste e ampliar a cobertura com fluxos positivos e negativos. Os testes gerados/refinados foram revisados e validados manualmente antes da submissão.

## 12. Conclusão

O projeto demonstra a aplicação prática de integração contínua com automação de testes. A comparação entre os testes manuais e os testes com apoio de IA generativa permite observar diferenças na criação dos cenários, cobertura dos fluxos e facilidade de expansão dos testes.

A abordagem com IA generativa contribuiu para sugerir cenários adicionais e ampliar a visão sobre fluxos positivos e negativos, enquanto a abordagem manual exigiu maior definição direta dos passos e validações pontuais (a partir do meu ponto de vista e análise).

## 13. Referências

- [Documentação oficial do Playwright](https://playwright.dev/docs/intro)
- [Playwright - Configuração em CI](https://playwright.dev/docs/ci-intro)
- [Playwright - Relatórios de teste](https://playwright.dev/docs/test-reporters)
- [Documentação oficial do GitHub Actions](https://docs.github.com/actions)
- [GitHub Actions - Sintaxe de workflows](https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions - Workflow artifacts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts)
- [Action oficial actions/checkout](https://github.com/actions/checkout)
- [Action oficial actions/setup-node](https://github.com/actions/setup-node)
- [Action oficial actions/upload-artifact](https://github.com/actions/upload-artifact)
- [Documentação oficial do Docker](https://docs.docker.com/)
- [Documentação oficial do Docker Compose](https://docs.docker.com/compose/)
- [Referência do Dockerfile](https://docs.docker.com/reference/dockerfile/)
- [Referência do Compose file](https://docs.docker.com/reference/compose-file/)
