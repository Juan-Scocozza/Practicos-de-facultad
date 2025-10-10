document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
    let texto = document.querySelector("#txtTexto").value
let primeraLetra = texto.charAt(0)
let contarLetra = 0


for (let i = 0; i< texto.length; i++){
if (texto.charAt(i) === primeraLetra){
    contarLetra++
} 


}

document.querySelector("#pResultado").innerHTML = "En la palabra " + texto + " la primer letra se repite  " + contarLetra + " veces"

}

