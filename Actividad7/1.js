function buscar(oracion, palabra){
    if(oracion.includes(palabra)){
        return true
    }else{
        return false
    }
}

console.log(buscar("hola mundo", "holas"))
