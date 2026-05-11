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

- [MyInfo-editNombreApellido.spec.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/tests/MyInfo-editNombreApellido.spec.js:1)  
  Define el caso de prueba.

- [MiInfoPage.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/pages/MiInfoPage.js:1)  
  Tiene los selectores y acciones de la pantalla `My Info`.

- [miInfo.helper.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/helpers/miInfo.helper.js:1)  
  Agrupa el flujo de actualizar nombre y apellido.

- [auth.helper.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/helpers/auth.helper.js:1)  
  Hace el login reutilizable.

- [datosPersonales.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/data/datosPersonales.js:1)  
  Guarda los datos a cargar.

- [users.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/data/users.js:1)  
  Guarda las credenciales.

## Como correrlo

```bash
npx playwright test -g "My Info - Edicion de nombre y apellido"
```

## Nota

La validacion final se hace sobre los inputs y el mensaje de exito, porque en este demo el nombre visible del perfil no siempre se actualiza de forma confiable.
