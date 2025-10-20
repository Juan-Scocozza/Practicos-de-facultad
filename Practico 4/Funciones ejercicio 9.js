document.querySelector("#btnCalcular").addEventListener("click", fCalcularIRPF)

function fCalcularIRPF(){
        let sueldo = Number(document.querySelector("#txtIngresarSueldo").value)

         if (isNaN(sueldo) || sueldo <= 0) {
        document.querySelector("#pResultado").innerHTML = "Ingrese un monto valido"
        return

}
document.querySelector("#pResultado").innerHTML = calcularIRPF(sueldo)
}
function calcularIRPF(sueldo) {
    let impuesto = 0

    if (sueldo > 650901){ 
        impuesto += (sueldo - 650900) * 0.36; sueldo = 650900 }
    if (sueldo > 424501){
         impuesto += (sueldo - 424500) * 0.31; sueldo = 424500 }
    if (sueldo > 283001){
         impuesto += (sueldo - 283000) * 0.27; sueldo = 283000 }
    if (sueldo > 169801){
         impuesto += (sueldo - 169800) * 0.25; sueldo = 169800 }
    if (sueldo > 84901){
         impuesto += (sueldo - 84900)  * 0.24; sueldo = 84900 }
    if (sueldo > 56601){
         impuesto += (sueldo - 56600)  * 0.15; sueldo = 56600 }
    if (sueldo > 39621){
         impuesto += (sueldo - 39620)  * 0.10; sueldo = 39620 }

return "IRPF a pagar: " + impuesto
    }