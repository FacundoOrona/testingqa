// Ejemplo de condicionales en JavaScript

var edad = 20
var inscripto = true

console.log("Edad del alumno:", edad)
console.log("¿Está inscripto?:", inscripto)

if (edad >= 18 && inscripto === true) {
    console.log("El alumno puede acceder al curso")
} else {
    console.log("El alumno no puede acceder al curso")
}


/*

| Operador | Significado   |   |    |
| -------- | ------------- | - | -- |
| `==`     | Igual         |   |    |
| `===`    | Igual exacto  |   |    |
| `!=`     | Distinto      |   |    |
| `>`      | Mayor que     |   |    |
| `<`      | Menor que     |   |    |
| `>=`     | Mayor o igual |   |    |
| `<=`     | Menor o igual |   |    |
| `&&`     | AND           |   |    |
| `        |               | ` | OR |

*/