document.querySelector("#btnIngresar").addEventListener("click", fCalcular)
//Ingresar un número y mostrar si es mayor que 10 y menor que 20 o no.

function fCalcular(){
let numero = Number (document.querySelector("#txtNumero").value)

if (numero > 10 ){
    document.querySelector("#pResultado").innerHTML = "Es mayor que 10"
}else if (numero < 20){
    document.querySelector("#pResultado").innerHTML = "Es menor que 20"
}}
