let qs = location.search;
let qsObj = new URLSearchParams(qs);
let category = qsObj.get("categoria");

console.log(category);


fetch('https://dummyjson.com/products/category/' + category)  
.then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos)
    let categoria = document.querySelector(".categoria_elegida");
    categoria.innerHTML = "";
    for(let i = 0; i < 10; i++){
      let producto = datos.products[i];
      categoria.innerHTML += `<article class="artprin">
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