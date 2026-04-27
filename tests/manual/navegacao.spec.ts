import { test, expect } from '@playwright/test';

test.describe('Testes manuais - Navegação', () => {
  test('deve navegar do dashboard para a página de alunos', async ({ page }) => {
    await page.goto('/dashboard.html');

    await page.getByRole('link', { name: 'Alunos' }).first().click();

    await expect(page).toHaveURL(/alunos\.html/);
    await expect(page.getByRole('heading', { name: 'Alunos cadastrados' })).toBeVisible();
    await expect(page.getByText('Ana Souza')).toBeVisible();
  });

  test('deve navegar do dashboard para a página de disciplinas', async ({ page }) => {
    await page.goto('/dashboard.html');

    await page.getByRole('link', { name: 'Disciplinas' }).first().click();

    await expect(page).toHaveURL(/disciplinas\.html/);
    await expect(page.getByRole('heading', { name: 'Disciplinas' })).toBeVisible();
    await expect(page.getByText('Integração Contínua')).toBeVisible();
  });
});
