
const button = document.createElement('button')
button.innerText = ('click me')

const estaAutorizado = false;

button.addEventListener('click', () => {
if (estaAutorizado) {

    return  alert('Esta autorizado')
} 

    alert('no Esta autorizado')


})

document.body.appendChild(button)

