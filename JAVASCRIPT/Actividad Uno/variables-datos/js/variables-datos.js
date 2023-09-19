//Comentario de una línea
/**comentarios 
 * de
 * multiples
 * líneas 
*/
//Declaracion de variables
/**
 * palabras reservadas - var o let
 * Nombre significativo o que contextualice
 * Usar camelCase
 * operador de asignacion '='
 * asignar un valor 
 * ;
 */
alert('estoi bibo')
var varEjemplo =null; //Declaracion de una variable nula
var edadFer = 22; //Variable con un valor numerico
var nuevaEdad = "22"
var nombreUsuario = "Ceci"; //variable con un valor de cadena de texto (String)
var isProgramer = true; //Variable Booleano

// Datos Complejos
/*
var listaUsuarios = ["Daniel","Tania","Carlos"];// variable que almacena un array
var mouseGamer = { //variable que alamacena un objeto
    marca: "razer",
    numeroBotones: 4,
    esInalambrico: false,
    esRgb: true
}
var usuario = { //variable de objeto :)
    ID_USUARIO: "01",
    nombreUsuario: "Nombre",
    apellidoUsuario: "Apellido",
    edadUsuario: 22,
    esVerificado: true,}*/

let valorNulo = null;
let numeroCohorte = 32;
let contadorUsuarios = 150;
let nombreEquipo = "The codemonkeys";
let correoUsuario = "correo.generico@dominio.com";
let esHumano = false;
let esMarciano = true;

let nuevoArray = [];
let nuevoObjeto = {};


const NUMERO_PI = 3.141592;
const ID_USUARIO ="01";


/**
 * 
 * Comvertir a otro tipo de dato
 * 
 * vamos a almacenar dentro de una variable nueva la variable que esperan
 * que cambie su tipo de dato
 * 
 * -var, let
 * -asignamos un nombre de diferecia a un nuevo nombre
 * Operador de asignacion =
 * constructor: number, string, boolean
 * tenemos que colocar un parentesis
 */

let edadFerString = String (edadFer);


var nuevaEdadNumber = Number (nuevaEdad);

// convertir a booleano

let nombreUsuarioBoolean = Boolean (nombreUsuario);
/**Concatenar variables 
 * 
 * para esto, basta con utilizar el operador
 * si son strings, nos concatena en un string 
 * si son numero resuelve arimeticamente
 */

let adicion = numeroCohorte * contadorUsuarios;

let hola = "Hola ";
let mundo = "mundo";
let palabra = hola + mundo;