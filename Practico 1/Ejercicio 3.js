let numero1;
let numero2;
let numero3;
document.querySelector("#btnSumar").addEventListener("click", SumarValores);
function SumarValores(){
let numero1 = Number(document.querySelector("#txtValor1").value)
let numero2 = Number(document.querySelector("#txtValor2").value)
let numero3 = Number(document.querySelector("#txtValor3").value)

let resutado = numero1 + numero2 + numero3
document.querySelector("#pResultado").innerHTML = resutado
}