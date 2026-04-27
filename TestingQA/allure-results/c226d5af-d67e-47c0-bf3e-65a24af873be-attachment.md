# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login - OrangeHRM >> Login inválido
- Location: tests\login.spec.js:25:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     // Selectores
  6  |     this.usernameInput = page.getByRole("textbox", { name: /username/i });
  7  |     this.passwordInput = page.getByRole("textbox", { name: /password/i });
  8  |     this.loginButton = page.getByRole("button", { name: /login/i });
  9  |     this.errorMessage = page.getByText(/invalid credentials/i);
  10 |     this.requiredMessages = page.getByText("Required");
  11 |     this.form = page.locator("form");
  12 |     this.title = page.getByRole("heading", { name: /login/i });
  13 |   }
  14 | 
  15 |   async goto() {
> 16 |     await this.page.goto(
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  17 |       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  18 |     );
  19 |   }
  20 | 
  21 |   async login(username, password) {
  22 |     await this.usernameInput.fill(username);
  23 |     await this.passwordInput.fill(password);
  24 |     await this.loginButton.click();
  25 |   }
  26 | 
  27 |   async clickLogin() {
  28 |     await this.loginButton.click();
  29 |   }
  30 | }
  31 | 
```