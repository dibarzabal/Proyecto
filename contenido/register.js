const formRegister = document.querySelector("form");

formRegister.addEventListener("submit", function (e) {
  const inputs = formRegister.querySelectorAll(".email_text_password");


  if (pass1 === "" || pass2 === "") {
    alert("Los campos de contraseña son obligatorios");
    e.preventDefault();
    return;
  }

  if (pass1.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    e.preventDefault();
    return;
  }

  if (pass1 !== pass2) {
    alert("Las contraseñas no coinciden");
    e.preventDefault();
    return;
  }

  alert("Registro exitoso");
});