let bienvenido = document.querySelector(".saludo")
let usuario = localStorage.getItem("loggedUser");

if (usuario){
    bienvenido.innerText += usuario
    bienvenido.style.display = "block"
}