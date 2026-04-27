# Verificar e instalar node y npm

Descargar e instalar Visual Studio Code:

https://code.visualstudio.com/

Una vez instalado vs code.

* Abrir una terminal y ejecutar los siguientes comandos:

```node -v ``` - ENTORNO DE DESARROLLO

```npm -v ``` - PACKAGE MANAGER (MANEJADOR DE PAQUETES) - los paquetes contienen soluciones que se pueden reutilizar. https://www.npmjs.com/ 

* El comando -v nos ayuda a comprobar si la aplicacion, dependecia o paquete que precisamos esta instalado en nuestro entorno de trabajo.
___

* Si la consulta ES SATISFACTORIA deberiamos ver la version instalada, algo similar a esto:

``` 
v20.10.0

9.8.1
``` 

- Una vez instalado node y npm desde la terminal vamos a ejecutar:

```npm init playwright@latest ```
___

* Si la respuesta NO ES SATISFACTORIA debes instalar node y npm:

https://nodejs.org/

Se recomienda instalar la versión LTS (Long Term Support).

Una vez instalado repetir los pasos de verificación.
___

### PACKAGE.JSON

package.json es el archivo principal de un proyecto Node.

Contiene información como:

* nombre del proyecto
* versión
* dependencias instaladas
* scripts de ejecución

Cada vez que instalamos una librería, queda registrada en este archivo.
____

### COMANDOS UTILES:

```node archivo.js``` -> ejecuta el archivo js con su contenido.

```node -e "console.log('Hola mundo')"``` -> puede ejecutar código sin crear un archivo.

```node``` -> abre una consola donde se puede escribir JavaScript directamente.

> 2 + 2
4

> var nombre = "Amancio"
undefined

> nombre
'Amancio'

```.exit``` ó **Ctrl + c** -> cierran el ejecutor js de node
