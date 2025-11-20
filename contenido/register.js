let formulario =document.querySelector("form");
formulario.addEventListener("submit",function(e) {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let repetir = document.querySelector("#repetir").value;

    if(email === "") {
        e.preventDefault();
        alert("El email es obligatorio");
        return;
    }

    if (password === "") {
        e.preventDefault();
        alert("La contrasena es obligatorio");
        return;
    }

    if (password.length < 6) {
        e.preventDefault();
        alert("La contrasena debe tener al menos 6 caracteres");
        return;
    }

    if (password !== repetir) {
        e.preventDefault();
        alert("Las contrasenas no coinciden");
        return;
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
