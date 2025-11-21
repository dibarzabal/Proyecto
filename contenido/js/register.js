let formulario =document.querySelector(".formulario_registro");
formulario.addEventListener("submit",function(e) {
    e.preventDefault();


    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let repetir = document.querySelector("#repetir").value;

    if(email === "") {
        alert("El email es obligatorio");
    }

    if (password === "") {
        alert("La contrasena es obligatorio");
    }

    if (password.length < 6) {
        alert("La contrasena debe tener al menos 6 caracteres");
    }

    if (password !== repetir) {
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
