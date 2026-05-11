# Primer proyecto de automatización con Playwright

En este branch comenzamos a trabajar con Playwright, una herramienta de automatización de pruebas para aplicaciones web.

## El objetivo de este repositorio es:

+ crear el primer proyecto Playwright

+ comprender la estructura básica del framework

+ ejecutar los primeros tests automatizados

+ ver distintas formas de generar un caso de prueba

## Crear el proyecto Playwright

Para crear el proyecto se utilizó el siguiente comando:

```
npm init playwright@latest
```

Este comando genera automáticamente:

+ estructura del proyecto

+ instalación de Playwright

+ instalación de navegadores

+ archivos de configuración

Después de ejecutar el comando se creó la carpeta del proyecto con los archivos necesarios.

## Ejecutar los tests

Para ejecutar los casos de prueba utilizamos el comando:

```
npx playwright test
```

Este comando ejecuta todos los archivos **.spec.js** que se encuentran dentro de la carpeta tests.

## Ejecutar en modo visual

También podemos ejecutar los tests en modo interfaz con:

```
npx playwright test --ui
```

Esto permite ver los tests ejecutándose y analizar los resultados.

**Ejemplo 1 — Test generado con Codegen**

Playwright permite generar casos de prueba automáticamente usando una herramienta llamada Codegen.

## El siguiente comando abre un navegador y una grabadora de acciones:
```
npx playwright codegen https://opensource-demo.orangehrmlive.com
```

**A partir de ese momento:**

Playwright abre la página indicada.

Cada acción realizada en el navegador se transforma en código.

El código puede copiarse y guardarse como un test.

## Este método es útil para:

* aprender locators

* entender cómo Playwright interactúa con los elementos

* generar rápidamente un caso de prueba inicial

Sin embargo, el código generado normalmente necesita ser limpiado y simplificado.

**Ejemplo 2 — Test extendido**

En este ejemplo se utilizó nuevamente Codegen, pero se realizaron más acciones dentro de la página.

El objetivo de este test es mostrar que Playwright puede:

1) interactuar con distintos elementos

2) completar formularios

3) validar mensajes de error

Este tipo de tests suele utilizarse para explorar una aplicación antes de escribir automatizaciones más organizadas.

**Ejemplo 3 — Primer test escrito manualmente**

En este ejemplo el test fue escrito manualmente para mostrar una estructura más clara.

El flujo del test es:

1) abrir la página de login

2) completar usuario y contraseña

3) hacer clic en login

4) validar que el acceso fue exitoso

La validación se realiza comprobando que la URL corresponda al dashboard del sistema.

**Ejemplo 4 — Validación de elementos del dashboard**

Este test muestra cómo validar que un elemento está visible en la aplicación.

Pasos del test:

1) realizar login

2) validar redirección al dashboard

3) verificar que el título "Dashboard" esté visible

Esto permite comprobar que la página se cargó correctamente.

**Ejemplo 5 — Validación de un módulo del sistema**

En este ejemplo se muestra cómo recorrer elementos de una lista usando un loop.

El objetivo del test es:

1) obtener todos los módulos del menú lateral

2) recorrerlos uno por uno

3) verificar si existe el módulo PIM

Esto introduce un concepto importante en automatización:
analizar múltiples elementos de la interfaz utilizando lógica de programación.
--