document.querySelector("#btnCalcular").addEventListener("click", fcalcular)



function fcalcular(){
    let numero1=Number(document.querySelector("#txtNumero1").value)
let numero2= Number(document.querySelector("#txtNumero2").value)

let resultado = 0
for (let i =1; i<= numero2; i++){
    resultado = numero1 + resultado
}
    
document.querySelector("#pResultado").innerHTML = "El producto es " + resultado


}