const { test, expect } = require('@playwright/test');

const { goToLogin } = require('../helpers/navigationHelper');
const { login } = require('../helpers/loginHelper');

const users = require('../data/users.json');

test('Validar modulos del menu lateral', async ({ page }) => {

  // Arrange
  await goToLogin(page);
  await login(page, users.validUser.username, users.validUser.password);

  // Espera que el menu lateral cargue
  await page.locator('.oxd-main-menu-item').first().waitFor();

  // Act
  const modulos = page.locator('.oxd-main-menu-item');
  const cantidad = await modulos.count();

  let moduloEncontrado = false;

for (let i = 0; i < cantidad; i++) {
  const nombre = await modulos.nth(i).textContent();
  const texto = nombre?.trim();

  if (texto?.includes('PIM')) {
    moduloEncontrado = true;
    break;
  }
}

  // Assert
  expect(moduloEncontrado).toBeTruthy();

});