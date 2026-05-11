# Diseño de casos de prueba (AAA)

En este branch comenzamos a organizar mejor los casos de prueba.

Hasta ahora los tests estaban escritos directamente dentro de los archivos `.spec.js`, repitiendo acciones como abrir la página o realizar login.

En este punto del curso introducimos dos conceptos importantes:

- estructura de test **AAA (Arrange / Act / Assert)**
- **reutilización de acciones** mediante funciones helper

El objetivo es escribir tests más claros y evitar repetir código.

---

# Estructura AAA

Los tests ahora siguen la siguiente estructura:


Arrange → preparar el escenario
Act → ejecutar la acción que queremos probar
Assert → validar el resultado esperado


Ejemplo:

```javascript
test('Login exitoso', async ({ page }) => {

  // Arrange
  await goToLogin(page)

  // Act
  await login(page, username, password)

  // Assert
  await validarDashboard(page)

})
```

Esto permite que el test sea más fácil de leer y entender.

## Nueva estructura del proyecto

En este branch se introducen nuevas carpetas para organizar mejor el proyecto.


+ data/
+ helpers/
+ tests/

### data/

Contiene datos de prueba que serán utilizados por los tests.

Ejemplo:

data/users.json

**Separar los datos del código permite:**

+ reutilizar información

+ modificar datos sin cambiar los tests

+ preparar escenarios de prueba más fácilmente

### helpers/

Contiene funciones reutilizables que representan acciones comunes dentro de la aplicación.

**Ejemplos:** 

1) abrir la página de login

2) realizar login

3) validar que el dashboard esté visible

Esto evita repetir el mismo código en cada caso de prueba.

### tests/

Contiene los casos de prueba automatizados.

Cada archivo .spec.js representa un conjunto de pruebas.