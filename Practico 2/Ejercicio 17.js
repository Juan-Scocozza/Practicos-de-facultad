document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
function fCalcular(){
let numero1 = Number (document.querySelector("#txtValor1").value)


if (numero1 < 0 || numero1 > 10){
document.querySelector("#pResultado").innerHTML = "Numero 1 esta fuera de rango"
    
}else{
    document.querySelector("#pResultado").innerHTML = "Numero 1 esta dentro del rango"
}

}