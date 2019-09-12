//Constructor de objetos

function ConstructorEstudiantes(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

const estudiante1 = new ConstructorEstudiantes("Camilo", "Cuervo");
const estudiante2 = new ConstructorEstudiantes("Mateo", "Marulanda");
const estudiante3 = new ConstructorEstudiantes("Yashua", "Narvaez");
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);

/*Nota: El constructor de objetos es una funcion que recibe
/varios parametros, sabemos que es un constructor porque utiliza
/la palabra "this"
*/

function ConstructorEdificios(pisos, apartamentos) {
  this.pisos = pisos;
  this.apartamentos = apartamentos;
}

let edificio1 = new ConstructorEdificios(10, 105);
let edificio2 = new ConstructorEdificios(30, 320);
let edificio3 = new ConstructorEdificios(15, 156);
console.log(edificio1);
console.log(edificio2);
console.log(edificio3);
