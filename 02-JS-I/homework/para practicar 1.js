// Crea una variable "string", puede contener lo que quieras:
var str = "blanco"
// Crea una variable numérica, puede ser cualquier número:
var Numerobueno = 7
function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    return str;
}
function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    return x + y;
}
function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    var diferencia = x - y;
    return diferencia;
}
function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    var producto = x * y;
    return producto;
}
function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    var resultado = x / y;
    return resultado;
}
function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código
    if (x === y){
        return true;
    }else{
        return false
    }
}
function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length === str2.length){
        return true
    }else{
        return false
    }
}
function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num < 90) {
        return true;
    }else{
        return false;
    }
}
function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num > 50) {
        return true;
    }else{
        return false;
    }
}
function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    var resto = x % y;
    return resto;
}
function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num % 2 !== 0) {
        return true;
    }else{
        return false;
    }
}
function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    var potencia = Math.pow(num, 2);
    return potencia;
}
function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return num ** 3
}
function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return num ** exponent
}
function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    var redondeado = Math.round(num);
    return redondeado;
}
function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.ceil(num)
}
function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    return Math.random() 
}
function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    //>0
    if (num === 0){
        return false;
    }else if(num > 0){
        return "Es positivo";
    }else{
        return "Es negativo";
    }
    }
function agregarSimboloExclamacion(str) {
        // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
        // Ejemplo: "hello world" pasaría a ser "hello world!"
        // Tu código: 
        return str + '!';
}
function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    return "Hola" + nombre + "!";
}
function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return alto * ancho;
}
function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return 4 * lado;
}
function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    //b * a / 2
    return base * altura / 2;
}
function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    //ex1.20
    return euro * 1.20;
}
function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí
    if (letra.length > 0){
        return "Dato incorrecto"
    }else if(letra === a || letra === e || letra === i || letra === o || letra === u) {
        return "Es vocal"
    }else{
        return "Dato incorrecto"
    }
}
function Imprime1aN(n) {
    for (var i = 1; i <= n; i++){
        if(i % 2 === 0) {
            console.log(i);
    }
    if(i > 200){
        for(var j = 0; j < 10; j++){
            console.log(j);
        }
        return;
    }
} 
}


function matriz (n, m) {
    for (var i = 0; i < n; i++){
        for (var j = 0; j < m; j++){
            console.log(i + "," + j)
        }
    }
}

function matriz (n, m) {
    var i = 0;
    var j = 0;
    while(i < n){
        while(j < m){
            console.log(i,j);
            j++;
        }
        j = 0;
        i++;
    }
}

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if(x === y){
        return x;
    }else if(x > y){
        return x;
    }else{
        return y;
    }
}

function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"

    if (edad >= 18) {
        return "Allowed"
    }else{
        "Not Allowed"
    }
}

function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.

    if (status === 1){
        return "Online";
    }else if(status === 2){
        return "Away";
    }else{
        return "Offline";
    }
}

function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:

    if (idioma === "aleman"){
        return "Guten Tag!"
    }else if (idioma === "mandarin"){
        return "Ni Hao!"
    }else if (idioma === "ingles"){
        return "Hello!"
    }else if (idioma === undefined){
        return "Hola!"
    }else{
        return "Hola!"
    }
    }

function colors(color) {
        //La función recibe un color. Devolver el string correspondiente:
        //En caso que el color recibido sea "blue", devuleve --> "This is blue"
        //En caso que el color recibido sea "red", devuleve --> "This is red"
        //En caso que el color recibido sea "green", devuleve --> "This is green"
        //En caso que el color recibido sea "orange", devuleve --> "This is orange"
        //Caso default: devuelve --> "Color not found"
        //Usar el statement Switch.

        switch (color) {
            case "blue":
                return "This is blue"
                break;
            case "red":
                return "This is red"
                break;    
            case "green":
                return "This is green"
                break;
            case "orange":
                return "This is orange"
                break;    
            default:
                return "Color not found"
                break;
        }
    }

