function calcularPares (n1, n2){
contadorDePares = 0
for (let i = n1; i <= n2; i++){
    if (i % 2 === 0){
        contadorDePares++
    }
}
    return contadorDePares


}
console.log(calcularPares(2,10))