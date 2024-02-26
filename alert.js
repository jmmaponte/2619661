//creamos un nuevo elemto 'button'
const boto = document.createElement("button")
//Establecemos un texto interno del boton
boto.innerText= ('click mee');
//agregamos el event listener a este botón para el evenento click
boto.addEventListener('click', () => {
    //Esta funcion anónima se ejecuta cuando se hace click en elboton
    //muestra una alerta con el mensaje "Haz dado click"
   return alert("Haz dado click");

});

//Lanza y muestra el button al doom o navegador
document.body.appendChild(boto);