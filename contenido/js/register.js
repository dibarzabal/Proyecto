let formulario =document.querySelector(".formulario_registro");

let campoEmail = document.querySelector("#email");
let campoContraseña = document.querySelector("#password");
let campoReContraseña = document.querySelector("#repetir");

let emailVacio = document.querySelector(".emailVacio")
let contraVacia = document.querySelector(".contraseñaVacia")
let caractContra = document.querySelector(".caracteresContraseña")
let reContra = document.querySelector(".repetirContraseña")

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (campoEmail.value == ""){
        emailVacio.style.display = "block"

    } else if (campoContraseña.value == ""){
        contraVacia.style.display = "block"

    }else if (campoContraseña.value.length < 6){
        caractContra.style.display = "block"

    } else if (campoContraseña.value != campoReContraseña.value){
        reContra.style.display = "block"
    } else {
        this.submit()
    }

    let usuarios = [];

    if (localStorage.getItem("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    let nuevoUsuario = {
        email: campoEmail.value,
        password: campoContraseña.value
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
});


