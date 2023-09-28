let pantalon = {
    marca: "Nautica",
    talla: 38,
    precio: 1600,
    color: "azul",
    material: "mezclilla"
};
console.log(pantalon);

// Objeto Formato JSON
let chamarra = `{
    "marca": "Tommy",
    "talla": 34,
    "precio": 2500,
    "color": "azul",
    "material": "mezclilla"
}`;
console.log(chamarra);
console.log(typeof(chamarra));

/*-- Serialización y deserialización
*** Serialización. Proceso de convertir un objeto en una secuencia de bytes o en una cadena de caracteres que pueda ser almacenada o transmitida. Se realiza para guardar un objeto JS y enviarlo a través de una red o manipularlo en una base de datos.
Object ---> JSON ...
    JSON.stringify(variable);
*** Deserialización. Proceso de tomar una cadena de caracteres (JSON) y convertirlos en un objeto JS en la memoria.
JSON ---> Object ...
    JSON.parse(variable);
*/

// Obj a JSON
let serializando = JSON.stringify(pantalon); // JSON.stringify() para convertir un objeto 'pantalon' en una cadena JSON.
console.log(serializando);
console.log(typeof(serializando)); // Debe ser una cadena.

// JSON a obj
let deserializando = JSON.parse(chamarra);
console.log(deserializando);
console.log(typeof(deserializando));

//Array multidimensional 
let employees  = {
    employe: [
        {firstName: "Daniel", lastName: "Maldonaldo", id:5423},
        {firstName: "Tania", lastName: "Cruz", id:6134},
        {firstName: "Jose Manuel", lastName: "Hernandez", id:1123},
    ]
}

console.log(employees);
console.log(typeof(employees));

//Serializar el Objeto Multidimensional (Object --> JSON)
let employesToString = JSON.stringify(employees);
console.log(employesToString);
console.log(typeof(employesToString));

// Multidimensional JSON
let students = `{
    "Student": [
        {"firstName": "Daniel", "lastName": "Maldonado", "id": 5423},
        {"firstName": "Tania", "lastName": "Cruz", "id": 6134},
        {"firstName": "Jose Manuel", "lastName": "Hernandez", "id": 1123}
    ]
}`;

console.log(students);
console.log(typeof(students));

// Deserializar el objeto JSON a OBJECT
let studentsToObject = JSON.parse(students);
console.log(studentsToObject);
console.log(typeof(studentsToObject));