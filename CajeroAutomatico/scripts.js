const cuentas = [
    {nombre:"Mali",saldo:200,password:"Mali123"},
    {nombre:"Gera",saldo:290,password:"Gera123"},
    {nombre:"Maui",saldo:67,password:"Maui123"}
]

var accesoCuenta = -1

function ingresar(){
    var intentos = 3
    var username = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    for(var i = 0; i<cuentas.length; i++){
        if(cuentas[i].nombre==username && cuentas[i].password==pass){
            accesoCuenta=i
            alert("A ingresado exitosamente")
            window.location = "acceso.html"
            return false
        }
    }
    if(accesoCuenta==-1){
        alert("Usuario y/o contraseña incorrectos, te quedan "+intentos+" intentos")
    }

} 


/* function display(value){
    cleanDisplay()
    document.getElementById("output").innerHTML +=value
}

function cleanDisplay(){
    document.getElementById("output").innerHTML=""
}

function consultarSaldo(){
    var mensaje= "Su saldo es: <br> "+cuentas[accesoCuenta].saldo
    display(mensaje)
}

function deposito(value){
    if((cuentas[accesoCuenta].saldo + value)>990){
        display("No se pueden tener más de $990 en la cuenta")
    }else{
        cuentas[accesoCuenta].saldo =cuentas[accesoCuenta].saldo + value
        var mensaje = "El monto ingresado fue: "+value+" <br> El nuevo saldo es: <br>"+ cuentas[accesoCuenta].saldo
        
        display(mensaje)
    }

}

function retiro(value){
    if((cuentas[accesoCuenta].saldo - value)<10){
        var mensaje ="No puede haber menos de $10 en la cuenta"
        display(mensaje)
    }else{
        cuentas[accesoCuenta].saldo =cuentas[accesoCuenta].saldo - value
        var mensaje="Usted ha retirado: "+value+"<br> El nuevo saldo es: <br>"+cuentas[accesoCuenta].saldo
        display(mensaje)
    }
    
    
} */