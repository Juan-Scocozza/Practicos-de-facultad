document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
 
function fCalcular(){
let texto = document.querySelector("#txtTexto").value
let parrafo = document.querySelector("#pResultado")
let mayusculas = 0
let minusculas = 0

for (let i = 0; i < texto.length; i++){
    let caracter = texto.charAt(i)
    if(caracter === " "){

    }
    if (caracter >= "A" && caracter <= "Z"){
        mayusculas++
    }else if  (caracter >= "a" && caracter <= "z"){
        minusculas++
    }
    parrafo.innerHTML = "Mayusculas:" + mayusculas + "<br>" +
    "Minusculas:" + minusculas 

}




}