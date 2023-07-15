//sintaxis de un objeto
let libros  = {
    nombre: 'Crimen y castigo',
    nombre2:'El principito',
    precio1: 60000,
    precio2: 12000,
    stock: true,
};

//imprime todas las propiedades del objeto libros
console.table(libros);

//imprime el libro crimen y castigo
console.log('El libro es: ', libros.nombre);
//imprime el libro El principito
console.log('El libro es: ', libros.nombre2);
//consultar el elemento precio1 del objeto
const p1 = 'precio1';
console.log('El precio 1 es: ', libros[p1]);

//agregar nueva propiedad al objeto libros
libros.nuevoLibro = 'Una mujer de cuatro en conducta'
console.log(libros);

// eliminar una propiedad del objeto libros
delete libros.nombre;
console.log(libros);