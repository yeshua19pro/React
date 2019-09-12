//Archivo JS como intruduccion a las funciones

//Function Declaration
function promocion(estudiante) {
  console.log(`El estudiante ${estudiante} ha sido promovido`);
}

//Para pasar valores externos a la funcion
promocion("Marulo");
var nombre = "Camilo";
promocion(nombre);

//Function expression
const reprovado = function(nombreReprovado) {
  console.log(`El estudiante ${nombreReprovado} ha reprovado`);
};
let nReprovado = "Carlos";
reprovado(nReprovado);

/*Nota: Para las function declarations, puedes llamarla antes
/o despues de crearla, mientras que Function expression solo puedes llamarla
/despues de crearla y ademas las function declaration pueden presentar
/problemas utililzando variables tipo 'let' o 'const', mientras que funtion
/expression no
*/

//Funciones con parametros por default

function imc(peso = 0, altura = 1) {
  let masaCorporal = ((peso / altura) ^ 2) * 10;
  console.log(`Su imc es de: ${masaCorporal}`);
}
imc(72, 180);

let quemarGrasa = function(tiempoEjercicio = 0, veces = 0) {
  let grasaQuemada = tiempoEjercicio * veces;
  console.log(`Ha quemado ${grasaQuemada} calorias`);
};
//llamado sin parametros para verificar el valor por defecto
quemarGrasa();

//llamado con parametros
quemarGrasa(30, 2);
