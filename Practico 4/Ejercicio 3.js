document.querySelector("#btnTransformar").addEventListener("click", fCalcular)
function fCalcular (){

let texto = (document.querySelector("#txtTexto").value)
texto = texto.toUpperCase()
 document.querySelector("#pResultado").innerHTML = texto


}