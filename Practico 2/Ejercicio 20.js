document.querySelector("#btnCalcular").addEventListener("click", fCalcular)



function fCalcular (){

let agua 
let harina
let aceite 
let azucar 

 let cantAgua = Number(document.querySelector("#txtAgua").value)
let cantHarina = Number(document.querySelector("#txtHarina").value)
let cantAceite = Number(document.querySelector("#txtAceite").value)
let cantAzucar = Number(document.querySelector("#txtAzucar").value)


agua = cantAgua / 1
harina = cantHarina / 100
aceite = cantAceite / 1
azucar = cantAzucar / 1


let cantRecetas = cantAgua

if(cantHarina < cantRecetas){
cantRecetas = cantHarina
}
if(cantAceite < cantRecetas){
    cantRecetas = cantAceite
}
if (cantAzucar < cantRecetas){
    cantRecetas = cantAzucar
}
document.querySelector("#pResultado").innerHTML = "la cantidad de recetas es: " + cantRecetas + " recetas"
    





}