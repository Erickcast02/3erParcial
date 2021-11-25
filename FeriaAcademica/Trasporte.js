<script>
menu();
    function menu(){
        let mostrar = true;
            while (mostrar == true){
                    let opcion2 = prompt("Ingrese si es registrarse o iniciar sesion");
                if (opcion2 == "registrarse"){
                    let usu = {
                    nombre: prompt("Ingrese su nombre"),
                    apellido: prompt("Ingrese su apellido")
                    }
                    let telefono = prompt("Ingrese su telefono");
                    let confirmar = prompt("Ingrese su telefono nuevamente");
                    
                if (telefono == confirmar){   
                        alert("Registro exitoso tu numero de usuario es 1234578");
                            mostrar = true;
                }
                else{
                        alert("El telefono coincide");
                }
                }
                else if (opcion2 == "iniciar sesion"){
                    let numero = prompt("Ingrese su numero de usuario");
                        if (numero == 12345678){
                            tarifaSegunTiempo()
                }
                else{
                        alert("Usuario incorrecto");
                }
                }
                else{
                        alert("Opcion incorrecta");
                }
                if (opcion2 == "0"){
                    mostrar = false;
                }
    }

}        

function tarifaSegunTiempo() {
    let  time = prompt("Ingrese el total de tiempo en minutos que espero su transporte");
    
    if (time <= 20 ) {
        alert ("Su tarifa es de $25");
        
            var tarifas = prompt("Ingrese su monto de pago");
                if (tarifas == 25) {
                    console.log("Gracias por tomar el transporte")
                } 
                else {
                    if (tarifas < 25) {
                        console.log("Su monto es insuficiente")
                    } 
                    else {
                        total = tarifas - 25;
                        console.log("Su cambio es de $" + total + " buen camino")
                    }
                }  
    }
    if (time >= 21 && time <= 30) {
        alert ("Su tarifa es de $17");
            
            var tarifas = prompt("Ingrese su monto de pago");
            
                if (tarifas == 17) {
                    console.log("Gracias por tomar el transporte")
                } 
                else {
                    if (tarifas < 17) {
                        console.log("Su monto es insuficiente")
                    } 
                    else {
                        total = tarifas - 17;
                        console.log("Su cambio es de $" + total + " buen camino");
                    }
                
                }  
    }
    if (time >= 40) {
        alert ("Su total es de $10");
        var tarifas = prompt("Ingrese su monto de pago");
            
                if (tarifas == 10) {
                    console.log("Gracias por tomar el transporte")
                } 
                else {
                    if (tarifas < 10) {
                        console.log("Su monto es insuficiente")
                    } 
                    else {
                        total = tarifas - 10;
                        console.log("Su cambio es de $" +  total + " buen camino");
                    }
                
                }  
    }
    

}
</script>