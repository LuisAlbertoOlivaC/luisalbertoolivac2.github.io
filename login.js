function login() {
    // Credenciales de ejemplo
    const validUsername = "usuario";
    const validPassword = "12345";

    // Obtener valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar credenciales
    if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso!");
        // Aquí rediriges al usuario a otra página o realizas alguna acción
        window.location.href = "dashboard.html"; // Redirección a otra página
    } else {
        document.getElementById("error-message").textContent = "Nombre de usuario o contraseña incorrectos.";
    }
}
