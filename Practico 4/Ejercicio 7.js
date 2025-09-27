document.querySelector("#btnCalcular").addEventListener("click", fCalcular)


function fCalcular(){
let texto = document.querySelector("#txtTexto").value
let resultado
texto = texto.toLowerCase()

resultado = texto.charAt(0).toUpperCase() + texto.substring(1)
document.querySelector("#pResultado").innerHTML = resultado
}