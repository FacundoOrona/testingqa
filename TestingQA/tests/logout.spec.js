import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { DashboardPage } from "../pages/DashboardPage.js";
import { users } from "../data/users.js";
import { loginAs } from "../helpers/auth.helper.js";

test.describe("Logout - OrangeHRM", () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginAs(page, loginPage, users.valid);
  });

  test("Logout exitoso", async ({ page }) => {
    await expect(dashboardPage.dashboardHeading).toBeVisible();

    await dashboardPage.logout();

    await expect(page).toHaveURL(/login/);

    await expect(loginPage.title).toBeVisible();
  });
});
