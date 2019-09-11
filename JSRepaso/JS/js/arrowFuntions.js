//Arrow funtion


//Forma antigua
let construir = function(obra){
    return `Se esta construyendo un: ${obra}`;
}

let construido = construir ('Edificio');

console.log(construido);

//Usando arrow funtion
let destruir = (obra)=>{
    return `Se esta destruyendo un: ${obra}`;
}

let destruido = destruir ('Apartamento');

console.log(destruido);

//Simplificando
let arreglar = (obra)=>
     `Se esta reparando un: ${obra}`;

let arreglado = arreglar ('Apartamento');
console.log(arreglado);

/* Nota: al simplificar, no es necesario los corchetes '{}'
/ya que se da por implicito que retorna
*/