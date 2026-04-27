import { test, expect } from '@playwright/test';

test.describe('Testes manuais - Login', () => {
  test('deve realizar login com credenciais válidas', async ({ page }) => {
    await page.goto('/login.html');

    await page.getByLabel('E-mail').fill('admin@if.edu.br');
    await page.getByLabel('Senha').fill('123456');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page).toHaveURL(/dashboard\.html/);
    await expect(page.getByRole('heading', { name: 'Bem-vindo ao painel acadêmico' })).toBeVisible();
  });

  test('deve exibir erro ao tentar login com senha inválida', async ({ page }) => {
    await page.goto('/login.html');

    await page.getByLabel('E-mail').fill('admin@if.edu.br');
    await page.getByLabel('Senha').fill('senha-errada');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page.getByText('E-mail ou senha inválidos.')).toBeVisible();
  });
});
