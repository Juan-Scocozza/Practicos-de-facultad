document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let alto= Number(document.querySelector("#txtAlto").value)
let ancho= Number(document.querySelector("#txtAncho").value)

let dibujo = ""
for (let i= 1; i<= ancho*alto; i++){
    dibujo += 0
    if(i % ancho ===0){
        dibujo += "<br>"
    }
}
document.querySelector("#pResultado").innerHTML = dibujo


}