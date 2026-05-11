import { expect } from "@playwright/test";

export class MiInfoPage {
  constructor(page) {
    this.page = page;

    this.enlaceMiInfo = page.getByRole("link", { name: "My Info" });
    this.inputNombre = page.getByRole("textbox", { name: "First Name" });
    this.inputApellido = page.getByRole("textbox", { name: "Last Name" });
    this.formularioDatosPersonales = page
      .locator("form")
      .filter({ has: this.inputNombre })
      .first();
    this.botonGuardarDatosPersonales = this.formularioDatosPersonales.getByRole(
      "button",
      { name: "Save" },
    );
    this.mensajeActualizacionExitosa = page.getByText(/successfully updated/i);
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/viewPersonalDetails/);
    await expect(this.enlaceMiInfo).toHaveClass(/active/);
    await expect(this.inputNombre).toBeVisible();
    await expect(this.inputApellido).toBeVisible();
  }

  async completarNombreYApellido(datosPersonales) {
    await this.inputNombre.fill(datosPersonales.nombre);
    await this.inputApellido.fill(datosPersonales.apellido);
  }

  async expectDatosPersonalesIngresados(datosPersonales) {
    await expect(this.inputNombre).toHaveValue(datosPersonales.nombre);
    await expect(this.inputApellido).toHaveValue(datosPersonales.apellido);
  }

  async guardarDatosPersonales() {
    await expect(this.botonGuardarDatosPersonales).toBeEnabled();
    await this.botonGuardarDatosPersonales.click();
    await expect(this.mensajeActualizacionExitosa).toBeVisible();
  }
}
