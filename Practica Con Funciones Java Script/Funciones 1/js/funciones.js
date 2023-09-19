alert("conected");

/**funciones de cdeclaracion 
 * palabra reservada
 * nombre- camelCase
 * parametros
 * llave de inicio y fin de bloque
 * 
 */
//Ejemplo de funcion que no devuleve ningun valor :)
function nuevaFuncion() {
    console.log("Nueva Funcion");
};

// Declarar una funcion que calcule el perimetro de un cuadrado
/**
 * 1 de sus lados 
 * 
 * expresion que resuelve
 * p = l+l+l+l
 * p=l*4
 * 
 * 
 */

// let lado = 5;
// let perimetro=lado*4;
/**
function calcularPerimetroCuadrado(lado) {
    // Codigo que se va a ejecutar
    let perimetro = lado * 4
    return perimetro;
} // Funcion que retorna un valor

function calcularPerimetroCuadrado(lado) {
    // Codigo que se va a ejecutar
    let perimetro = lado * 4
    console.log(perimetro);
} //Funcion que no retorna un valor

function calcularPerimetroCuadrado(lado) {
    // Codigo que se va a ejecutar
    let perimetro = lado * 4
    console.log("El perimetro calculado es de: " + perimetro + " metros");
} //Concatenando cadenas de texto para mostrar el resultado
 */
function calcularPerimetroCuadrado(lado) {
    // Codigo que se va a ejecutar
    let perimetro = lado * 4
    return `El perimetro calculado es de: ${perimetro} metros`;
} //Uso de backticks para retornar un mensaje con el valor esperado

/**
 * funcion para saludar a distintas personas
 * 
 * 
 * como parametro vamos a recibir un nombre en forma de string
 * 
 */

function saludarPersonas (nombre){
    return nombre.toLowerCase();
}


/** Funciones flecha - arrow function 
 * 
 * palabra reservada const
 * nombre
 * operador de asignacion '='
 * valor 
 * () parametros 
 * => path arrow
 */

const nuevaFuncionFlecha = (parametros) => console.log ("Hola " + parametros)

const perimetroFlecha = (lado) => perimetro =lado*4;