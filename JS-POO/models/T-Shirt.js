//Crear una sub clase llamada T-shirt que herede de Products, 
//que incluya dos o más atributos únicos, con dos o más métodos propios 
//y que implemente atributos y métodos heredados.

class TShirt {
    constructor(nombre, precio, stock, modelo, size) {
        this.modelo = modelo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.size = size;
    }

    vendedor() {
        return `¡Bienvenido a la tienda! Tenemos la camiseta ${this.nombre} modelo ${this.modelo} y talla ${this.size} por un precio de ${this.precio} pesos mexicanos.`;
    }

    descripcionPlayera() {
        return `${this.nombre} modelo ${this.modelo} y talla ${this.size}, está fabricada de manera ecológica con fibra textil de bambú, lo que le confiere una increíble calidad. Tiene un precio de ${this.precio} pesos mexicanos.`;
    }
}

// Creo las playeras
let camisaMangaCorta = new TShirt("NIKE", 799, 120, "Manga Corta", "CH");
let camisaMangaLarga = new TShirt("NIKE", 1049, 89, "Manga Larga", "Med");
let camisaOversize = new TShirt("NIKE", 799, 150, "Oversize", "GDE");
let camisaCompresion = new TShirt("NIKE", 1024, 40, "De Compresion", "Med");

console.log(camisaMangaCorta.vendedor());
console.log(camisaMangaLarga.vendedor());
console.log(camisaOversize.vendedor());
console.log(camisaCompresion.vendedor());
console.log(camisaMangaCorta.descripcionPlayera());
console.log(camisaMangaLarga.descripcionPlayera());
console.log(camisaOversize.descripcionPlayera());
console.log(camisaCompresion.descripcionPlayera());