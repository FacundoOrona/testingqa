# README - MyInfo-editNombreApellido

Este documento explica como funciona el test automatizado `MyInfo-editNombreApellido.spec.js`, que valida la edicion de nombre y apellido en OrangeHRM usando Playwright.

## Objetivo del test

El caso prueba este flujo funcional:

1. iniciar sesion con un usuario valido
2. entrar a la seccion `My Info`
3. editar nombre y apellido
4. verificar que los datos fueron escritos correctamente en los campos
5. guardar los cambios
6. validar que el sistema muestre confirmacion visual de actualizacion

## Archivo principal del test

El spec vive en:

- [MyInfo-editNombreApellido.spec.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/tests/MyInfo-editNombreApellido.spec.js:1)

Ese archivo no contiene toda la logica tecnica. Su responsabilidad es describir el escenario de negocio y apoyarse en helpers, data y page objects.

## Estructura utilizada

Para mantener el test ordenado, el flujo se divide en cuatro capas:

1. `spec`
2. `pages`
3. `helpers`
4. `data`

### 1. Spec

Archivo:

- [MyInfo-editNombreApellido.spec.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/tests/MyInfo-editNombreApellido.spec.js:1)

Responsabilidad:

- declarar el escenario de prueba
- preparar el contexto con `beforeEach`
- leer los datos del caso
- ejecutar el helper principal

El spec esta pensado para leerse casi como una historia corta:

- loguearse
- tomar los datos de prueba
- actualizar nombre y apellido

## 2. Pages

Los page objects encapsulan selectores y acciones sobre cada pantalla.

### LoginPage

Archivo:

- [LoginPage.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/pages/LoginPage.js:1)

Responsabilidad:

- abrir la URL de login
- ubicar los campos `Username` y `Password`
- ejecutar el login

Metodos importantes:

- `goto()`: abre la pagina de login y espera elementos basicos
- `login(username, password)`: completa credenciales y hace click en `Login`

### DashboardPage

Archivo:

- [DashboardPage.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/pages/DashboardPage.js:1)

Responsabilidad:

- navegar desde el dashboard a modulos principales

Metodo usado en este test:

- `openMiInfo()`: hace click en el link `My Info`

### MiInfoPage

Archivo:

- [MiInfoPage.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/pages/MiInfoPage.js:1)

Responsabilidad:

- representar la pantalla `My Info`
- ubicar inputs y botones del formulario personal
- validar que la pagina esta cargada
- completar nombre y apellido
- validar que los datos se escribieron
- guardar el formulario

Metodos importantes:

- `expectLoaded()`
  - valida URL con `viewPersonalDetails`
  - valida que `My Info` este activo
  - valida visibilidad de nombre y apellido

- `completarNombreYApellido(datosPersonales)`
  - escribe el `nombre`
  - escribe el `apellido`

- `expectDatosPersonalesIngresados(datosPersonales)`
  - valida que los inputs tengan exactamente los valores enviados

- `guardarDatosPersonales()`
  - hace click en el boton `Save` del formulario correcto
  - espera el mensaje `Successfully Updated`

## 3. Helpers

Los helpers agrupan secuencias de pasos que tienen sentido funcional.

### auth.helper

Archivo:

- [auth.helper.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/helpers/auth.helper.js:1)

Responsabilidad:

- reutilizar el login

Metodo:

- `loginAs(page, loginPage, user)`

Que hace:

1. llama a `loginPage.goto()`
2. llama a `loginPage.login(user.username, user.password)`

### miInfo.helper

Archivo:

- [miInfo.helper.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/helpers/miInfo.helper.js:1)

Responsabilidad:

- encapsular el flujo de actualizacion de datos personales

Metodo:

- `actualizarNombreYApellido(dashboardPage, miInfoPage, datosPersonales)`

Que hace:

1. abre `My Info`
2. valida que la pagina cargo
3. completa nombre y apellido
4. valida que los datos quedaron escritos en los campos
5. guarda los cambios

## 4. Data

Los datos del test estan separados de la logica.

### users

Archivo:

- [users.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/data/users.js:1)

Responsabilidad:

- guardar credenciales de prueba

En este test se usa:

- `users.valid`

### datosPersonales

Archivo:

- [datosPersonales.js](C:/Users/CYMAX/Documents/GitHub/testingqa/TestingQA/data/datosPersonales.js:1)

Responsabilidad:

- guardar los datos a cargar en `My Info`

En este test se usa:

- `datosPersonales.actualizacionBasica`

Ese objeto contiene:

- `nombre`
- `apellido`

## Flujo completo del test

El recorrido completo es este:

1. Playwright crea una `page`
2. el `beforeEach` instancia:
   - `LoginPage`
   - `DashboardPage`
   - `MiInfoPage`
3. el helper `loginAs(...)` hace login con `users.valid`
4. el test toma `datosPersonales.actualizacionBasica`
5. el helper `actualizarNombreYApellido(...)`:
   - navega a `My Info`
   - valida carga
   - escribe nombre y apellido
   - valida los valores escritos
   - guarda
6. `MiInfoPage` espera el mensaje de actualizacion exitosa

## Por que el test valida asi

Durante la implementacion se detecto que el demo de OrangeHRM no siempre refleja el nombre nuevo en un heading o lo deja persistido de forma confiable entre corridas. Por eso se eligio una validacion mas estable y realista para este entorno:

- verificar que los valores fueron cargados en los inputs
- verificar que el sistema muestra el mensaje `Successfully Updated`

Esto hace que el test valide el comportamiento observable del flujo, en lugar de depender de una señal inestable del demo.

## Como ejecutarlo

Ejecutar solo este caso:

```bash
npx playwright test -g "My Info - Edicion de nombre y apellido"
```

Abrir el reporte HTML:

```bash
npx playwright show-report
```

## Ventajas de esta estructura

- el spec queda corto y facil de leer
- los selectores viven en `pages`
- los recorridos viven en `helpers`
- los datos viven en `data`
- cambiar valores de prueba no obliga a tocar la logica
- el flujo se puede reutilizar en futuros tests de `My Info`

## Posibles mejoras futuras

1. renombrar algunos metodos del dashboard a espanol completo, por ejemplo `openMiInfo` a `abrirMiInfo`
2. agregar mas escenarios en `datosPersonales`, por ejemplo nombres vacios o datos alternativos
3. crear casos negativos para validar mensajes de error o restricciones del formulario
