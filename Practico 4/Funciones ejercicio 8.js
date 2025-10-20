document.querySelector("#btnCalcular").addEventListener("click", calcularSueldo)


function calcularSueldo (){

    let sueldo = Number(document.querySelector("#txtSueldo").value)
    let tieneHijos = document.querySelector("#slcHijos").value

    if (isNaN (sueldo) || sueldo <= 0){
        document.querySelector("#pResultado").innerHTML = "Ingrese un monto valido" 
        return
    }

    if (tieneHijos === "xx"){
        document.querySelector("#pResultado").innerHTML = "Seleccione una opcion"
        return
    }
      let resultado = sueldoLiquido (sueldo, tieneHijos)
            document.querySelector("#pResultado").innerHTML = "Su sueldo corresponde a: " + resultado
}

function sueldoLiquido (sueldo, tieneHijos){
    let descuentoBps = sueldo * 0.15
    let descuentoFrl = sueldo * 0.001
    let descFonasaHijos = sueldo * 0.06
    let descFonasa = sueldo * 0.045

    let sueldoFinal 
     
    if (tieneHijos === "N"){
        let sueldoLiquido = sueldo - (descuentoBps + descuentoFrl + descFonasa)
sueldoFinal = sueldo - (descuentoBps + descuentoFrl + descFonasa)
    }else 
        sueldoFinal = sueldo - (descuentoBps + descuentoFrl + descFonasaHijos)

return sueldoFinal
    
}
