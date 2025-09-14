document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){

    let numero = Number(document.querySelector("#txtNumero").value)
    let contador = 0

    while(numero >=1){
        numero = numero/10
        contador++
    }

document.querySelector("#pResultado").innerHTML = contador
}