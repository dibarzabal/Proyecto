let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idProducto = qsObj.get("id");

let contenedorInfo = document.querySelector(".info");
let contenedorResenas = document.querySelector(".reseñas");

contenedorInfo.innerHTML = "";
contenedorResenas.innerHTML = "<h3>Resenas de usuarios</h3>";

fetch("https://dummyjson.com/products/" + idProducto)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(producto){
        contenedorInfo.innerHTML = `
            <img src="${producto.thumbnail}" class="foto_producto">
                
                <div class="descripcion">
                    <h1>${producto.title}</h1>
                    <p><b>Marca:</b> ${producto.brand}</p>
                    <p><b>Categoria:</b>
                        <a href="./category.html?cat=${producto.category}">${producto.category}</a></p> 
                    <p>${producto.description}</p>
                    <p><b>Precio:</b>$${producto.price}</p>
                    <p><b>Stock:</b> ${producto.stock}</p>
                    <p><i>#${producto.tags[0] || ""} #${producto.tags[1] || ""} #${producto.tags[2] || ""}</i></p>  
                    </div>
                `;
            return fetch("https://dummyjson.com/products/" + idProducto + "/reviews");
        })
        .then(function(respuesta){
            return respuesta.json();
        })
       
        .then(function(datosReviews){
            let lista = datosReviews.reviews;

            for(let i = 0; i < lista.length; i++){
                let r = lista[i];

                contenedorResenas.innerHTML += `
                <p> 
                    ⭐Rating: ${r.rating}<br>
                    "${r.comment}" <br>
                    <i>- ${r.reviewerName}, ${r.date}</i>
                </p>
            `;
            }
        })
        .catch(function(error){
            console.log("Error:", error);
        });