const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email === "") {
    alert("El campo email es obligatorio");
    return;
  }

  if (password === "") {
    alert("El campo contraseña es obligatorio");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  localStorage.setItem("usuario", email);
  location.href = "index.html";
});