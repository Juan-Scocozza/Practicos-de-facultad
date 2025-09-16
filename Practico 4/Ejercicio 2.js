document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let texto = document.querySelector("#txtTexto").value
let contador = 0
texto = texto.toUpperCase()
for (let i = 0; i <= texto.length-1; i++){
    let caracter = texto.charAt (i)
    if (caracter === "A" || caracter === "E" || caracter === "I" || caracter === "O" || caracter === "U"){
    contador++
}
document.querySelector("#pResultado").innerHTML = contador
}



}