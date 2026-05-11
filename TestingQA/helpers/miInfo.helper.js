export async function actualizarNombreYApellido(
  dashboardPage,
  miInfoPage,
  datosPersonales,
) {
  await dashboardPage.openMiInfo();
  await miInfoPage.expectLoaded();
  await miInfoPage.completarNombreYApellido(datosPersonales);
  await miInfoPage.expectDatosPersonalesIngresados(datosPersonales);
  await miInfoPage.guardarDatosPersonales();
}
