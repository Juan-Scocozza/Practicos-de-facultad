
//Ingresar dos números y presionar un botón, al presionar el botón, si el primero es mayor que el segundo restar al primero el segundo, sino restar al segundo el primero y para cualquier caso mostrar el resultado.

document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let numero1 = Number (document.querySelector("#txtNumero1").value)
let numero2 = Number (document.querySelector("#txtNumero2").value)

if (numero1 > numero2){
    document.querySelector("#pResultado").innerHTML = numero1 - numero2
}else if(numero2 > numero1){
    document.querySelector("#pResultado").innerHTML = numero2 - numero1
}







}