import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { users } from "../data/users.js";
import { loginAs } from "../helpers/auth.helper.js";

test.describe("Login - OrangeHRM", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("UI del login", async () => {
    await expect(loginPage.title).toBeVisible();
    await expect(loginPage.form).toContainText("Forgot your password?");
    await expect(loginPage.loginButton).toBeVisible();
  });

  test("Login sin credenciales", async () => {
    await loginPage.clickLogin();
    await expect(loginPage.requiredMessages).toHaveCount(2);
  });

  test("Login invalido", async () => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test("Login exitoso", async ({ page }) => {
    await loginAs(page, loginPage, users.valid);

    await expect(
      page.getByRole("heading", { name: /dashboard/i }),
    ).toBeVisible();
  });
});
