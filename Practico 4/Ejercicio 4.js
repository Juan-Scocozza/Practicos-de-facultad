document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
    let texto = document.querySelector("#txtTexto").value
    let texto2 = document.querySelector("#txtTexto2").value
    let resultado = ""
    if (texto.indexOf(texto2)< 0 ){
       resultado =  "No existe"
    }else 
        resultado = "Existe"

    document.querySelector("#pCalcular").innerHTML = resultado
}

