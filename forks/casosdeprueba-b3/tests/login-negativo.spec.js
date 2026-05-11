const { test, expect } = require('@playwright/test');

const { goToLogin } = require('../helpers/navigationHelper');
const { login } = require('../helpers/loginHelper');

const users = require('../data/users.json');

test('Login con credenciales incorrectas', async ({ page }) => {

  // Arrange
  await goToLogin(page);

  // Act
  await login(page, users.invalidUser.username, users.invalidUser.password);

  await page().pause();

  // Assert
  await expect(page.getByRole('alert')).toBeVisible();

});