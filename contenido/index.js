fetch("https://dummyjson.com/products/category/womens-bags")
  .then(res => res.json())
  .then(data => {
    const seccionCarteras = document.querySelector(".containerUno section:nth-of-type(2)");
    seccionCarteras.innerHTML = "";

    data.products.slice(0, 10).forEach(prod => {
      seccionCarteras.innerHTML += `
        <article class="artprin">
          <img src="${prod.thumbnail}" alt="${prod.title}">
          <h2>${prod.title}</h2>
          <p>${prod.description}</p>
          <p>$${prod.price}</p>
          <div>
            <a href="./product.html?id=${prod.id}">Ver más</a>
          </div>
        </article>`;
    });
  });



  fetch("https://dummyjson.com/products/category/womens-dresses")
  .then(res => res.json())
  .then(data => {
    const seccionCamperas = document.querySelector(".containerUno section:nth-of-type(4)");
    seccionCamperas.innerHTML = "";

    data.products.slice(0, 10).forEach(prod => {
      seccionCamperas.innerHTML += `
        <article class="artprin">
          <img src="${prod.thumbnail}" alt="${prod.title}">
          <h2>${prod.title}</h2>
          <p>${prod.description}</p>
          <p>$${prod.price}</p>
          <div>
            <a href="./product.html?id=${prod.id}">Ver más</a>
          </div>
        </article>`;
    });
  });