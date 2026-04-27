import { test, expect } from "@playwright/test";

test("Login + Alta de empleado en PIM", async ({ page }) => {
  // Login
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // Validación: login exitoso
  await expect(page).toHaveURL(/dashboard/);

  // Ir a PIM
  await page.getByRole("link", { name: "PIM" }).click();

  //  Validación: estamos en PIM
  await expect(page).toHaveURL(/pim/);

  // Click en Add
  await page.getByRole("button", { name: /Add/ }).click();

  // Validación: formulario visible
  await expect(
    page.getByRole("heading", { name: "Employee Information" }),
  ).toBeVisible();

  // Completar datos
  const firstName = "Nuevo";
  const middleName = "Empleado";
  const lastName = "Orange";

  await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
  await page.getByRole("textbox", { name: "Middle Name" }).fill(middleName);
  await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);

  // Guardar
  await page.getByRole("button", { name: "Save" }).click();

  //  Validación: empleado creado
  await expect(page).toHaveURL(/viewPersonalDetails/);

  //  Validación fuerte: nombre visible en pantalla
  await expect(page.getByText(firstName)).toBeVisible();
  await expect(page.getByText(lastName)).toBeVisible();
});
