let numero1;
let numero2;
document.querySelector("#btnMostrar").addEventListener("click", fMultiplicarySumar);

function fMultiplicarySumar(){
    let numero1 = Number(document.querySelector("#txtValor1").value);
    let numero2 = Number(document.querySelector("#txtValor2").value);
    let sumar = numero1 + numero2;
    let multiplicar = numero1 * numero2;
    document.querySelector("#pSuma").innerHTML=sumar;
    document.querySelector("#pMultiplicacion").innerHTML = multiplicar;


};