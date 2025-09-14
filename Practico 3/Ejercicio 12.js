document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){


let numero = Number(document.querySelector("#txtNumero").value)
let resultado = 1

    for (let i = 1; i<= numero; i++){
        resultado = resultado * i
    }
    document.querySelector("#pResultado").innerHTML= resultado
} 