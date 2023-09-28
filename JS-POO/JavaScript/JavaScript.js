//alert('Conectado')

//Objetos en JS
//-- Objetos en JS
let churrumais = {
    nombre: "Churrumais",
    edad: 5,
    color: "Napolitano",
    caracter: "Agresivo",
    raza: "Persa"
}
//console.log(churrumais);

let garfield = {
    nombre: "Garfield",
    edad: 1,
    color: "Naranja",
    caracter: "Pasivo",
    raza: "Himalayo"
}
//console.log(garfield);
//Abstraccion, Polimorfismo, Herencia y encapsulamiento

let salem = {
    nombre: "Salem",
    edad: 1000,
    color: "Negro",
    caracter: "Sarcástico",
    raza: "Bombay"
}
//console.log(salem);
console.log(`El tipo de dato del primer gato es ${typeof(churrumais)}`);
let obtenerNombre = garfield.nombre;
console.log(`el nombre del segundo gato es: ${obtenerNombre}`);

console.log(`El caracter del gato ${salem.nombre} es ${salem.caracter}`);

//Para agilizar el proceso 
/**
 * 1.- crear y nombrar la clase 
 * 2.- Atributos y propiedades
 * 3.- constructores
 * 4.- Metodos y comportamientos
 */
//Crear Clase 
class Gato {
    //Definir atributos 
    nombre ="";
    edad = 0;
    color = "";
    caracter = "";
    raza ="";

    //Constructores. Funcion especial para crear los parametros los atributos
    constructor(nombre, edad, color, caracter, raza){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.caracter = caracter;
        this.raza = raza;
    }

    //Metodos o comportamientos definidos como funciones   
    pelear(){
        console.log("El gato se pelea en las laminas");
    }
    pelear(){
        console.log("karen, dame comida");
    }
    maullar(){
        console.log("Rayos, ya son las 3 AM, hora de maullar");
    }
}
let gatito1 = new Gato("Rudy", 14, "naranja", "encantador", "carey");
let gatito2 = new Gato("Pelusa", 5, "gris","Rudo","Azul Ruso");
let gatito3 = new Gato("Oreo", 9, "blanco con negro","amigable","Taby");
let gatito4 = new Gato("Morgana", 2, "Negro","curioso","Americano pelo corto");
//Instanciar objetos (Crear objetos)
console.log(gatito1);
console.log(`${gatito1.nombre} tiene ${gatito1.edad} años`)

gatito2.maullar();
gatito3.pelear();
let hambre = gatito3.pelear();
console.log(`${gatito3.nombre} es un gatito muy ${gatito3.caracter} y cuando tiene hambre dice ${hambre}`)