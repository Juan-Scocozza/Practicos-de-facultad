document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){

let numero1 = Number(document.querySelector("#txtNumero1").value)
let numero2 = Number(document.querySelector("#txtNumero2").value)
let numero3 = Number(document.querySelector("#txtNumero3").value)

if( numero1 > numero2 && numero1 > numero3){
    document.querySelector("#pResultado").innerHTML = "A es mayor"
}



}