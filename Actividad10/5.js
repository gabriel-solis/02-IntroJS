/**
 * Revirtiendo un array:
 * 
 * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que 
 * aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
 * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
 * produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
 * El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: 
 * modifica el array dado como argumento invirtiendo sus elementos. 
 * Ninguno de los dos puede usar el método reverse estándar.
 */
const array = [9,2,3,1,4,5]

function revertirArreglo(arr){
    var newArr = []
    for(var i = arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

var deReversa = revertirArreglo(array)
console.log(deReversa)

//ordenando
deReversa.sort(function(a,b){
    return a-b;
});

console.log(deReversa)