/* Ejercicio 1) Crear una función que reciba dos parámetros y retorne un valor. */ 

/* Función que tiene un parametro y devuelve un valor de tipo string */

function devuelveMensaje(nombre)  {
    return `Hola! Buenos diás, ${nombre}!`
}

console.log(devuelveMensaje("Nahuel"))

/* Ejercicio 2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el
lado del cuadrado, calcule el área y la retorne. */

/* Función expresada en forma de declaración, que utiliza un parametro (el lado de un cuadrado al momento de pasarlo como argumento), calcula su area (lado x lado) y devuelve el calculo (tipo number) */


function calcularAreaCuadrado (lado) {
    return lado * lado
}

console.log(`El area del del cuadrado con lado 50 es: ${calcularAreaCuadrado(50)}`)


