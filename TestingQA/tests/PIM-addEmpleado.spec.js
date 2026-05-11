import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { DashboardPage } from "../pages/DashboardPage.js";
import { PimPage } from "../pages/PimPage.js";
import { users } from "../data/users.js";
import { empleado } from "../data/empleado.js";
import { loginAs } from "../helpers/auth.helper.js";
import { createEmpleado } from "../helpers/empleado.helper.js";

test.describe("PIM - Alta de empleado", () => {
  let loginPage;
  let dashboardPage;
  let pimPage;

  test.beforeEach(async ({ page }) => {
    // Preparamos los page objects para que el test trabaje
    // con acciones de negocio y no con selectores sueltos.
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    pimPage = new PimPage(page);

    // El login queda resuelto en el arranque del escenario para que
    // el caso se enfoque solo en el alta del empleado.
    await loginAs(page, loginPage, users.valid);
  });

  test("Alta exitosa de un empleado", async ({ page }) => {
    // Los datos viven fuera del spec para facilitar reutilizacion,
    // mantenimiento y futuros escenarios con variantes.
    const empleadoAlta = empleado.standard;

    // Reutilizamos el flujo principal desde un helper para expresar
    // la intencion del caso de prueba con menos ruido tecnico.
    await createEmpleado(dashboardPage, pimPage, empleadoAlta);

    // Confirmamos que el guardado llevo al detalle del empleado,
    // que es la senal principal de una alta exitosa.
    await expect(page).toHaveURL(/viewPersonalDetails/);

    await pimPage.expectEmpleadoCreado(empleadoAlta);
  });
});
