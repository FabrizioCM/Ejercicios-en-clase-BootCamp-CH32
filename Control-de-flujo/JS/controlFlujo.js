//Estructura de control de flujo
alert("Conectado")

/**
 * 
 * Bloques de condigo importante dentro de la programacion 
 * por que, de manera, general nos permiten ejecutar sentencias
 * a bloques  de codigo estableciendo para ello condiciones
 * 
 */

/** Declaracion de sentencías 
 * 
 * palabra reservada if
 * () condicionales en forma de expresiones logicas True/False
 * {-llave de apertura }- Llave de cierre
 * todo lo que se encuentre dentro de este bloque de llaves se va a ejecutar 
 * solo si la sentencia si se cumple 
 * 
 * 
 * si la sentencia NO se cumple 
 * se debe escribir despues de la llave de cierre del bloque anterior
 * otra palabra reservada else
 * {llaves de apertura y cierre}
 * 
 * 
 */
let prueba = 6;

//if-else con una expresion logica o condicion sencilla 

if (prueba === 5) {
    //bloque de codigo que se ejecuta si la condicion se cumple 
    console.log("Se cumple :)")
} else {
    console.log("No se cumple :(")
}

// If else con una expresion de comparador logico

/**
 * 
 * and &&
 * or ||
 * not !
 * 
 */
//AND

if (prueba >= 5 && prueba < 10) {
    console.log("Se cumple logicamente :)")
} else {
    console.log("No se cumple logicamente :(")
}
//OR
if (prueba > 5 || prueba < 10) {
    console.log("Se cumple logicamente :)")
} else {
    console.log("No se cumple logicamente :(")
}

// Declarar una sentencia if-else anidada

/**
 * 
 * Dentro de esta sentencia, vamos a evaluar si se cumple la primer condicion
 * Si no, lee la siguiente sentencia y valora si se cumple o no
 * 
 * 
 * 
 */

if (prueba === 1) {
    //ejecuta esta sentencia
    console.log("Sentencia 1")
} else if (prueba === 2) {
    //ejectuta esta sentencia
    console.log("Sentencia 2")
} else if (prueba === 3) {
    //ejecuta esta sentencia
    console.log("Sentencia 3")
} else {
    console.log("Sentencia 4")
}


/**Operador ternario
 * 
 * Es una expresion simplificada de una sentencia if-else 
 * preferentemente vamos autilizar el operador ternario 
 * para bloques de if-else de una sola y unica salida
 * 
 * Declaracion de operador ternario
 * 
 * palabra reservada let, var, const
 * asignamos un nombre
 * Operador de asignacion =
 * Colocamos condicion despues del operador de asignacion 
 * colocamos el caracter de interrogacion indica el inicio de la bifurcacion
 * el camino que toma despues de evaluar si se cumple o no se cumple
 */

let condicion = prueba === 5 ? "Se cumple la condicion" : "No se cumple";


/**Declaracion de sentencia switch 
 * 
 *Es otra sentencia que funciona como una condicion 
 * con diferencia que esta evalua el valor colocado dentro del
 * parentesis para posteriormente evaluar si empata con alguno 
 * de los casos que yo defino dentro del primer bloque
 * 
 * 
 * Declaracion de SWITCH:
 * palabra reservada = SWITCH 
 * () Se coloca palabra despues 
 * seguido colocamos llaves de ap y cr  {} 
 * Declarar los casos
 * 
 * paabra reservada case "valor"
 * con : indicamos la secuencia a ejecutar y si empata con el resto 
 * colocamos la palabra break (Controlador de estructura) evita la ejecucion del codigo
 * si no empata colocamos DEFAULT
 * 
 * 
 */

switch (prueba) {
    case 1:
        console.log("Caso 1")
        break;
    case 2:
        console.log("Caso 2")
        break;
    case 3:
        console.log("Caso 3")
        break;
    case 4:
        console.log("Caso 4")
        break;
    case 5:
        console.log("Caso 5")
        break;
    default:
        console.log("No empata con ninguno")

}

//Sentencia switch que evalua cadenas de texto (String)
let día = "Martes"
día = día.toUpperCase();
día = día.toLowerCase();


/**switch (día) {
    case "lunes":
        console.log("1er día")
        break;
    case "martes":
        console.log("2do día")
        break;
    case "miercoles":
        console.log("3er día")
        break;
    case "jueves":
        console.log("4to día")
        break;
    case "viernes":
        console.log("5to día")
        break;
    case "sabado":
        console.log("sexto día")
        break;
    case "domingo":
        console.log("sep día")
        break;
    default:
        console.log("No existes en este mundo")
        break;
}
*/

/**
 * Control de flujo dinamico
 * 
 * podemos sacar provecho de las funciones recordando que son bloques
 * de codigo reutilizables que nos permiten realizar una funcion/operacion
 * particular 
 * 
 */


function diaDinamico(día) {
    día = día.toUpperCase();
    día = día.toLowerCase();

    switch (día) {
        case "lunes":
            console.log("1er día")
            break;
        case "martes":
            console.log("2do día")
            break;
        case "miercoles":
            console.log("3er día")
            break;
        case "jueves":
            console.log("4to día")
            break;
        case "viernes":
            console.log("5to día")
            break;
        case "sabado":
            console.log("sexto día")
            break;
        case "domingo":
            console.log("sep día")
            break;
        default:
            console.log("No existes en este mundo")
            break;
    }
}


function comparacionDinamica (n) {
if(n > 10){
    console.log("verdadero")
}else{
    console.log("falso")
} 
} 