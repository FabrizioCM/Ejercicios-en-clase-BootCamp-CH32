// Crear una clase llamada Products, con 3 atributos (nombre (String), precio (Number), stock (Number)), con constructor y con 2 métodos (calcularPrecioTotal y descuento)

class Products {
    nombre = "";
    precio = 0;
    stock = 0;
    cantidadComprada  =0;
//Constructor
    constructor(nombre, precio, stock, cantidadComprada){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }
//metodos
    calcularPrecioTotal(cantidad){
        return cantidad * this.precio;
    }
//Quiero definir un descuento del 20% (0.2)
    descuento(calcularPrecioTotal){
        return calcularPrecioTotal - (calcularPrecioTotal * 0.2);
    }
}

// Pilar de la herencia, una clase padre puede heredar atributos, propiedades o constructor a una clase hijo
// Products --> hijos Ropa, calzado, heredan nombre, stock, etc.
