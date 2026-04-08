/*
Ejercicio 1) Definir una función que se llame Calculadora, que reciba un array de números, y
una callback.
A) Pasarle por argumento una función arrow que realice la suma de los elemtos
del array.
B) Pasarle por argumento una función arrow que realice la resta de los elementos
del array.
C) Pasarle por argumento una función arrow que realice la multiplicación de los
elementos.


// EJERCICIO 1.A

*/
/* declaro función Calculadora, que recibe un array y una callback y retorna el
    valor de la ejecución de la callback
*/
function Calculadora(array, callback) {
    return callback(array)
}
// funcion flecha que recibe un array y retorna la suma de sus elementos
let sumaTotal = (arr) => {
    let suma = 0;
    arr.forEach(x => suma = suma +x)
    return suma
}
/* imprimo el valor retornante de la ejecución calculadora, pasandole como argumento 
    un array de numeros y la función sumaTotal
*/
console.log(Calculadora([1,2,3,4,5,6], sumaTotal))


// EJERCICIO 1.B


/* función flecha que recibe un array como parametro, y retorna la ejecución del metodo
    .reduce en el mismo array
    utilice el metodo .reduce porque al intentar hacerlo con un forEach no encontré la logica
    entonces, y a su vez, me di cuenta qu era mejor o más optimo hacerlo con reduce 
*/
let restaTotal = (arr) => {
return arr.reduce((resultadoParcial, elementoActual) => resultadoParcial - elementoActual) 
}

console.log(Calculadora([1,2,3,4,5,6], restaTotal))

// EJERCICIO 1.C


// era mejor usar una variable y no escribir todo el tiempo el array jsjs
numeros = [1,2,3,4,5,6]



/* funcion flecha que retorna el valor de la ejecución del metodo .reduce 
    que ira ejecutando el callback sobre cada elemento del array y ira actualizando
    el valor con cada multiplicacion entre sus elementos 
*/ 
let multipliacionTotal = (arr) => {
    return arr.reduce((elementoParcial, elementoActual) => {
        return elementoParcial * elementoActual})
} 

console.log(Calculadora(numeros, multipliacionTotal))

/*
Ejercicio 2) Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número,
y un array, la función debe validar si el número es mayor o igual a cero y menor o
igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso
contrario debe arrojar un error informando que el número es mayor o menor a lo
establecido. Debe retornar el array con el resultado
*/

const arrayDePrueba = [1,2,3,4,5]

/* funcion flecha que recibe un numero y un array,
    valida que numero sea mayor o igual a 0 y menor o igual a 10,
    en caso favorable agrega el numero al principio del array,
    si no, imprime un mensaje de error,
    al final la funcion retorna el array
*/
let agregarSiEstaEntreCeroYDiez = (array, numero) => {
    numero >= 0 && numero <= 10
    ? array.unshift(numero)
    : console.log (`el numero ${numero} no esta en el array`)
    return array 
}

// ejemplo donde el numero cumple la condición
console.log(`array antes: ${arrayDePrueba}`)
agregarSiEstaEntreCeroYDiez(arrayDePrueba, 5)
console.log(`array despues: ${arrayDePrueba}`)


// ejemplo donde el numero no cumple la condición
console.log(`array antes: ${arrayDePrueba}`)
agregarSiEstaEntreCeroYDiez(arrayDePrueba, 11)
console.log(`array despues: ${arrayDePrueba}`)



/* 
Ejercicio 3) Definir una función similar a la del punto 2, pero que en vez de un número reciba
un array con números y valide si cada uno de los elementos cumple con la condición de estar entre cero y diez, debe retornar un array con los números que
cumplan la función.
*/

const arrayTest = []

// función que recibe dos parametros, el array y el array de numeros a validar
// utilizamos el metodo filter para filtar los elementos del array numeros y quedarnos con los que cumplen la condición
// guardamos ese valor en el array vacio pasado como argumento cuando se llame
// y retornamos ese mismo array

let agregarConArray = (array, numeros) => {
    array = numeros.filter(x => x >= 0 && x <= 10)
    return array
}

const resultado = agregarConArray(arrayTest, [-1,0,5,10,11])

console.log(`array retornante con los numeros que cumplen la condición: ${resultado}`)


// 