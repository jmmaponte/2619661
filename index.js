const mostrarTexto = () => 'Hola Mundo'; 
const boolena = () => 'FALSE'; 
const mostrarArray = () => [3,5,67,77,7];
const mostrarObjeto = () => ({cargo: 'gerente'});

// Creamos un div para cada resultado y los concatenamos
let contenidoHTML = '<br />';
contenidoHTML += "<div>" + mostrarTexto() + "</div>";
contenidoHTML += "<div>" + boolena() + "</div>";
contenidoHTML += "<div> arreglo " + mostrarArray() + "</div>";
contenidoHTML += "<div>" + JSON.stringify(mostrarObjeto()) + "</div>";

// Mostramos todo el contenido en el DOM
document.body.innerHTML = contenidoHTML;


