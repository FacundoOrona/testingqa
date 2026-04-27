import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Selectores
    this.usernameInput = page.getByRole("textbox", { name: /username/i });
    this.passwordInput = page.getByRole("textbox", { name: /password/i });
    this.loginButton = page.getByRole("button", { name: /login/i });
    this.errorMessage = page.getByText(/invalid credentials/i);
    this.requiredMessages = page.getByText("Required");
    this.form = page.locator("form");
    this.title = page.getByRole("heading", { name: /login/i });
  }

  async goto() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      },
    );

    await expect(this.title).toBeVisible({ timeout: 15000 });
    await expect(this.usernameInput).toBeVisible({ timeout: 15000 });
    await expect(this.passwordInput).toBeVisible({ timeout: 15000 });
    await expect(this.loginButton).toBeVisible({ timeout: 15000 });
  }

  async login(username, password) {
    await expect(this.usernameInput).toBeEditable({ timeout: 15000 });
    await expect(this.passwordInput).toBeEditable({ timeout: 15000 });

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLogin() {
    await expect(this.loginButton).toBeEnabled({ timeout: 15000 });
    await this.loginButton.click();
  }
}
