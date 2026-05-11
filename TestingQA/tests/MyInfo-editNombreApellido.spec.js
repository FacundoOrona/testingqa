import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { DashboardPage } from "../pages/DashboardPage.js";
import { MiInfoPage } from "../pages/MiInfoPage.js";
import { users } from "../data/users.js";
import { datosPersonales } from "../data/datosPersonales.js";
import { loginAs } from "../helpers/auth.helper.js";
import { actualizarNombreYApellido } from "../helpers/miInfo.helper.js";

test.describe("My Info - Edicion de nombre y apellido", () => {
  let loginPage;
  let dashboardPage;
  let miInfoPage;

  test.beforeEach(async ({ page }) => {
    // Preparamos los page objects para que cada test trabaje
    // con acciones del dominio y no con selectores repetidos.
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    miInfoPage = new MiInfoPage(page);

    // Dejamos la sesion iniciada antes de cada escenario para que
    // el foco del test quede solo en la edicion de datos personales.
    await loginAs(page, loginPage, users.valid);
  });

  test("Actualizacion exitosa del nombre y apellido", async () => {
    // Centralizamos los datos del caso para que cambiar el input
    // no obligue a modificar la logica del flujo.
    const datosActualizados = datosPersonales.actualizacionBasica;

    // Ejecutamos el recorrido funcional completo desde el dashboard
    // hasta el guardado de la informacion personal.
    await actualizarNombreYApellido(
      dashboardPage,
      miInfoPage,
      datosActualizados,
    );

    // El helper ya valida que los datos se escriban en los campos y
    // que el sistema confirme la actualizacion con el mensaje visual.
  });
});
