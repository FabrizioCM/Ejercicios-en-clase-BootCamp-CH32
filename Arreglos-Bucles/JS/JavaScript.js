alert("CONECTADO");

// Declaracion arreglos numericos
let numeros = [1,2,3,4,5,6,7,8,9,10];
//Declaracion arreglos de cadena de texto 
let texto = ["Hola", "Saludos", "Afirmativo", "Negativo"];
//Arreglo de datos Booleanos
let binario = [true, false, true, false, true];
//Declaracion variable Nulo 
let nuloVacio =[null, null, null, null];


//Datos primitivos de objetos complejos
/**
 * Declaracion de arreglo de objetos
 */

let discografiaMuse =[
    {
        nombre: "Showbiz",
        año : 1999,
    },
    {
        nombre: "Oringin of symetry",
        año: 2001,
    },
    {
        nombre: "Absolution",
        año: 2003,
    }
];
//Arreglo de arreglos
let almacenadorDeArrays = [
    ["hola", "mundo"],
    [1,2],
    [true, null]
];

//Declaracion de arreglo para distintos datos

let aleatorio = [1, "Hola", null, true, "Paulo"];


/**
 * Como acceder a un elemento dentro de un arreglo
 * 
 * Vamos a procurar buscarlo mediante el indice
 * dentro de los corchetes se especifica el indice
 * 
 */
let encuentraPrimerElemento = texto[0];
//se llama a un elemento mediante el indice
//console.log(numeros[5]);
let encuentraMedioElemento = texto[3];
//mandar a llamar al ultimo elemento
//console.log(numeros[9]);
//que pasa si yo no conzSco la longitud
//console.log(numeros[numeros.length-1]);
let encuentraUltimoElemento = numeros[numeros.length-1];
//console.log (texto[3]); //Si yo no conozco donde se ubica el ultimo?
//console.log (texto[texto.length-1]); //Con esto se imprime el ultimo elemento


/**
 * Index of {} - Nos indica cual es el indice del elemento seleccionado o colocado.
 * Metodos que me permiten agregar elementos
 * unshift (); agrega un elemento al principio del arreglo
 * push(); agrgea un elemento al final 
 * Shift(); elimina el primer  elemento del arreglo
 * pop(); Elimina el ultimo elemento del arreglo
 */


console.log("El valor de Indice es " + texto.indexOf("Hola"));
console.log("Agrega un elemento al principio del arreglo numeros: " + numeros.unshift(0));
console.log("Agrega un elemento al final del arreglo numeros: " + numeros.push(11));

console.log("Elimina el primer elemento del arreglo numeros" + numeros.shift())
console.log("Elimina el ultimo elemento del arreglo numeros" + numeros.pop())


/**
 * Splice (posicion, rango); - modifica elementos estableciendo un rango
 * 
 */

let palabra = ["h","o", "l", "a"];

let metodoSplice = palabra.splice(1,0,"D");
//let metodoJoin = palabra.join("");
//let metodoForEach = palabra.forEach((elemento) => console.log(elemento));


/**
 * Ejercicio de reforzamiento - aplicando conocimientos
 * 
 * dado un arreglo vacio de nombre 'articulos'
 * 
 * crea una funcion para agregar un nuevo elemento al arreglo 
 * Consideraciones - recordar para que sirve unshift() y push()
 * 
 * 
 */
let articuloArreglo = [];

function agregarArticulo(nuevoArticulo){
    nuevoArticulo = articuloArreglo.push(nuevoArticulo);

}



/// Parte 2 Loops

/**
 * 
 * Bloques de codigos que nos van a permitir repetir una misma
 * tarea sin necesidad de declararla o relaizarla manualmente
 * 
 * 
 * Sentencias para establecer un ciclo
 * 
 * -For 
 *- While
 * 
 */


 // for

 /**palabra reservada for 
  * seguido de ()
  * solo falta delimitar bloque de codigo {}
  * 
  */

//inicializacion ; condicion ;  contador

//operador aritmetico que se representa como ++(incremento en una unidad) -- (decremento en una unidad)
 for(let x=0; x<10; x++){ //x+=5;
    console.log(x);
}

let boletos = 1;
for(boletos; boletos<=10; boletos++){
    console.log(`Boleto numero:  ${boletos}`);
}


let cuentaRegresiva = 10;
for (cuentaRegresiva; cuentaRegresiva>=0; cuentaRegresiva--){
    console.log(`Iniciamos en:  ${cuentaRegresiva}`);
}


//como podemos recorrer un array utilizando el ciclo for?
let participanteCH32 = ["Ceci","Albar","Enmmanuel","Kevin","Nize","Paulo","Johan","Alberto"];
console.log(participanteCH32);

for(let participante =0 ; participante < participanteCH32.length; participante++){
    console.log(participanteCH32[participante]);
}
/**
 * for ( let participante = participantesCH32.length-1 ; participante >= 0; participante -- ){
 *  console.log(participantesCH32[participante]);
 *  }
 */

// Variaciones del ciclo for 
/**
 * For-OF nos permite recorrer un array y por cada uno de los elementos nos devuelve el valor
 * 
 * For-IN nos permite recorrer un array pero nos permite devolver su posicion.
 *
 *  for(let element of array){
 * //bloque de codigo }
 * 
 * for (let elemento of array){
 * //bloque de codigo }
 * 
 * */

let animals = ["dog", "cat", "horse", "cow", "rabbit","bear", "platypus"];

console.log("----------For----of-------")
for (let animal of animals){ 
    console.log(animal);
}


console.log("----------For----in-------")
for (let animal in animals){ 
    console.log(animal);
}

/**
 * participantesCH32.reverse();for (let participante of participantesCH32) {console.log("Reversa: " + participante)}
 * 
 * 
 */
//imprimir los numeros pares del 1 al 20 
 for (let cuenta = 1; cuenta <= 20; cuenta ++){
    if (cuenta %3 === 0){
    console.log(`los numeros son ${cuenta}`)
 }
}

