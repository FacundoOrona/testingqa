import { test, expect } from "@playwright/test";

test("Logout en OrangeHRM", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // Login
  await page.getByRole("textbox", { name: /username/i }).fill("Admin");
  await page.getByRole("textbox", { name: /password/i }).fill("admin123");
  await page.getByRole("button", { name: /login/i }).click();

  // Validar que entró
  const userMenu = page.locator(".oxd-userdropdown-tab");
  await expect(userMenu).toBeVisible();

  // Logout
  await userMenu.click();
  await page.getByRole("menuitem", { name: /logout/i }).click();

  // Validar que volvió al login
  await expect(page).toHaveURL(/login/);
});

/* === GHERKING ===
COMO usuario
QUIERO desloguearme
PARA finalizar mi sesión de forma segura

Característica: Logout de usuario

  Escenario: Logout exitoso desde el sistema
    Dado que el usuario está en la página de login
    Y se autentica con credenciales válidas
    Cuando accede al menú de usuario
    Y selecciona la opción de logout
    Entonces el sistema redirige a la página de login */
