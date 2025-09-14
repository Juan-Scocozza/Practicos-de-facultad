document.querySelector("#btnCalcular").addEventListener("click", fcalcular)

function fcalcular(){
let numero1= Number(document.querySelector("#txtNumero1").value)
let numero2= Number(document.querySelector("#txtNumero2").value)
let numero3= Number(document.querySelector("#txtNumero3").value)
let mayorMenor
      if (numero1 > numero2) {
                mayorMenor = numero1
                numero1 = numero2
                numero2 = mayorMenor
            }

let resultado = ""
for(let i= numero1; i<= numero2; i++){
    if(i% numero3 === 0){
        resultado += i + "<br>" 
    }
}
document.querySelector("#pResultado").innerHTML = resultado
}