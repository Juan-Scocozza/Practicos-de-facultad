document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){

let numero = Number(document.querySelector("#txtNumero").value)
if (numero > 2000){
    while (numero >= 100){
        numero = numero/20
    }
    document.querySelector("#pResultado").innerHTML = numero
}else {
    document.querySelector("#pResultado").innerHTML = "El numero tiene que ser mayor a 2000"
}
}