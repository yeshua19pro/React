//Prototypes y funciones en un objeto

function Estudiante(nombre, grado, nota) {
  this.nombre = nombre;
  this.grado = grado;
  this.nota = nota;
}

Estudiante.prototype.mostrarInformacion = function() {
  console.log(
    `El estudiante ${this.nombre} del grado ${this.grado}` +
      ` tiene una nota de ${this.nota}`
  );
};

let estudianteNuevo = new Estudiante("Marulo", "11º", 3.5);
console.log(estudianteNuevo.mostrarInformacion());

/*Nota: los prototype es para que solo pueda ser usado por objetos
/del mismo tipo, en este caso de objetos de tipo estudiante
*/
