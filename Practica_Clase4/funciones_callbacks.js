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


