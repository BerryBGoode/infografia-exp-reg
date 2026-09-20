//expresiones regulares
/**
 * Solo número ^[0-9]+$
 * Solo letras ^[A-Za-z]+$
 * Correo electronico ^[^\s@]+@[^\s@]+\.[^\s@]+$
 * telefono ^[0-9]{4}-[0-9]{4}$
 * numero de DUI /^[0-9]{8}[-][0-9]{1}$/
*/

//Definiciones de las expresiones regulares
const numeros = /^[0-9]+$/
const letras = /^[A-Za-z]+$/
const correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefono = /^[0-9]{4}-[0-9]{4}$/;
const DUI = /^[0-9]{8}[-][0-9]{1}$/

//obteniendo inputs tipo text los elementos del DOM
const txtNumeros = document.getElementById('txtNumeros');
const txtLetras = document.getElementById('txtLetras');
const txtCorreo = document.getElementById('txtCorreo')
const txtTelefono = document.getElementById('txttelefono')
const txtDui = document.getElementById('txtDui')

//cambia el borde del input dependiendo sí coincide con la expresión regular
let cambiarBorde = (input, coincidencia) => {
    input.classList.remove('border-slate-800')
    coincidencia == true ? input.classList.add('border-green-600') : input.classList.add('border-red-600')
}

let recargarBorde = (input) => {
    if (input.value === "") {
        input.classList.remove('border-green-600')
        input.classList.remove('border-red-600')
        input.classList.add('border-slate-800')
    }
}
//evento para restaurar el borde de los inputs
txtNumeros.addEventListener('blur', () => recargarBorde(txtNumeros))
txtLetras.addEventListener('blur', () => recargarBorde(txtLetras))
txtCorreo.addEventListener('blur', () => recargarBorde(txtCorreo))
txtTelefono.addEventListener('blur', () => recargarBorde(txtTelefono))
txtDui.addEventListener('blur', () => recargarBorde(txtDui))


document.getElementById('solo-numeros').addEventListener('click', (e) => {
    e.preventDefault();
    if (!numeros.test(txtNumeros.value)) {
        alert("En el input se deben ingresar solo números")
    }
    if (numeros.test(txtNumeros.value)) {
    }
    cambiarBorde(txtNumeros, numeros.test(txtNumeros.value))
})

document.getElementById('solo-letras').addEventListener('click', (e) => {
    e.preventDefault()
    if (!letras.test(txtLetras.value)) {
        alert("En el input se deben ingresar solo letras")
    }
    if (letras.test(txtLetras.value)) {
    }
    cambiarBorde(txtLetras, letras.test(txtLetras.value))
})

document.getElementById('correo').addEventListener('click', (e) => {
    e.preventDefault()
    if (!correo.test(txtCorreo.value)) {
        alert("En el input se deben ingresar solo correo")
    }
    if (correo.test(txtCorreo.value)) {
    }
    cambiarBorde(txtCorreo, correo.test(txtCorreo.value))
})

document.getElementById('telefono').addEventListener('click', (e) => {
    e.preventDefault()
    if (!telefono.test(txtTelefono.value)) {
        alert("En el input se deben ingresar solo telefono")
    }
    if (telefono.test(txtTelefono.value)) {
    }
    cambiarBorde(txtTelefono, telefono.test(txtTelefono.value))
})

document.getElementById('Dui').addEventListener('click', (e) => {
    e.preventDefault()
    if (!DUI.test(txtDui.value)) {
        alert("En el input se deben ingresar solo DUI")
    }
    if (DUI.test(txtDui.value)) {
    }
    cambiarBorde(txtDui, DUI.test(txtDui.value))
})