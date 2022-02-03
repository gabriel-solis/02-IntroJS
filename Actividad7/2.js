function sumaAcumulada(arreglo){
    var suma = 0
    for(var i = 0; i < numbers.length; i++){
        suma = suma + numbers[i]
    }
    return suma
}
var numbers = [1,2,3,4,10,11]
console.log(sumaAcumulada(numbers))