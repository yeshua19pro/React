//Template Strings en JS

const estudiante = "marulo";
const grado = 8;

//Forma anterior de concatenar
console.log("El estudiante " + estudiante + ", esta en el" + " grado " + grado);

//Forma nueva de concatenar
console.log(`El estudiante ${estudiante}, esta en el grado ${grado}`);

//Sirve para hacer llamados de algun id que tengamos en el html
const contenedorApp = document.querySelector("#app");

/*Comparación en varias lineas
/lista no ordenada
*/
let listaHtml =
  "<ul>" +
  "<li> Estudiante: " +
  estudiante +
  "</li>" +
  "<li> Grado: " +
  grado +
  "</li>";
("</ul>");
contenedorApp.innerHTML = listaHtml;

//Usando la nueva concatenación
const contenedorTemplate = document.querySelector("#templateString");
let listaTemplateString = `
        <ul>
            <li>Nombre: ${estudiante} </li>
            <li>Grado: ${grado} </li>
        </ul>`;
contenedorTemplate.innerHTML = listaTemplateString;