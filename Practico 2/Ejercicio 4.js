document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
function fCalcular (){
let numero = Number(document.querySelector("#txtNumero").value)
if (numero > 0 ){
    document.querySelector("#pResultado").innerHTML = numero > 0 //Lo deje asi pq me gusto que la respuesta sea true
}else{(numero < 0)
    document.querySelector("#pResultado").innerHTML = numero * -1
    
}



}
