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

/* Ejercicio 3) Crear una función por declaración, puede hacer lo que quieras. */



function calcularElementosRepetidosString(string, elemento) {
    // Instancio un array y una variable para utilizar luego
    let array = []
    let cantidad = 0;
    // Hago un for para recorrer el string y agrego cada caracter a el array previamente instanciado */
    for (let i = 0; i < string.length; i++) {
        array.push(string[i])
    }
    /* Instancio la variable encontrado con el valor retornante de la ejecución del metodo findIndex en el array, 
    el cual itera los elementos del array, y si se cumple dicha condicion devuelve el indice que la verifica
    */
    let encontrado = array.findIndex(x => x === elemento)
    
    // Hago un ciclo que se ejecuta bajo la condición que encontrado no sea -1 
    while (encontrado !== -1) {
        /* Si encontrado no es igual a -1, entonces por ende hay un indice que tieme como valor que es igual a elemento (objetivo),
        entonces, cantidad suma 1
        */
            cantidad = cantidad + 1
        /* Utilizo el metodo splice en el array para eliminar del array el indice que cumple la condición
        Todo esto para que en la sig iteración sea un "nuevo" array, y atrape los nuevos caracteres
        */
            array.splice(array.indexOf(elemento),1)
        /* Para cerrar actualizo la variable encontrado con el valor retornado por el metodo findIndex
        con el fin de que el while evalue nuvamente la condición y no se quede en un bucle infinito
        */
            encontrado = array.findIndex(x => x === elemento)
        }

    console.log(`La cantidad de caracteres repetidos en el string es: ${cantidad}`)

    }

calcularElementosRepetidosString("oh oh oh","o")

