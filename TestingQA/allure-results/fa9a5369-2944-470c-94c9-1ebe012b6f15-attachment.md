# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login - OrangeHRM >> Login inválido
- Location: tests\login.spec.js:25:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'invalid')
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage.js";
  3  | import { users } from "../data/users.js";
  4  | import { loginAs } from "../helpers/auth.helper.js";
  5  | 
  6  | test.describe("Login - OrangeHRM", () => {
  7  |   let loginPage;
  8  | 
  9  |   test.beforeEach(async ({ page }) => {
  10 |     loginPage = new LoginPage(page);
  11 |     await loginPage.goto();
  12 |   });
  13 | 
  14 |   test("UI del login", async () => {
  15 |     await expect(loginPage.title).toBeVisible();
  16 |     await expect(loginPage.form).toContainText("Forgot your password?");
  17 |     await expect(loginPage.loginButton).toBeVisible();
  18 |   });
  19 | 
  20 |   test("Login sin credenciales", async () => {
  21 |     await loginPage.clickLogin();
  22 |     await expect(loginPage.requiredMessages).toHaveCount(2);
  23 |   });
  24 | 
  25 |   test("Login inválido", async () => {
> 26 |     await loginPage.login(users.invalid.username, users.invalid.password);
     |                                 ^ TypeError: Cannot read properties of undefined (reading 'invalid')
  27 |     await expect(loginPage.errorMessage).toBeVisible();
  28 |   });
  29 | 
  30 |   test("Login exitoso", async ({ page }) => {
  31 |     await loginAs(page, loginPage, users.valid);
  32 | 
  33 |     // ✅ Validación más robusta del dashboard
  34 |     await expect(
  35 |       page.getByRole("heading", { name: /dashboard/i }),
  36 |     ).toBeVisible();
  37 |   });
  38 | });
  39 | 
```