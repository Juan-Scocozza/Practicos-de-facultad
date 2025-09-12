//Ingresar dos números y al presionar un botón indicar si el primero es múltiplo del segundo.

document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let numero1 = Number(document.querySelector("#txtNumero1").value)
let numero2 = Number(document.querySelector("#txtNumero2").value)

if (numero1 % numero2 === 0){
document.querySelector("#pResultado").innerHTML= "Es multiplo"
}else{
    document.querySelector("#pResultado").innerHTML = "No es multiplo"


}


}