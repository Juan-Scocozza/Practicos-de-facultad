//Ingresar dos números y al presionar un botón 
// mostrar todos los números entre esos dos números (inclusive).
//Contemplar el caso que los números se ingresen invertidos 
// (primero el mayor y después el menor).


document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
let numero1
let numero2
let parrafo = ""
function fCalcular(){
numero1 = Number(document.querySelector("#txtNumero1").value)
numero2 = Number(document.querySelector("#txtNumero2").value)

if(numero1 <= numero2){
    for ( let i= numero1; i<= numero2; i++){
         parrafo += i + "<br>"
        }
}else (numero1 >= numero1)
    for ( let i= numero1; i>= numero2; i--){
        parrafo += i +"<br>"
    }

document.querySelector("#pResultado").innerHTML = parrafo
}

