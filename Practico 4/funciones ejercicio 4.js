document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
    let cantDias = Number(document.querySelector("#txtDias").value)
    let cantHoras = Number(document.querySelector("#txtHoras").value)
    let tieneAsistente = document.querySelector("#checkAsistente").checked
    let costoMateriales = Number(document.querySelector("#txtMateriales").value)

if(validarNumericoPositivo(cantDias)&& validarNumericoPositivo (cantHoras)&& validarNumericoPositivo(costoMateriales)){
    let costoTotal = calcularSalario("Electricista",cantHoras,cantDias)+calcularCostoMateriales(costoMateriales)
    if(tieneAsistente){
    costoTotal +=calcularSalario("Asistente",cantHoras,cantDias)
  
    }
      document.querySelector("#pResultado").innerHTML = "Presupuesto" + costoTotal

}else{document.querySelector("#pResultado").innerHTML = "Ingreso incorrecto"}
}

