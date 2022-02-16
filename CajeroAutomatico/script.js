const cuentas = [
    {nombre:"Mali",saldo:200,password:"Mali123"},
    {nombre:"Gera",saldo:290,password:"Gera123"},
    {nombre:"Maui",saldo:67,password:"Maui123"}
]

var accesoCuenta = -1

function validar(){
    var user = document.getElementById("uname").value
    var pass = document.getElementById("upass").value
    window.location.href="acceso.html"
    for(var i = 0; i<cuentas.length; i++){
        if(cuentas[i].nombre==user && cuentas[i].password==pass){
            accesoCuenta=i
            //alert("A ingresado exitosamente")
            window.location.href="acceso.html"        
        }
    }
    if(accesoCuenta==-1){
        alert("Usuario y/o contraseña incorrectos, intenta de nuevo.")
    }
}