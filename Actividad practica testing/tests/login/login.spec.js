import { test, expect } from "@playwright/test";

// Hook común: antes de cada test va al login
test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

// 🧪 Escenario 1: UI del login
test("Visualización correcta del formulario de login", async ({ page }) => {
  await expect(page.getByRole("heading", { name: /login/i })).toBeVisible();

  const form = page.locator("form");

  await expect(form).toContainText("Forgot your password?");
  await expect(form).toContainText("Username");
  await expect(form).toContainText("Password");
  await expect(page.getByRole("button", { name: /login/i })).toBeVisible();
});

// ⚠️ Escenario 2: Login sin credenciales
test("Login sin credenciales muestra mensajes Required", async ({ page }) => {
  await page.getByRole("button", { name: /login/i }).click();

  const requiredMessages = page.getByText("Required");

  await expect(requiredMessages).toHaveCount(2);
});

// ❌ Escenario 3: Login con credenciales inválidas
test("Login con credenciales inválidas muestra error", async ({ page }) => {
  await page.getByRole("textbox", { name: /username/i }).fill("Invalido");
  await page.getByRole("textbox", { name: /password/i }).fill("Invalido");
  await page.getByRole("button", { name: /login/i }).click();

  await expect(page.getByText(/invalid credentials/i)).toBeVisible();
});

// ✅ Escenario 4: Login exitoso
test("Login exitoso muestra el dashboard", async ({ page }) => {
  await page.getByRole("textbox", { name: /username/i }).fill("Admin");
  await page.getByRole("textbox", { name: /password/i }).fill("admin123");
  await page.getByRole("button", { name: /login/i }).click();

  const sideMenu = page.getByLabel("Sidepanel").getByRole("list");

  await expect(sideMenu).toContainText("Admin");
});
