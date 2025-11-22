
let login = document.querySelector(".link-login")
let registro = document.querySelector(".link-registro")
let botonLogout = document.querySelector(".logout");
let saludado = document.querySelector(".saludo")

if (localStorage.getItem("loggedUser")) {
    botonLogout.style.display = "block";
    saludado.style.display = "block";
    registro.style.display = "none";
    login.style.display = "none";
}
botonLogout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedUser");

    registro.style.display = "block"
    login.style.display = "block"
    botonLogout.style.display = "none"
    saludado.style.display="none"
});


