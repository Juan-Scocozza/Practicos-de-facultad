let lado
document.querySelector("#btnIngresar").addEventListener("click",cuadrado);
function cuadrado(){
let lado = Number(document.querySelector("#txtLado").value)
let calcular = lado * lado
document.querySelector("#pMostrar").innerHTML = calcular



};