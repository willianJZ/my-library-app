import { TiendaLibros } from "./TiendaLibros";
import { Libro } from "./Libro";
import { Transaccion } from "./Transaccion";

// Crear una lista de transacciones
const trans1: Transaccion = {tipoTransaccion: "si", fechaRealizacion: new Date(), cantidadEjemplares: 2};
let transArray: Transaccion[] = [];
transArray.push(trans1);

// Crear un libro
const libro1: Libro = {
    isbn: "434",
    titulo: "hola",
    imagen: "imagen",
    precioCompra: 2000,
    precioVenta: 3000,
    cantidadActual: 3,
    listaTransacciones: transArray,

    agregarTransaccion: function(transaccion: Transaccion): void {//Este método se utiliza en abastecerLibro()
        this.listaTransacciones.push(transaccion);
    }
};

const catalogoLibrosVacio: Libro[] = [];
const listaTransaccionesVacia: Transaccion[] = [];

// Instanciar el objeto TiendaLibros con el catálogo de libros vacío
const tienda = new TiendaLibros(catalogoLibrosVacio, listaTransaccionesVacia);

// Utilizar el método abastecerLibro
tienda.abastecerLibro(libro1);

console.log(tienda);
console.log("------------------------------------------------------------");
//-----------------------------------------------------------------

tienda.venderLibro(libro1);
console.log(tienda);