let formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", function(event){
  event.preventDefault();

  let email = document.querySelector("#email").value.trim();
  let password = document.querySelector("#password").value.trim();

  if(email === ""){
    alert("El campo email es obligatorio");
    return;
  }

  if(password === ""){
    alert("El campo contraseña es obligatorio");
    return;
  }

  if(password.length < 6){
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  localStorage.setItem("usuario", email);
  location.href = "index.html";
});