function esDiezOCinco(numero) {
        // Devuelve "true" si "numero" es 10 o 5
        // De lo contrario, devuelve "false"
        // Tu código: 
        if (numero === 10 || numero === 5){
            return true
        }else{
            return false
        }
    }

function estaEnRango(numero) {
        // Devuelve "true" si "numero" es menor que 50 y mayor que 20
        // De lo contrario, devuelve "false"
        // Tu código:
        if (numero < 50 && numero > 20){
            return true
        }else{
            return false
        }
    }

function esEntero(numero) {
        // Devuelve "true" si "numero" es un entero (int/integer)
        // Ejemplo: 0.8 -> false
        // Ejemplo: 1 -> true
        // Ejemplo: -10 -> true
        // De lo contrario, devuelve "false"
        // Pista: Puedes resolver esto usando `Math.floor`
        // Tu código:
        //14.6 - 14 = 0.5, osea q no es 0, entonces dá false, pero si es 14-14 sí es0, x lo tanto es un entero y dá true
        if (numero - Math.floor(numero) === 0){
            return true
        }else{
            return false
        }
    }

function fizzBuzz(numero) {
        // Si "numero" es divisible entre 3, devuelve "fizz"
        // Si "numero" es divisible entre 5, devuelve "buzz"
        // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
        // De lo contrario, devuelve el numero
        if (numero % 15 === 0){
            return "fizzbuzz";
        }else if(numero % 3 === 0){
            return "fizz";
        }else if(numero % 5 === 0){
            return "buzz"
        }else{
            return numero;
        }
}

function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo" 
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error". 
  
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
    if (num1 === 0 || num2 === 0 || num3 === 0){
        return "Error";
    }else if(num1 < 0 || num2 < 0 || num3 < 0){
        return "Hay negativos";
    }else if(num1 > num2 && num1 > num3 && num1 > 0){
        return "Número 1 es mayor y positivo";
    }else if(num3 > num1 && num3 > num2){
        return num3 + 1;
    }else{
        return false
    }
}

function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    // 2 es el priemr núemro primo
    if (numero === 0 || numero === 1){
        return false
      } for (var i = 2; i < numero; i++) {
        if (numero % i === 0){
          return false
        }
      } 
        return true
      }

function esVerdadero(valor){
        //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
        //si su valor es true y “Soy falso” si su valor es false.
        //Escribe tu código aquí
        if (valor){
            return "Soy verdadero"
        }else{
            return "Soy falso"
        }
    }

function tablaDelSeis(){
        //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
        //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
        //Escribe tu código aquí 
        var array = [];
        var aux = 0;
        for (i = 0; index < 11; i) {
            aux = i * 6
            array.push(aux)
        }
        return array
    }

function tieneTresDigitos(numero){
            //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
            //Escribe tu código aquí
            var str = numero.toString()
            if(str.length === 3){
                return true
            }
            return false
}

function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.

    var suma = numero
    var i = 0
    do {
        suma = numero + 5;
        i++;
        
    } while (i < 7);
    return suma
}

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
}

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}

function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var arr = [];
    var suma = 0;
    for (var i = 0; i < array.length; i++){
        suma = array[i] + 1;
        arr.push(suma)
    }
        return arr;
    }

    function agregarItemAlFinalDelArray(array, elemento) {
        // Añade el "elemento" al final del array
        // y devuelve el array
        // Tu código:
        array.push(elemento);
        return array;
    }

function dePalabrasAFrase(palabras) {
        // "palabras" es un array de strings/cadenas
        // Devuelve un string donde todas las palabras estén concatenadas
        // con espacios entre cada palabra
        // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
        // Tu código:
        palabras.join(' ');
        return palabras;
}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        if(array[i] === elemento){
            return true;
        }
    }
    return false;
}