
let login = document.querySelector(".link-login")
let registro = document.querySelector(".link-registro")
let botonLogout = document.querySelector(".logout");


// if HAY ALGUIEN REGISTRADO: QUE APARESQUE EL LOGOUT
if (localStorage.getItem("loggedUser")) {
    botonLogout.style.display = "block";
}


botonLogout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    let saludoElemento = document.querySelector(".saludo");

    // LOGIN Y REGISTRO APARECER
    // OCULTAR LOGOUT Y SALUDO
    registro.style.display = "block";
    login.style.display = "block";

// FALTA AGREGAR EL SALUDO CHICAS
    saludoElemento.innerText = ""
});

