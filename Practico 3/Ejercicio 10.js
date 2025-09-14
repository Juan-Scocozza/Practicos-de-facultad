document.querySelector("#btnCalcular").addEventListener("click", fcalcular)

function fcalcular(){
    let numero1 = Number(document.querySelector("#txtNumero1").value)
    let numero2 = Number(document.querySelector("#txtNumero2").value)
    let resultado =1
    for(let i = numero1; i <= numero2; i++){
        resultado = resultado * i
    }
document.querySelector("#pResultado").innerHTML = resultado
}
