/**
 * La suma de un rango:
 * 
 * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
 * que contenga todos los números desde inicio hasta (e incluyendo) final. 
 * Luego, escribe una función suma que tome un array de números y retorne 
 * la suma de estos números
 */
function completar(a,b){
    var lista = []
    for(var i=a; i<=b;i++){
        lista.push(i)
    }
    return lista
}
var numeros = completar(2,8)
console.log(numeros)

function sumaLista(arr){
    var sum = 0
    arr.forEach(element => {
        sum = sum + element
    });
    return sum
}

var suma = sumaLista(numeros)
console.log(suma)