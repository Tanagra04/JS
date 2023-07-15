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