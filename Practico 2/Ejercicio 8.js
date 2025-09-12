document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular() {
let numero = Number(document.querySelector("#txtNumero").value)
if (numero > 10 && numero < 30){
    document.querySelector("#pResultado").innerHTML = "Cumple"
}else{document.querySelector("#pResultado").innerHTML = "No cumple"

}

}