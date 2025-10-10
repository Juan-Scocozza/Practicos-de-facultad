function calcularPotencias(base, exponente){
    let resultado = 1
    for(let i= 1; i<= exponente; i++){
        resultado = resultado * base
    }
    return resultado
}
console.log(calcularPotencias(4,6))