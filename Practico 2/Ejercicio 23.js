document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
let perdieron = 0
let salvaron = 0
let salvaronMuyBuenaNota = 0
let nMaxima = Number.MIN_SAFE_INTEGER
let nMinima = Number.MAX_SAFE_INTEGER
let promedio
let sumarNotas = 0
let contarNotas = 0

function fCalcular (){
let nota = Number (document.querySelector("#txtNotas").value)

if (nota < 70){
    perdieron++
} else if (nota < 90){
    salvaron++
}else{
    salvaronMuyBuenaNota++
}
sumarNotas += nota
contarNotas++
if(nota > nMaxima){
   nMaxima = nota
}
if (nota < nMinima){
    nMinima = nota
}

promedio = sumarNotas / contarNotas

document.querySelector("#pCalcular").innerHTML = "Perdieron: " + perdieron  + "<br>" +
"Salvaron: " + salvaron +"<br>" +
"Muy buena nota: " + salvaronMuyBuenaNota +  "<br>" +
"Nota maxima: " + nMaxima + "<br>" +
"Nota minima: " + nMinima +  "<br>" +
"Promedio: " + promedio 

}