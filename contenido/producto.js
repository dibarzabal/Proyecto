const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch(https://dummyjson.com/products/${id})
  .then(res => res.json())
  .then(prod => {
    document.querySelector(".descripcion").innerHTML = `
      <h1>${prod.title}</h1>
      <p><b>Marca:</b> ${prod.brand}</p>
      <p><b>Categoría:</b> ${prod.category}</p>
      <p>${prod.description}</p>
      <p><b>Precio:</b> $${prod.price}</p>
      <p><b>Stock:</b> ${prod.stock}</p>
      <p><i>#${prod.tags ? prod.tags.join(" #") : ""}</i></p>
    `;
    document.querySelector(".foto_producto").src = prod.thumbnail;
  });