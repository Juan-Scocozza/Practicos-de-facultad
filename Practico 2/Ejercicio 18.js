document.querySelector ("#btnCalcular").addEventListener("click", fCalcular)

let acumulador = 0
let contador = 0

function fCalcular(){
let numero = Number(document.querySelector("#txtNumero").value)

if (numero < 0 ){
    numero = numero * -1
}
acumulador += numero
contador ++

if (contador === 6 ){
    document.querySelector("#pResultado").innerHTML = acumulador
}

}


