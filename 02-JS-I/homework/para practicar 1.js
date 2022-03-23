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

function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
       }
       return suma
}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var suma = 0
    for (var i = 0; i < resultadosTest.length; i++) {
        suma = suma + resultadosTets[i];
    }
    var cantidaddeelementos = resultadoTest.length
    return suma / cantidaddeelementos;
}

function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var mayor = numeros[0];
    for (var i = 1; i < numeros.length; i++){
        if(mayor < numeros[i]){
            mayor = numeros[i]
        }
    }
        return mayor;
        
    }

    function multiplicarArgumentos() {
        // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
        // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
        // Escribe tu código aquí:
        var producto = 1;
        if(arguments.length === 0){
            return 0;
        } if(arguments.length === 1){
            return arguments[0];
        } for (var i = 0; i < arguments.length; i++) {
            producto = producto * arguments [i];
        } return producto
}

function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    var contador = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > 18){
            contador = contador + 1;
        }
    }
    return contador;
}

function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí 
    if (numeroDeDia === 1 || numero === 7){
        return "Es fin de semana";
    }else{
        return "Es dia Laboral";
    }
    }

function empiezaConNueve(n) {
        //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
        //inicia con 9 y false en otro caso.
        //Escribe tu código aquí
        var string = n.toString();
        if(string[0] == 9){
            return true;
        }else{
            return false;
        }
}

function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
    var aux = arreglo[0]
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] !== aux){
            return false;
        }
    } return true;
}

function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
            arr.push(array[i]);
        }
    }
        if(arr.length !== 3){
            return "No se encontraron los meses pedidos";
        }else{
        return arr;
        }
        
}

function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var arr = [];
    var suma = numero;
    for (var i = 0; i < 10; i++) {
        suma = suma + 2;
        arr.push(suma);
        if(suma === i){
            return "Se interrumpió la ejecución"
        }
    } return arr;
}

function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var arr = [];
    var suma = numero;
    for (var i = 0; i < 10; i++) {
        if (i === 5){
            continue;
        }
          suma = numero + 2; 
          arr.push(suma);
    }
     return arr;       
}

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    var obj = {
        nombre : nombre,
        edad : edad,
        meow : function gato(){
            return "Meow!"
        }
    }
    return obj
}

function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
    objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    var num = objetomisterioso[numeroMiaterioso];
    return num * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    delete objeto[unaPropiedad];
    return objeto;
}

function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    var obj = {
      nombre: nombre,
      email: email,
      password: password,
    }
      return obj;
  }


function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    if(usuario.email){
        return true;
    }else{
        return false;
    }
}

function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    if(objeto[propiedad]){
        return true;
    }
      return false;
}


function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    if(usuario.password === password){
        return true;
    }
        return false;
}

function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevaPassword;
    return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.amigos.push(nuevoAmigo);
    return usuario;
}

function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    // usuarios = [usuario = {esPremium: false}, usuario = {esPremium: false}...]
    for (var i = 0; i < usuarios.length; i++) {
        usuarios[i].esPremium = true;
    }
    return usuarios;
}

function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    //var usuario = {
    //    posts: [post = {likes: 1}, post = {likes: 400}]
    // }
    var sumaDeLikes = 0;
    for (var i = 0; i < usuario.posts.length; i++) {
        sumaDeLikes = sumaDeLikes + usuario.posts[i].likes
    } 
      return sumaDeLikes  
}