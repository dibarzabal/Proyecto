
let formLogin = document.querySelector(".login-form");

let campoLoginemail = document.querySelector("#email")
let campoLogincontra = document.querySelector("#password")

let contraVaciaLogin = document.querySelector(".contraseñaVacia")
let contraCaract = document.querySelector(".caracteresContraseña")
let emailLoginVacio = document.querySelector(".emailVacio")

formLogin.addEventListener("submit", function (e) {
        e.preventDefault();
    
        if (campoLoginemail.value == ""){
            emailLoginVacio.style.display = "block"

        } else if (campoLogincontra.value == ""){
            contraVaciaLogin.style.display = "block"

        }else if (campoLogincontra.value.length < 6){
            contraCaract.style.display = "block"
        } 

        let usuarios = [];

        if (localStorage.getItem("usuarios")) {
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
        }

        let usuarioEncontrado = false;

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === campoLoginemail.value && usuarios[i].password === campoLogincontra.value) {
                usuarioEncontrado = true;
            }
        }

        if (usuarioEncontrado === false) {
            alert("Email o contrasenia incorrectos");
            return;
        }
        else {
            this.submit()
        }
        localStorage.setItem("loggedUser", campoLoginemail.value)
        location.href = "index.html";
    });





