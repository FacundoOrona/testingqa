# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> Logout - OrangeHRM >> Logout exitoso
- Location: tests\logout.spec.js:18:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'valid')
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage.js";
  3  | import { DashboardPage } from "../pages/DashboardPage.js";
  4  | import { users } from "../data/users.js";
  5  | import { loginAs } from "../helpers/auth.helper.js";
  6  | 
  7  | test.describe("Logout - OrangeHRM", () => {
  8  |   let loginPage;
  9  |   let dashboardPage;
  10 | 
  11 |   test.beforeEach(async ({ page }) => {
  12 |     loginPage = new LoginPage(page);
  13 |     dashboardPage = new DashboardPage(page);
  14 | 
> 15 |     await loginAs(page, loginPage, users.valid);
     |                                          ^ TypeError: Cannot read properties of undefined (reading 'valid')
  16 |   });
  17 | 
  18 |   test("Logout exitoso", async ({ page }) => {
  19 |     // Validar que está en dashboard
  20 |     await expect(dashboardPage.dashboardHeading).toBeVisible();
  21 | 
  22 |     // Ejecutar logout
  23 |     await dashboardPage.logout();
  24 | 
  25 |     // Validar redirección al login
  26 |     await expect(page).toHaveURL(/login/);
  27 | 
  28 |     // Validación extra (más robusta)
  29 |     await expect(loginPage.title).toBeVisible();
  30 |   });
  31 | });
  32 | 
```