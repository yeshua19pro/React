/*Scope en una variable, para saber si un valor
/de una variable esta disponible o no
*/

var cancion = "let it be";
//Vemos el valor dentro y fuera
if (cancion) {
  var cancion = "Black lagoon";
  console.log("En el if: ", cancion);
}

console.log("fuera del if", cancion);

/*Scope con let para que el valor dentro del if
/ no se mezcle con los de afuera
*/

let operacion = "suma";

if (operacion) {
  let operacion = "resta";
  console.log("valor local = ", operacion);
}
console.log("valor global = ", operacion);

//Nota: El if es para verificar si existe la variable

//Scope con const
const dia = "lunes";

if (dia) {
  const dia = "martes";
  console.log("valor local = ", dia);
}
console.log("valor global = ", dia);

//Scope con const y let
const año = 2019;

if (año) {
  let año = 2018;
  console.log("valor local con let = ", año);
}
console.log("valor global con const = ", año);
