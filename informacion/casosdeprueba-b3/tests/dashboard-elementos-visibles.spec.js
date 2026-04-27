const { test, expect } = require('@playwright/test');

const { goToLogin } = require('../helpers/navigationHelper');
const { login } = require('../helpers/loginHelper');

const users = require('../data/users.json');

test('Validar elementos visibles del menu lateral', async ({ page }) => {

  // Arrange
  await goToLogin(page);
  await login(page, users.validUser.username, users.validUser.password);

  const elementosEsperados = ['Admin', 'PIM', 'Leave', 'Time'];

  // Esperar que el menu lateral cargue
  await page.locator('.oxd-main-menu-item').first().waitFor();

  // Act y Assert
  for (const elemento of elementosEsperados) {
    await expect(page.getByRole('link', { name: elemento })).toBeVisible();
  }

});