//para heredar de una super clase se indica que esta subclase (mobile phone) hereda de la super clase productos
//y por ello uitilizamos la palabra reservada extends seguuido del nombre de la super clase
class MobilePhone extends Products{
    modelo = "";
//para llamar a los argumentos de la super clase utilizo la palabra super y 
// dentro de ella los argumentos heredados
    constructor(nombre, precio, stock,  modelo) {
        super(nombre, precio, stock);
        this.modelo = modelo;

//metodos para mobile Phone     
    }
    encender(){
        return`bienvenido ${this.nombre} de la marca ${this.modelo} con costo de ${this.precio}`
    }
    descripcion(){
        return`${this.nombre} ${this.modelo} tiene un costo de ${this.precio} pesos mexicanos,
        en inventario se encuentran ${this.stock} piezas`;
    }

}

//instanciar objetos
let mobilePhone1 = new MobilePhone("Iphone", 23999, 214, "15 Pro MAX");
let mobilePhone2 = new MobilePhone("Samsung",  21999, 139, "Galaxy s23+");

//Utilizar metodos especificos y heredados
console.log(mobilePhone1.encender());
console.log(mobilePhone2.encender());
console.log(mobilePhone1.descripcion());
console.log(mobilePhone2.descripcion());

//Implementando metodos heredados
let cantidadComprada = 2;
//Daniel compra dos Iphone
let CostoTotalCompra = mobilePhone1.calcularPrecioTotal(cantidadComprada);
console.log(`El total de ${cantidadComprada} ${mobilePhone1.nombre} ${mobilePhone1.modelo} es de ${CostoTotalCompra}`);

//const precioDescuento = mobilePhone1.precioDescuento(CostoTotalCompra);
//console.log(`El precio con descuento es de ${cantidadComprada} ${mobilePhone1.nombre} ${mobilePhone1.modelo} es de ${precioDescuento}`);
