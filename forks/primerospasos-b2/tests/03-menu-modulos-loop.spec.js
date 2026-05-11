import { test, expect } from '@playwright/test';

test('Validar que el modulo PIM existe en el menu', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);

  const modulos = page.locator('.oxd-main-menu-item');
  const cantidad = await modulos.count();
  let moduloEncontrado = false;

  for (let i = 0; i < cantidad; i++) {
    const nombreModulo = await modulos.nth(i).textContent();
    const texto = nombreModulo?.trim();

    if (texto === 'PIM') {
      moduloEncontrado = true;
      break;
    }
  }

  expect(moduloEncontrado).toBeTruthy();
});