function datos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;


    var mensaje = "Nombres; " + nombres
    +"\nApellidos: "  + apellidos
    +"\nCorreo electrónico: " + email
    +"\nFecha de nacimiento: " + fechaNacimiento
    +"\nEs mujer: " + f
    +"\nEs hombre: " + m
 

   
    
    console.log(mensaje);
}