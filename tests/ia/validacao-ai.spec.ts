import { test, expect } from '@playwright/test';

/*
  Teste classificado como "com apoio de IA generativa".

  Justificativa técnica:
  Este cenário representa uma ampliação de cobertura sugerida com apoio de IA,
  incluindo validação negativa de campos obrigatórios e verificação do fluxo
  de saída do sistema. Após a geração/refinamento, o teste foi revisado,
  executado e validado manualmente.
*/

test.describe('Testes com apoio de IA generativa - Validações e fluxo alternativo', () => {
  test('deve exibir erro ao tentar cadastrar sem preencher os campos', async ({ page }) => {
    await page.goto('/cadastro.html');

    await page.getByRole('button', { name: 'Cadastrar' }).click();

    await expect(page.getByText('Preencha todos os campos obrigatórios.')).toBeVisible();
  });

  test('deve sair do sistema ao clicar no menu Sair', async ({ page }) => {
    await page.goto('/login.html');

    await page.getByLabel('E-mail').fill('admin@if.edu.br');
    await page.getByLabel('Senha').fill('123456');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page).toHaveURL(/dashboard\.html/);

    await page.getByRole('link', { name: 'Sair' }).click();

    await expect(page).toHaveURL(/login\.html/);
    await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
  });
});
