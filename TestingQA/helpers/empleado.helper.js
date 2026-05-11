export async function createEmpleado(dashboardPage, pimPage, empleado) {
  await dashboardPage.openPim();
  await pimPage.expectLoaded();
  await pimPage.openAddEmpleadoForm();
  await pimPage.addEmpleado(empleado);
}
