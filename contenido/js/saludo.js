let bienvenido = document.querySelector(".saludo")
let usuario = localStorage.getItem("loggedUser");

let logged = document.querySelector(".link-login")
let registrada = document.querySelector(".link-registro")


if (usuario){
    bienvenido.innerText += usuario
    logged.style.value = "none"
    registrada.style.value = "none"
}