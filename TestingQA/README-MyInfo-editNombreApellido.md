# MyInfo-editNombreApellido

Este test valida la edicion de nombre y apellido en `My Info`.

## Flujo

1. hace login con un usuario valido
2. entra a `My Info`
3. completa nombre y apellido
4. valida que los datos se escribieron en los inputs
5. guarda
6. valida el mensaje `Successfully Updated`

## Archivos que usa

- [MyInfo-editNombreApellido.spec.js]
  Define el caso de prueba.

- [MiInfoPage.js]
  Tiene los selectores y acciones de la pantalla `My Info`.

- [miInfo.helper.js]
  Agrupa el flujo de actualizar nombre y apellido.

- [auth.helper.js]  
  Hace el login reutilizable.

- [datosPersonales.js]
  Guarda los datos a cargar.

- [users.js]
  Guarda las credenciales.

## Como correrlo

```bash
npx playwright test -g "My Info - Edicion de nombre y apellido"
```

## Nota

La validacion final se hace sobre los inputs y el mensaje de exito, porque en este demo el nombre visible del perfil no siempre se actualiza de forma confiable.
