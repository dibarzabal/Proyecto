
let formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");

        if (email.value === "") {
            alert("El campo email es obligatorio");
            return;
        }
        if (password.value === "") {
            alert("El campo password es obligatorio");
            return;
        }
        if (password.value.length < 6) {
            alert("La contrasenia debe tener al menos 6 caracteres");
            return;
        }

        let usuarios = [];

        if (localStorage.getItem("usuarios")) {
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
        }

        let usuarioEncontrado = false;

        for (let i = 0; i < usuarios.value.length; i++) {
            if (usuarios[i].email === email && usuarios[i].password === password) {
                usuarioEncontrado = true;
            }
        }

        if (usuarioEncontrado === false) {
            alert("Email o contrasenia incorrectos");
            return;
        }

        localStorage.setItem("loggedUser", email)

        location.href = "index.html";
    });





