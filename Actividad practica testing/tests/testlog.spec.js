import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  // Navegar al login
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // Verificar que el título de la página es correcto
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

  // Verificar que el formulario contiene elementos básicos
  await expect(page.locator("form")).toContainText("Forgot your password?");
  await expect(page.locator("form")).toContainText("Username");
  await expect(page.locator("form")).toContainText("Password");
  await expect(page.getByRole("button")).toContainText("Login");

  // Caso 1: Intentar login sin credenciales, debe mostrar "Required"
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Required").first()).toBeVisible();
  await expect(page.getByText("Required").nth(1)).toBeVisible();

  // Caso 2: Credenciales inválidas, debe mostrar "Invalid credentials"
  await page.getByRole("textbox", { name: "Username" }).fill("Invalido");
  await page.getByRole("textbox", { name: "Password" }).fill("Invalido");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Invalid credentials")).toBeVisible();

  // Caso 3: Credenciales válidas, debe loguear correctamente
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // Verificar que aparece el menú lateral siendo asi un LOGIN EXITOSO
  await expect(page.getByLabel("Sidepanel").getByRole("list")).toContainText(
    "Admin",
  );
});
