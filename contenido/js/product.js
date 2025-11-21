let query = location.search;
let queryObj = new URLSearchParams(query);
let productoElegido = queryObj.get("id");

let productUrl = "https://dummyjson.com/products/" + productoElegido;

let producto = document.querySelector(".info");
let texto = document.querySelector(".descripcion");
let reviews = document.querySelector(".resenas");

fetch(productUrl)

.then(function(respuesta) {
    return respuesta.json();
})
.then(function(data) {

producto.innerHTML = `
    <img class="foto_producto" src="${data.images[0]}" alt="${data.title}">
`;

let tagsHTML = "";
if (data.tags && data.tags.length > 0) {
    for (let i=0; i < data.tags.length && i < 3; i++) {
        tagsHTML += "#" + data.tags[i] + " ";
    }
}

texto.innerHTML = `
    <h1>${data.title}</h1>
    <p><b>Marca:</b> ${data.brand}</p>
    <p><b>Categoria:</b>
        <a href="category.html?category=${data.category}">
            ${data.category}
        </a>
    </p>
    <p>${data.description}</p>
    <p><b>Precio:</b> $${data.price}</p>
    <p><b>Stock:</b> ${data.stock}</p>
    <p><i>${tagsHTML}</i></p>
`;

reviews.innerHTML = "<h3>Reseñas de usuarios</h3>";

if(!data.reviews || data.reviews.length === 0) {
    reviews.innerHTML += "<p>No hay reseñas disponibles.</p>";
}

for (let i = 0; i < data.reviews.length; i++) {
    let review = data.reviews[i];
    let estrellas = "";

    for (let r = 0; r < review.rating; r++) {
        estrellas += "⭐";
    }

    reviews.innerHTML += `
        <p>${estrellas} "${review.comment}" <br>
        <i>- ${review.reviewerName}, ${review.date}</i></p>
`;
}
})
.catch(function (error) {
    console.log("Error: " + error);
});
