//if y else, determina si la condicion se cumple o no
//ejemplo1: Mostrar el nombre del profe de frontend

let nombreMateria = 'frontend';

if(nombreMateria==='frontend') {
    //mostrar nombre dle profe
    console.log(`Nombre del profe: Jorge - ${nombreMateria}`);

}else{
    console.log('No es el nombre del profe');
}

/**
 * ejemplo2: Determinar el ingreso a un bar, solo ingresar los mayores de edad
 */
console.warn('ejemplo2: Determinar el ingreso');

let edadPersona = 47;

if(edadPersona >=18){
    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);
}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);

}

/**
 * ejemplo3: Determinar los profes de ingles y frontend, el dia miercoles
 */
console.warn('ejemplo3: Mostrar Profes');

const materia1 = 'Frontend';
const materia2 = 'Ingles';
let diaMateria = 'miercoles';

if (materia1==='Frontend' && materia2==='Ingles' && diaMateria==='miercoles') {
    console.log('los profes son: Jorge' +' - ' +' Fabiola');
    
}else{
    console.log('No son los profes');
}

/**
 * condicional switch, tambien se basa por una condicion y se puede utilizar con varios case
 * ejemplo4: Mostrar las actividades que realizan dependiendo del día
 */

const diaActividad = 'domingo';

switch (diaActividad) {
    case 'lunes':
        console.log('lunes')
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Doy clases');
        break;

    case 'martes':
        console.log('martes')
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Doy clases');
        console.log('ensayo con la banda');
        break;

    case 'miercoles':
        console.log('miercoles');
        console.log('Estudio');
        console.log('Trabajo');
        console.log('dormir');
        break;

    case 'jueves':
        console.log('jueves');
        console.log('Estudio');
        console.log('Trabajo');
        console.log('leo un libro');
        break;

    case 'viernes':
        console.log('vienes');
        console.log('Estudio');
        console.log('Trabajo');
        console.log('veo series');
        break;

    case 'sabado':
        console.log('sabado');
        console.log('Estudio');
        console.log('Trabajo');
        console.log('en la noche me tomo unas politas');
        break;

    case 'domingo':
        console.log('domingo');
        console.log('Estudio');
        console.log('voy a la ciclovia');
        console.log('voy al cine');
        break;

    default:
        console.log('Error en sintaxis del dia')
        break;
}
