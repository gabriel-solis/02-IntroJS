/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
//retorna los numeros
 function searchSecond(arreglo){
    let seconds = []
    seconds.push(arreglo[1])
    seconds.push(arreglo[arreglo.length-2])
    return seconds
}
//ordena el arreglo
 const arr = [3,4,6,1,5,2,9,10,23,12]
 arr.sort(function(a,b){
     return a-b;
 });

 var seconds = searchSecond(arr)
 console.log(seconds)


