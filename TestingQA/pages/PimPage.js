import { expect } from "@playwright/test";

export class PimPage {
  constructor(page) {
    this.page = page;

    this.addButton = page.getByRole("button", { name: /add/i });
    this.employeeInformationHeading = page.getByRole("heading", {
      name: "Employee Information",
    });
    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.middleNameInput = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/pim/);
    await expect(this.addButton).toBeVisible();
  }

  async openAddEmployeeForm() {
    await this.addButton.click();
    await expect(this.employeeInformationHeading).toBeVisible();
  }

  async addEmployee(employee) {
    await this.firstNameInput.fill(employee.firstName);
    await this.middleNameInput.fill(employee.middleName);
    await this.lastNameInput.fill(employee.lastName);
    await this.saveButton.click();
  }

  async expectEmployeeCreated(employee) {
    await expect(this.page).toHaveURL(/viewPersonalDetails/);
    await expect(this.page.getByText(employee.firstName)).toBeVisible();
    await expect(this.page.getByText(employee.lastName)).toBeVisible();
  }
}
