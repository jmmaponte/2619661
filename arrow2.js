const background= 'red'
const color = 'white'
const estaAutorizado = true;
const button = document.createElement('button')
button.innerText = ('click me ')
button.style = `background: ${background}; color: ${color}`

//operador ternario  ?
button.style = `background: ${estaAutorizado ? 'yellow' : 'black'}; color: ${color}`
button.addEventListener('click', () => {
if (estaAutorizado) {
    return alert('Esta autorizado')
} 
    alert('no Esta autorizado para nada')
})

document.body.append(button)

