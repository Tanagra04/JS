/**
 * Hay varios tipos de funciones: tradicional, de flecha, anonima y asincrona
 */
//funcion tradicional sin argumentos
function miNombre(){
    console.log('Mi nombre es: ' + 'Andrea');
    console.log(`Mi nombre es:  ${'Julian'}`);
}

//llamar la funcion
miNombre();

//funcion con argumentos
/**
 * 
 * @param {String} apellido 
 */
function miApellido(apellido){
    console.log(`Mi apellido ${apellido}`);
}

miApellido('Vanegas')
