
let formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if (email === "") {
            alert("El campo email es obligatorio");
            return;
        }
        if (password === "") {
            alert("El campo password es obligatorio");
            return;
        }
        if (password.length < 6) {
            alert("La contrasenia debe tener al menos 6 caracteres");
            return;
        }

        let usuarios = [];

        if (localStorage.getItem("usuarios")) {
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
        }

        let usuarioEncontrado = false;

        for (let i = 0; i < usuarios.length; i++) {
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





