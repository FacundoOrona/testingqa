# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login - OrangeHRM >> Login inválido
- Location: tests\login.spec.js:25:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect.toBeVisible: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [ref=e23]: Adminfake
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]: incorrecta
          - button "Login" [active] [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e53]:
    - img "orangehrm-logo"
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
  26 |     await loginPage.login(users.invalid.username, users.invalid.password);
> 27 |     await expect(loginPage.errorMessage).toBeVisible();
     |                                          ^ Error: expect.toBeVisible: Target page, context or browser has been closed
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