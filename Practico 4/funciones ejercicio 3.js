function calcularAreaTriangulo (base, altura){ 
 
    if (base <= 0 || altura <= 0 ){
        return -1
    }
    let area = base * altura / 2
return area
}

console.log(calcularAreaTriangulo(4,3))
console.log(calcularAreaTriangulo(-4,3))




