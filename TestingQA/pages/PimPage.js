import { expect } from "@playwright/test";

export class PimPage {
  constructor(page) {
    this.page = page;

    this.pimMenuLink = page.getByRole("link", { name: "PIM" });
    this.addButton = page.getByRole("button", { name: /add/i });
    this.encabezadoInformacionEmpleado = page.getByRole("heading", {
      name: "Employee Information",
    });
    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.middleNameInput = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/pim/);
    await expect(this.pimMenuLink).toHaveClass(/active/);
    await expect(this.addButton).toBeVisible();
  }

  async openAddEmpleadoForm() {
    await this.addButton.click();
    await expect(this.encabezadoInformacionEmpleado).toBeVisible();
  }

  async addEmpleado(empleado) {
    await this.firstNameInput.fill(empleado.firstName);
    await this.middleNameInput.fill(empleado.middleName);
    await this.lastNameInput.fill(empleado.lastName);
    await this.saveButton.click();
  }

  async expectEmpleadoCreado(empleado) {
    await expect(this.page).toHaveURL(/viewPersonalDetails/);
    await expect(this.page.getByText(empleado.firstName)).toBeVisible();
    await expect(this.page.getByText(empleado.lastName)).toBeVisible();
  }
}
