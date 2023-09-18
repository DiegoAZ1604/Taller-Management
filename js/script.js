document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    // Obtiene los valores del usuario y la contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Verifica las credenciales (en este ejemplo, usuario=admin y contraseña=123)
    if (usuario === "admin" && contrasena === "123") {
        // Credenciales correctas, redirige a la página de reparaciones.html
        window.location.href = "reparaciones.html";
    } else {
        // Credenciales incorrectas, muestra un mensaje de error o realiza otra acción
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});