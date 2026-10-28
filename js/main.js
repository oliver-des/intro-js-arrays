//------------------------------- Ejercicio 1 -------------------------------

/* Creo un array con elementos */
let arrayColores = ['rojo', 'azul', 'verde', 'naranja']
/* Retornamos el primer elemento del array */
console.log(arrayColores[0])


//------------------------------- Ejercicio 2 -------------------------------

/* Devuelve el ultimo elemento del array --> [] .lenght - 1 ultimo*/
console.log(arrayColores[arrayColores.length - 1])


//------------------------------- Ejercicio 3 -------------------------------

/* modifico el array creado con una operación, no necesito meterlo en una variable */
arrayColores.unshift('blanco')
console.log(arrayColores)


//------------------------------- Ejercicio 4 -------------------------------

/* modifico el array creado con una operación, necesario parentesis para ejecutar. */
arrayColores.shift()
console.log(arrayColores)

//------------------------------- Ejercicio 5 -------------------------------
arrayColores.push('rosa')
console.log(arrayColores)


//------------------------------- Ejercicio 6 -------------------------------
arrayColores.pop()
console.log(arrayColores)


//------------------------------- Ejercicio 7 -------------------------------
const arrayNumerosPares = [2, 4, 6, 8]

const arrayNumerosImpares = [1, 3, 5, 7]
/* Creamos nueva constante donde irá almacenado el array conjunto */
const nuevoArray = arrayNumerosPares.concat(arrayNumerosImpares)

console.log(nuevoArray)


//------------------------------- Ejercicio 8 -------------------------------
console.log(arrayNumerosPares.includes(3));


//------------------------------- Ejercicio 9 -------------------------------
console.log(arrayNumerosPares.indexOf(6));


//------------------------------- Ejercicio 10 -------------------------------
arrayNumerosPares.splice(0, 1, 0);
console.log(arrayNumerosPares);


//------------------------------- Ejercicio 11 -------------------------------
const arrayNumeros = [2, 4, 3, 2]
/* Creamos variable para almacenar resultado, metodo .reduce */
let suma = arrayNumeros.reduce(function (acumulador, elemento, index, array) {
    return acumulador + elemento;
}, 0);

console.log(suma)


//------------------------------- Ejercicio 12 -------------------------------
const arrayMult = [3, 10, 5]
/* Creamos variable para almacenar resultado usamos metodo .reduce y el return en vez de sumar, multiplicamos */
let multiplicacion = arrayMult.reduce(function (acumulador, elemento, index, array) {
    return acumulador * elemento;
}, 1)

console.log(multiplicacion)


//------------------------------- Ejercicio 13 -------------------------------
const arrayNumyValor = [10, 75, 20, 3, 55, 60, 100]
let valor = 70

let mayoresQueCincuenta = arrayNumyValor.filter(function (elemento) {
    return elemento > valor;
});

console.log(mayoresQueCincuenta)

//------------------------------- Ejercicio 14 -------------------------------
let arrayNumValor = [10, 75, 20, 3, 55, 60, 100]
let valor1 = 2

let verificacion = arrayNumValor.every(function (elemento) {
    return elemento > valor1

});

console.log(verificacion)
//------------------------------- Ejercicio 15 -------------------------------





//------------------------------- Ejercicio 16 -------------------------------

const arrayNumbers = [5, 3, 8, 100, 500, 900, 90]

/* Dos opciones de escritura */
arrayNumbers.forEach((elementos) => console.log(elementos))

arrayNumbers.forEach(function (elementos) {
    return console.log(elementos)
})

//------------------------------- Ejercicio 17 -------------------------------

//------------------------------- Ejercicio 18 -------------------------------