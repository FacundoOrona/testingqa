const { test } = require('@playwright/test');

const { goToLogin } = require('../helpers/navigationHelper');
const { login } = require('../helpers/loginHelper');
const { validarDashboard } = require('../helpers/dashboardHelper');

const users = require('../data/users.json');

test('Login exitoso', async ({ page }) => {

  // Arrange
  await goToLogin(page);

  // Act
  await login(page, users.validUser.username, users.validUser.password);

  // Assert
  await validarDashboard(page);

});