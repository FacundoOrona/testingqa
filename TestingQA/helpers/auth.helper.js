export async function loginAs(page, loginPage, user) {
  await loginPage.goto();
  await loginPage.login(user.username, user.password);
}
