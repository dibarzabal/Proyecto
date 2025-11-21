let formulario =document.querySelector(".formulario_registro");
formulario.addEventListener("submit",function(e) {
    e.preventDefault();


    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let repetir = document.querySelector("#repetir");

    if(email.value === "") {
        alert("El email es obligatorio");
    }

    if (password.value === "") {
        alert("La contrasena es obligatorio");
    }

    if (password.value.length < 6) {
        alert("La contrasena debe tener al menos 6 caracteres");
    }

    if (password.value !== repetir) {
        alert("Las contrasenas no coinciden");
    }

    let usuarios = [];

    if (localStorage.getItem("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    let nuevoUsuario = {
        email: email,
        password: password
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
});
