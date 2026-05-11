const { test, expect } = require('@playwright/test');

const { goToLogin } = require('../helpers/navigationHelper');
const { login } = require('../helpers/loginHelper');

const users = require('../data/users.json');

test('Validar que el usuario se muestra en el dashboard', async ({ page }) => {

  // Arrange
  await goToLogin(page);
  await login(page, users.validUser.username, users.validUser.password);

  // Esperar que cargue el dashboard
  await page.locator('h6').waitFor();

  // Act
  const usuarioLogueado = page.locator('.oxd-userdropdown-name');

  // Assert
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
  await expect(usuarioLogueado).toBeVisible();

});