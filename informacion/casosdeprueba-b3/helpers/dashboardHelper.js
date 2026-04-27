const { expect } = require('@playwright/test');

async function validarDashboard(page) {
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
}

module.exports = { validarDashboard };