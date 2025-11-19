let botonLogout = document.querySelector(".logout");

if (botonLogout) {
    botonLogout.addEventListener("click", function(){
        localStorage.removeItem("loggedUser");
        location.herf = "index.html"
    });
}