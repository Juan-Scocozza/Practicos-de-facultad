document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
//Ingresar un número y mostrar si es menor que -20 o mayor que 20, indicando con un aviso "CUMPLE" para cualquiera de los dos casos o "NO CUMPLE" en caso que esté en el rango de menos veinte a veinte.</h1>

function fCalcular(){
let numero = Number(document.querySelector("#txtNumero").value)

if(numero < -20 || numero > 20 ){
    document.querySelector("#pResultado").innerHTML = "Cumple"
}else{
document.querySelector("#pResultado").innerHTML = "No cumple"
}

}