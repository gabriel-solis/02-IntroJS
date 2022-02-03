var word1 = "madam"
var word2 = "anita lava la tina"


function esPalindromo(palabra){
    var paralabraReversa = ""
    for(var i = palabra.length-1; i > -1; i--){
        paralabraReversa = paralabraReversa + palabra[i]
    }

    if(palabra == paralabraReversa){
        //console.log("true")
        return true
    }else{
        //console.log("false")
        return false
    }
}
console.log(esPalindromo(word1))
console.log(esPalindromo(word2))