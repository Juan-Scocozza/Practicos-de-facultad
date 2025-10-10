function validarNumericoPositivo(numero){
    return (!isNaN(numero) && numero > 0)
}
function calcularSalario(tipoEmpleado,horas,dias){
    let salario = 200
    if (tipoEmpleado === "Asistente"){
        salario = 150
    }
    return salario * dias * horas
}

function calcularCostoMateriales(costoMateriales){
    return costoMateriales * 1.1
}