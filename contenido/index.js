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

// Camperas (womens-dresses)
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
    console.log("Error:", error);
  });
