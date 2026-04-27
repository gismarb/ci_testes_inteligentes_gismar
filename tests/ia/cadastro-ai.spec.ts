import { test, expect } from '@playwright/test';

/*
  Teste classificado como "com apoio de IA generativa".

  Justificativa técnica:
  Este cenário foi elaborado com apoio de uma ferramenta de IA generativa
  para sugerir fluxo positivo de cadastro, estrutura do script Playwright
  e validações relevantes. Após a geração/refinamento, o teste foi revisado,
  executado e validado manualmente.
*/

test.describe('Testes com apoio de IA generativa - Cadastro', () => {
  test('deve cadastrar estudante com dados válidos', async ({ page }) => {
    await page.goto('/cadastro.html');

    await page.getByLabel('Nome completo').fill('João Teste da Silva');
    await page.getByLabel('E-mail').fill('joao.teste@if.edu.br');
    await page.getByLabel('Curso').selectOption('Engenharia de Software');
    await page.getByRole('button', { name: 'Cadastrar' }).click();

    await expect(page.getByText('Cadastro realizado com sucesso!')).toBeVisible();
  });

  test('deve permitir voltar do cadastro para o login', async ({ page }) => {
    await page.goto('/cadastro.html');

    await page.getByRole('link', { name: 'Voltar para o login' }).click();

    await expect(page).toHaveURL(/login\.html/);
    await expect(page.getByRole('heading', { name: 'Sistema Escola IF' })).toBeVisible();
  });
});
