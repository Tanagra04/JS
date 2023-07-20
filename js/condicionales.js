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
console.warn('ejemplo2: Determinar el ingreso')

let edadPersona = 47;

if(edadPersona >=18){
    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);
}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);

}