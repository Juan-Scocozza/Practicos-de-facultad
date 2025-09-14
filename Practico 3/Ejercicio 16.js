document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let numero1 = Number(document.querySelector("#txtNumero1").value)
let numero2 = Number(document.querySelector("#txtNumero2").value)
let resultado 
for (let i = numero1; i <= numero2; i++){
    if (i% 4 ===0 && i% 6 ===0 ) {
        resultado = "El primer multiplo de 4 y 6 es: " + i
    }else
 {
}
}
document.querySelector("#pResultado").innerHTML = resultado
}


