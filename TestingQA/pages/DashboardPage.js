export class DashboardPage {
  constructor(page) {
    this.page = page;

    this.pimLink = page.getByRole("link", { name: "PIM" });
    this.miInfoLink = page.getByRole("link", { name: "My Info" });
    this.userMenu = page.locator(".oxd-userdropdown-tab");
    this.logoutButton = page.getByRole("menuitem", { name: /logout/i });
    this.dashboardHeading = page.getByRole("heading", { name: /dashboard/i });
  }

  async openPim() {
    await this.pimLink.click();
  }

  async openMiInfo() {
    await this.miInfoLink.click();
  }

  async openUserMenu() {
    await this.userMenu.click();
  }

  async logout() {
    await this.openUserMenu();
    await this.logoutButton.click();
  }
}
