/**Un modulo permita que se puedan ejecutar parametros y valores desde otras funciones
 * para que desde otro archivo se importen dichas funciones
 * 
 * en si nos permiten ejecutar las funciones metodos, ciclos, sentencias necesarias,
 * para que nuestro pryecto de node pueda ser 
 * ejecutado mediante la exportaciion de dichos modulos 
 * 
 * el modulo de entrada main importa dichos modulos y ejecuta el entorno de Node.JS
 * 
 *
 *
 */

export default function determinarParImpar(NumeroCal){
    (NumeroCal % 2 === 0) ? console.log(`el numero ${NumeroCal} es "par"`): console.log(`numero ${NumeroCal} es "impar"`);
}