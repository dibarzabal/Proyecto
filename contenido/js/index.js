

// ACA ES PARA CARTERA
fetch("https://dummyjson.com/products/category/womens-bags")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    let seccionCarteras = document.querySelector(".containerUno section:nth-of-type(2)");
    seccionCarteras.innerHTML = "";
    for(let i = 0; i < 10; i++){
      let producto = datos.products[i];
      seccionCarteras.innerHTML += `
        <article class="artprin">
          <img src="${producto.thumbnail}" alt="${producto.title}">
          <h2>${producto.title}</h2>
          <p>${producto.description}</p>
          <p>$${producto.price}</p>
          <div>
            <a href="./product.html?id=${producto.id}">Ver más</a>
          </div>
        </article>`;
    }
  })
  .catch(function(error){
    console.log("Error:", error);
  });


// ACA ES PARA CAMPERA
  fetch("https://dummyjson.com/products/category/womens-dresses")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    let seccionCamperas = document.querySelector(".containerUno section:nth-of-type(4)");
    seccionCamperas.innerHTML = "";
    for(let i = 0; i < 10; i++){
      let producto = datos.products[i];
      seccionCamperas.innerHTML += `
        <article class="artprin">
          <img src="${producto.thumbnail}" alt="${producto.title}">
          <h2>${producto.title}</h2>
          <p>${producto.description}</p>
          <p>$${producto.price}</p>
          <div>
            <a href="./product.html?id=${producto.id}">Ver más</a>
          </div>
        </article>`;
    }
  })
.catch(function(error){
    console.log("El error es:" + error);
})


let campoVacio = document.querySelector(".invalid-feedback")
let campoBuscador = document.querySelector(".header_input")
let form = document.querySelector(".form_header")

campoVacio.style.display = "none"

form.addEventListener("submit", function(event) {

    event.preventDefault();
    campoVacio.style.display = "none"
    if (campoBuscador.value == ""){
      campoVacio.style.display = "block"
    }
    else{
      this.submit()
    }

  })
