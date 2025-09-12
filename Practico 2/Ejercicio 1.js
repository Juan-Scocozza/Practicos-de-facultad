document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let numero 
numero = Number(document.querySelector("#txtNumero").value)
if (numero < 0){
    document.querySelector("#pResultado").innerHTML = "El numero es negativo"
}else{
 (numero > 0) 
    document.querySelector("#pResultado").innerHTML = "El numero es positivo"
}
}