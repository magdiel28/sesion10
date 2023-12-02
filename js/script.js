console.log("Hola mundo");
console.log("Mi nombre es Magdiel");
console.log("Adios");
var miTITULO ="Mi primera pagina";

console.log(miTITULO)

var miEtiquetaTitulo = document.getElementById("title");
console.log(miEtiquetaTitulo.firstChild);

var listaDeEtiquetas = document.getElementsByTagName("a");
console.log(listaDeEtiquetas);
console.log(listaDeEtiquetas[2]);

var lista2 = document.getElementsByClassName("item");
console.log(lista2);
console.log(lista2[3]);